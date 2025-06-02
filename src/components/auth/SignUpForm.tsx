import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Checkbox } from "@/components/ui/checkbox";
import { Mail, User, Phone, Building, Briefcase, Lock } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { useNavigate } from 'react-router-dom';
import { Separator } from '@/components/ui/separator';
import { FcGoogle } from 'react-icons/fc';

// Match the database schema exactly
const signupSchema = z.object({
  name: z.string().min(2, { message: "Full name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z.string()
    .min(8, { message: "Password must be at least 8 characters" })
    .regex(/[a-z]/, { message: "Password must contain at least one lowercase letter" })
    .regex(/[A-Z]/, { message: "Password must contain at least one uppercase letter" })
    .regex(/[0-9]/, { message: "Password must contain at least one number" })
    .regex(/[^a-zA-Z0-9]/, { message: "Password must contain at least one special character" }),
  confirmPassword: z.string(),
  phone: z.string().min(10, { message: "Please enter a valid phone number" }),
  place_of_work: z.string().min(2, { message: "Place of work is required" }),
  position: z.string().min(2, { message: "Position is required" }),
  membership_type: z.enum(['student', 'regular', 'associate', 'fellow'], {
    required_error: "Please select a membership type"
  }),
  agreeTerms: z.boolean().refine(value => value === true, {
    message: "You must agree to terms and conditions"
  })
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});

type SignUpFormValues = z.infer<typeof signupSchema>;

interface SignUpFormProps {
  onSuccess: () => void;
}

const SignUpForm = ({ onSuccess }: SignUpFormProps) => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  
  const form = useForm<SignUpFormValues>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      phone: "",
      place_of_work: "",
      position: "",
      membership_type: "regular",
      agreeTerms: false
    }
  });

  const onSubmit = async (data: SignUpFormValues) => {
    setLoading(true);
    try {
      // Create new user with metadata
      const { data: authData, error: signUpError } = await supabase.auth.signUp({
        email: data.email,
        password: data.password,
        options: {
          data: {
            name: data.name,
            phone: data.phone,
            place_of_work: data.place_of_work,
            position: data.position,
            membership_type: data.membership_type
          }
        }
      });

      if (signUpError) throw signUpError;

      if (!authData.user) {
        throw new Error('Failed to create user account');
      }

      toast({
        title: "Registration Successful",
        description: "Your account has been created. Please check your email for verification instructions.",
      });

      // Reset form and trigger success callback
      form.reset();
      onSuccess();
    } catch (error: any) {
      console.error('Registration error:', error);
      toast({
        title: "Registration Failed",
        description: error.message || "An error occurred during registration",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignUp = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/auth/callback`
        }
      });

      if (error) throw error;
    } catch (error: any) {
      console.error('Google signup error:', error);
      toast({
        title: "Google Sign Up Failed",
        description: error.message || "An error occurred during Google sign up",
        variant: "destructive"
      });
    }
  };

  return (
    <div>
      <Button
        variant="outline"
        className="w-full mb-4 flex items-center justify-center gap-2 hover:bg-gray-50"
        onClick={handleGoogleSignUp}
      >
        <FcGoogle className="h-5 w-5" />
        Continue with Google
      </Button>

      <div className="relative my-4">
        <div className="absolute inset-0 flex items-center">
          <Separator className="w-full" />
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-white text-gray-500">Or continue with email</span>
        </div>
      </div>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
                    <Input {...field} placeholder="Your full name" className="pl-10 focus:ring-2 focus:ring-gcs-blue" />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
                    <Input {...field} type="email" placeholder="Your email address" className="pl-10 focus:ring-2 focus:ring-gcs-blue" />
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
                    <Input {...field} type="password" placeholder="Create a password" className="pl-10 focus:ring-2 focus:ring-gcs-blue" />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm Password</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
                    <Input {...field} type="password" placeholder="Confirm your password" className="pl-10 focus:ring-2 focus:ring-gcs-blue" />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
                    <Input {...field} placeholder="Your phone number" className="pl-10 focus:ring-2 focus:ring-gcs-blue" />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="place_of_work"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Place of Work</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
                    <Input {...field} placeholder="Your place of work" className="pl-10 focus:ring-2 focus:ring-gcs-blue" />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="position"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Position</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
                    <Input {...field} placeholder="Your position or role" className="pl-10 focus:ring-2 focus:ring-gcs-blue" />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="membership_type"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Membership Type</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="focus:ring-2 focus:ring-gcs-blue">
                      <SelectValue placeholder="Select membership type" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="student">Student Member</SelectItem>
                    <SelectItem value="regular">Regular Member</SelectItem>
                    <SelectItem value="associate">Associate Member</SelectItem>
                    <SelectItem value="fellow">Fellow</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="agreeTerms"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel>
                    I agree to the{' '}
                    <a href="/terms" className="text-gcs-blue hover:underline font-medium">
                      terms and conditions
                    </a>
                  </FormLabel>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />

          <Button 
            type="submit" 
            className="w-full bg-gcs-blue hover:bg-gcs-blue/90 transition-colors" 
            disabled={loading}
          >
            {loading ? 'Creating account...' : 'Create Account'}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default SignUpForm;
