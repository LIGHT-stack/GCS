import React, { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { LogOut, User, Users, FileText, Award, Shield } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedBackground from '@/components/AnimatedBackground';

interface MemberProfile {
  id: string;
  name: string;
  email: string;
  phone: string;
  place_of_work: string;
  position: string;
  membership_type: string;
  status: string;
  role: string;
  created_at: string;
  updated_at: string;
}

/**
 * MembersArea Component
 * 
 * Displays the members-only area with exclusive content for GCS members
 * 
 * @returns {JSX.Element} The rendered MembersArea page
 */
const MembersArea = () => {
  const [profile, setProfile] = useState<MemberProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Members Area | Ghana Chemical Society - GCS";
    checkUser();
  }, []);

  const checkUser = async () => {
    try {
      const { data: { user }, error: userError } = await supabase.auth.getUser();
      
      if (userError) throw userError;
      
      if (!user) {
        toast({
          title: "Authentication Required",
          description: "Please log in to access the members area",
          variant: "destructive"
        });
        navigate('/auth');
        return;
      }

      const { data: profile, error: profileError } = await supabase
        .from('gcs_profiles')
        .select('*')
        .eq('id', user.id)
        .single();

      if (profileError) throw profileError;

      if (!profile) {
        toast({
          title: "Profile Not Found",
          description: "Please complete your profile setup",
          variant: "destructive"
        });
        navigate('/membership/register');
        return;
      }

      if (profile.status !== 'active') {
        toast({
          title: "Membership Pending",
          description: "Your membership is still being reviewed",
          variant: "destructive"
        });
        navigate('/membership');
        return;
      }

      setProfile(profile);
    } catch (error: any) {
      console.error('Error in checkUser:', error);
      toast({
        title: "Error",
        description: error.message || "Failed to fetch profile",
        variant: "destructive"
      });
      navigate('/auth');
    } finally {
      setLoading(false);
    }
  };

  const handleSignOut = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;

      toast({
        title: "Signed Out",
        description: "You have been successfully signed out",
      });

      navigate('/');
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to sign out",
        variant: "destructive"
      });
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <AnimatedBackground />
        <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin mb-4">
              <svg className="h-12 w-12 text-gcs-blue" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-gray-800">Loading...</h2>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!profile) return null;

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <AnimatedBackground />
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Members Area</h1>
          <div className="flex gap-4">
            {profile.role === 'admin' && (
              <Button
                variant="outline"
                onClick={() => navigate('/admin')}
                className="flex items-center gap-2"
              >
                <Shield className="h-4 w-4" />
                Admin Dashboard
              </Button>
            )}
            <Button variant="outline" onClick={handleSignOut}>
              <LogOut className="mr-2 h-4 w-4" />
              Sign Out
            </Button>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Profile Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-gray-500">Name</h3>
                  <p className="text-lg">{profile.name}</p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-500">Email</h3>
                  <p className="text-lg">{profile.email}</p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-500">Phone</h3>
                  <p className="text-lg">{profile.phone}</p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-500">Place of Work</h3>
                  <p className="text-lg">{profile.place_of_work}</p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-500">Position</h3>
                  <p className="text-lg">{profile.position}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Membership Details</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-gray-500">Membership Type</h3>
                  <p className="text-lg">{profile.membership_type}</p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-500">Status</h3>
                  <Badge variant={profile.status === 'active' ? 'default' : 'secondary'}>
                    {profile.status}
                  </Badge>
                </div>
                <div>
                  <h3 className="font-medium text-gray-500">Member Since</h3>
                  <p className="text-lg">{new Date(profile.created_at).toLocaleDateString()}</p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-500">Role</h3>
                  <p className="text-lg capitalize">{profile.role}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-3">
                <Button variant="outline" className="h-auto py-4">
                  <div className="flex flex-col items-center gap-2">
                    <FileText className="h-6 w-6" />
                    <span>View Resources</span>
                  </div>
                </Button>
                <Button variant="outline" className="h-auto py-4">
                  <div className="flex flex-col items-center gap-2">
                    <Users className="h-6 w-6" />
                    <span>Network</span>
                  </div>
                </Button>
                <Button variant="outline" className="h-auto py-4">
                  <div className="flex flex-col items-center gap-2">
                    <Award className="h-6 w-6" />
                    <span>Certifications</span>
                  </div>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MembersArea;
