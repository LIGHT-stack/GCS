import React, { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { LogOut, User, Mail, Building, Award, FileText, Calendar } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface UserProfile {
  id: string;
  name: string;
  email: string;
  phone: string;
  place_of_work: string;
  position: string;
  membership_type: string;
  status: string;
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
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const { data: { session }, error: sessionError } = await supabase.auth.getSession();
      
      if (sessionError) throw sessionError;

      if (!session) {
        navigate('/auth');
        return;
      }

      const { data, error } = await supabase
        .from('gcs_profiles')
        .select('*')
        .eq('id', session.user.id)
        .single();

      if (error) throw error;

      if (!data) {
        throw new Error('Profile not found');
      }

      setProfile(data);
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to load profile",
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
      <div className="min-h-screen flex items-center justify-center">
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
    );
  }

  if (!profile) {
    return null;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Members Area</h1>
        <Button variant="outline" onClick={handleSignOut}>
          <LogOut className="mr-2 h-4 w-4" />
          Sign Out
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <User className="mr-2 h-5 w-5" />
              Profile Information
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <p><span className="font-medium">Name:</span> {profile.name}</p>
              <p><span className="font-medium">Email:</span> {profile.email}</p>
              <p><span className="font-medium">Phone:</span> {profile.phone}</p>
              <p><span className="font-medium">Place of Work:</span> {profile.place_of_work}</p>
              <p><span className="font-medium">Position:</span> {profile.position}</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Award className="mr-2 h-5 w-5" />
              Membership Details
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <p><span className="font-medium">Status:</span></p>
                <Badge variant={
                  profile.status === 'active' ? 'success' :
                  profile.status === 'rejected' ? 'destructive' :
                  'default'
                }>
                  {profile.status}
                </Badge>
              </div>
              <p><span className="font-medium">Type:</span> {profile.membership_type}</p>
              <p><span className="font-medium">Member Since:</span> {new Date(profile.created_at).toLocaleDateString()}</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <FileText className="mr-2 h-5 w-5" />
              Member Resources
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Button className="w-full" variant="outline">
                <Calendar className="mr-2 h-4 w-4" />
                View Events Calendar
              </Button>
              <Button className="w-full" variant="outline">
                <FileText className="mr-2 h-4 w-4" />
                Access Publications
              </Button>
              <Button className="w-full" variant="outline">
                <Building className="mr-2 h-4 w-4" />
                Network Directory
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default MembersArea;
