import React, { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { LogOut, User, Users, FileText, Award } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface MemberProfile {
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

const AdminDashboard = () => {
  const [members, setMembers] = useState<MemberProfile[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    fetchMembers();
  }, []);

  const fetchMembers = async () => {
    try {
      const { data, error } = await supabase
        .from('gcs_profiles')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setMembers(data || []);
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to fetch members",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const handleApproval = async (memberId: string, approved: boolean) => {
    try {
      const { error } = await supabase
        .from('gcs_profiles')
        .update({ 
          status: approved ? 'active' : 'rejected',
          updated_at: new Date().toISOString()
        })
        .eq('id', memberId);

      if (error) throw error;

      toast({
        title: approved ? "Member Approved" : "Member Rejected",
        description: approved ? "The member has been approved successfully" : "The member has been rejected",
      });

      fetchMembers();
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to update member status",
        variant: "destructive"
      });
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

  const pendingMembers = members.filter(m => m.status === 'pending');
  const activeMembers = members.filter(m => m.status === 'active');
  const rejectedMembers = members.filter(m => m.status === 'rejected');

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>
        <Button variant="outline" onClick={handleSignOut}>
          <LogOut className="mr-2 h-4 w-4" />
          Sign Out
        </Button>
      </div>

      <Tabs defaultValue="pending" className="space-y-4">
        <TabsList>
          <TabsTrigger value="pending" className="flex items-center gap-2">
            <Users className="h-4 w-4" />
            Pending ({pendingMembers.length})
          </TabsTrigger>
          <TabsTrigger value="active" className="flex items-center gap-2">
            <Award className="h-4 w-4" />
            Active ({activeMembers.length})
          </TabsTrigger>
          <TabsTrigger value="rejected" className="flex items-center gap-2">
            <FileText className="h-4 w-4" />
            Rejected ({rejectedMembers.length})
          </TabsTrigger>
        </TabsList>

        <TabsContent value="pending" className="space-y-4">
          {pendingMembers.map((member) => (
            <Card key={member.id}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl">
                      {member.name}
                    </CardTitle>
                    <p className="text-gray-600">{member.email}</p>
                  </div>
                  <Badge variant="default">Pending</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-4">
                  <p><span className="font-medium">Phone:</span> {member.phone}</p>
                  <p><span className="font-medium">Place of Work:</span> {member.place_of_work}</p>
                  <p><span className="font-medium">Position:</span> {member.position}</p>
                  <p><span className="font-medium">Membership Type:</span> {member.membership_type}</p>
                  <p><span className="font-medium">Applied:</span> {new Date(member.created_at).toLocaleDateString()}</p>
                </div>
                <div className="flex gap-4">
                  <Button
                    variant="outline"
                    className="text-red-600 hover:text-red-700"
                    onClick={() => handleApproval(member.id, false)}
                  >
                    Reject
                  </Button>
                  <Button
                    onClick={() => handleApproval(member.id, true)}
                  >
                    Approve
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="active" className="space-y-4">
          {activeMembers.map((member) => (
            <Card key={member.id}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl">
                      {member.name}
                    </CardTitle>
                    <p className="text-gray-600">{member.email}</p>
                  </div>
                  <Badge variant="success">Active</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p><span className="font-medium">Phone:</span> {member.phone}</p>
                  <p><span className="font-medium">Place of Work:</span> {member.place_of_work}</p>
                  <p><span className="font-medium">Position:</span> {member.position}</p>
                  <p><span className="font-medium">Membership Type:</span> {member.membership_type}</p>
                  <p><span className="font-medium">Joined:</span> {new Date(member.created_at).toLocaleDateString()}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="rejected" className="space-y-4">
          {rejectedMembers.map((member) => (
            <Card key={member.id}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl">
                      {member.name}
                    </CardTitle>
                    <p className="text-gray-600">{member.email}</p>
                  </div>
                  <Badge variant="destructive">Rejected</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p><span className="font-medium">Phone:</span> {member.phone}</p>
                  <p><span className="font-medium">Place of Work:</span> {member.place_of_work}</p>
                  <p><span className="font-medium">Position:</span> {member.position}</p>
                  <p><span className="font-medium">Membership Type:</span> {member.membership_type}</p>
                  <p><span className="font-medium">Rejected:</span> {new Date(member.updated_at).toLocaleDateString()}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdminDashboard; 