import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Lock, LogIn, Mail } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';

const loginSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z.string().min(1, { message: "Password is required" })
});

type LoginFormValues = z.infer<typeof loginSchema>;

interface LoginFormProps {
  onSuccess: () => void;
}

const LoginForm = ({ onSuccess }: LoginFormProps) => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);
  
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: ""
    }
  });

  const onSubmit = async (data: LoginFormValues) => {
    try {
      // Sign in with Supabase Auth
      const { error: signInError, data: authData } = await supabase.auth.signInWithPassword({
        email: data.email,
        password: data.password
      });

      if (signInError) throw signInError;

      if (!authData.user) {
        throw new Error('No user data returned from sign in');
      }

      // Get user profile from gcs_profiles
      const { data: profile, error: profileError } = await supabase
        .from('gcs_profiles')
        .select('*')
        .eq('id', authData.user.id)
        .single();

      if (profileError) throw profileError;

      if (!profile) {
        throw new Error('Profile not found');
      }

      // Update last login timestamp
      await supabase
        .from('gcs_profiles')
        .update({ last_login_at: new Date().toISOString() })
        .eq('id', authData.user.id);

      // Check membership status
      if (profile.status === 'pending') {
        toast({
          title: "Account Pending",
          description: "Your account is pending approval. You can still access basic features.",
        });
      } else if (profile.status === 'expired') {
        toast({
          title: "Membership Expired",
          description: "Your membership has expired. Please renew to access all features.",
          variant: "destructive"
        });
      } else if (profile.status === 'suspended') {
        toast({
          title: "Account Suspended",
          description: "Your account has been suspended. Please contact support.",
          variant: "destructive"
        });
        return;
      }

      // Show success message
      toast({
        title: "Login Successful",
        description: "Welcome back to GCS!",
      });

      // Reset form and trigger success callback
      form.reset();
      onSuccess();
    } catch (error: any) {
      console.error('Login error:', error);
      toast({
        title: "Login Failed",
        description: error.message || "Invalid email or password",
        variant: "destructive"
      });
    }
  };

  const handleGoogleLogin = async () => {
    setIsGoogleLoading(true);
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/auth/callback`,
          queryParams: {
            access_type: 'offline',
            prompt: 'consent',
          },
        }
      });

      if (error) throw error;
    } catch (error: any) {
      console.error('Google login error:', error);
      toast({
        title: "Google Login Failed",
        description: error.message || "An error occurred during Google login",
        variant: "destructive"
      });
    } finally {
      setIsGoogleLoading(false);
    }
  };

  const handleGitHubLogin = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'github',
        options: {
          redirectTo: `${window.location.origin}/auth/callback`
        }
      });

      if (error) throw error;
    } catch (error: any) {
      toast({
        title: "GitHub Login Failed",
        description: error.message || "An error occurred during GitHub login",
        variant: "destructive"
      });
    }
  };

  return (
    <div>
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Welcome Back</h2>
        <p className="text-gray-600 mt-2">Sign in to your GCS account</p>
      </div>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
                    <Input {...field} type="email" placeholder="Your email address" className="pl-10" />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
                    <Input {...field} type="password" placeholder="Your password" className="pl-10" />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button 
            type="submit" 
            className="w-full bg-gcs-blue hover:bg-gcs-blue/80"
            disabled={form.formState.isSubmitting}
          >
            {form.formState.isSubmitting ? (
              <span className="flex items-center">
                <span className="animate-spin mr-2">
                  <svg className="h-5 w-5" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                </span>
                Logging in...
              </span>
            ) : (
              "Sign In"
            )}
          </Button>
        </form>
      </Form>
      
      <div className="mt-8">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-gray-300"></span>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">Or continue with</span>
          </div>
        </div>
        
        <div className="mt-6 grid grid-cols-2 gap-3">
          <Button
            variant="outline"
            className="w-full mb-4 flex items-center justify-center gap-2 hover:bg-gray-50"
            onClick={handleGoogleLogin}
            disabled={isGoogleLoading}
          >
            {isGoogleLoading ? (
              <span className="flex items-center">
                <svg className="w-5 h-5 mr-2 animate-spin" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
                Processing...
              </span>
            ) : (
              <>
                <FcGoogle className="h-5 w-5" />
                Continue with Google
              </>
            )}
          </Button>
          <Button variant="outline" className="w-full" onClick={handleGitHubLogin}>
            <svg className="mr-2 h-5 w-5 text-[#24292F]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.8 12.9c0-1.7-0.5-3.1-1.4-4.1 0.3-1.4 0.1-2.8-0.6-4-0.1-0.1-0.2-0.2-0.3-0.2-0.3-0.1-1.2-0.3-3.1 0.8-1.5-0.4-3.1-0.4-4.6 0-1.9-1.1-2.8-0.9-3.1-0.8-0.1 0-0.2 0.1-0.3 0.2-0.6 1.2-0.8 2.6-0.5 4-0.9 1-1.4 2.4-1.4 4.1 0 5.1 3.2 6.3 6.2 6.7-0.2 0.5-0.4 1.2-0.5 1.9-0.2 0.1-0.4 0.2-0.6 0.2-1 0.3-1.9 0.3-2.3 0.1-0.4-0.2-0.6-0.5-0.8-0.8-0.4-0.6-1-1.2-1.7-1.3-0.4-0.1-0.8 0.1-1 0.4-0.2 0.3-0.1 0.8 0.2 1.1 0.1 0.1 0.9 0.8 1 2.2 0 1.5 1.2 2.4 2.7 2.8 0.3 0.1 0.7 0.1 1.1 0.1h0.1c0.1 0 0.2 0 0.2 0 0 0.8 0 1.4 0 1.4 0 0.4-0.3 0.9-1.1 0.9-0.2 0-0.4-0.1-0.6-0.2-0.2-0.2-0.3-0.4-0.3-0.6 0-0.2 0.1-0.4 0.2-0.5 0.1-0.1 0.2-0.3 0.2-0.5s-0.1-0.4-0.2-0.5c-0.1-0.1-0.3-0.2-0.5-0.2-0.1 0-0.3 0-0.4 0.1-0.2 0.1-0.4 0.3-0.6 0.5-0.2 0.3-0.3 0.7-0.3 1.2 0 0.4 0.1 0.9 0.3 1.2 0.2 0.3 0.5 0.6 0.9 0.8 0.4 0.2 0.8 0.2 1.2 0.2 0.6 0 1.1-0.2 1.5-0.5 0.4-0.3 0.6-0.8 0.6-1.3v-2.5c0-0.3 0.1-0.6 0.2-0.8s0.2-0.4 0.3-0.5v0c0.1 1.9 0.6 2.6 0.9 2.9 0.2 0.1 0.5 0.2 0.7 0.2 0.1 0 0.1 0 0.2 0 0.5-0.1 1-0.5 1.3-1-0.3 0-0.5-0.2-0.7-0.4-0.1-0.1-0.2-0.3-0.2-0.5s0.1-0.4 0.2-0.5c0.1-0.1 0.3-0.2 0.5-0.2s0.4 0.1 0.5 0.2c0.1 0.1 0.2 0.3 0.2 0.5 0 0.2-0.1 0.4-0.2 0.6-0.2 0.2-0.4 0.3-0.6 0.3h0c0 0.5 0.4 0.9 0.6 1.1 0.4 0.2 0.8 0.3 1.2 0.2 0.6-0.1 1.1-0.5 1.4-1.1 0.1-0.3 0.2-0.6 0.2-0.9v-3.4c0.1 0 0.1 0 0.2 0 3-0.4 6.1-1.6 6.1-6.7z"/>
            </svg>
            GitHub
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
