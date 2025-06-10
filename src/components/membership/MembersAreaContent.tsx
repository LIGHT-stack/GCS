import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/lib/supabase';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Award, User, FileBarChart, BookOpen } from 'lucide-react';
import LoginForm from '@/components/auth/LoginForm';
import SignUpForm from '@/components/auth/SignUpForm';

interface LoggedInMemberContentProps {
  memberName: string;
  memberNumber: string;
  onLogout: () => void;
}

const LoggedInMemberContent = ({ memberName, memberNumber, onLogout }: LoggedInMemberContentProps) => {
  return (
    <div className="space-y-8">
      <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Welcome, {memberName}</h2>
        <p className="text-gray-600 mb-6">Member ID: {memberNumber}</p>
        <Button variant="outline" onClick={onLogout}>Sign Out</Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="bg-white/90 backdrop-blur-sm">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Member Resources</h3>
            <ul className="space-y-4">
              <li className="flex items-center text-gray-700">
                <FileBarChart className="h-5 w-5 mr-2 text-gcs-blue" />
                Research Papers
              </li>
              <li className="flex items-center text-gray-700">
                <BookOpen className="h-5 w-5 mr-2 text-gcs-blue" />
                Publications
              </li>
            </ul>
          </CardContent>
        </Card>
        
        <Card className="bg-white/90 backdrop-blur-sm">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Member Benefits</h3>
            <ul className="space-y-4">
              <li className="flex items-center text-gray-700">
                <Award className="h-5 w-5 mr-2 text-gcs-blue" />
                Professional Development
              </li>
              <li className="flex items-center text-gray-700">
                <User className="h-5 w-5 mr-2 text-gcs-blue" />
                Networking Events
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

const MembersAreaContent = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [memberName, setMemberName] = useState("");
  const [memberNumber, setMemberNumber] = useState("");
  const [activeTab, setActiveTab] = useState<'login' | 'register'>('login');
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleLoginSuccess = async () => {
    try {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session?.user) return;

      const { data: profile } = await supabase
        .from('gcs_profiles')
        .select('*')
        .eq('id', session.user.id)
        .single();

      if (profile) {
        setIsLoggedIn(true);
        setMemberName(profile.name);
        setMemberNumber(profile.id.slice(0, 8)); // Using first 8 chars of UUID as member number
      }
    } catch (error) {
      console.error('Error fetching profile:', error);
    }
  };

  const handleRegisterSuccess = () => {
    setActiveTab('login');
    toast({
      title: "Registration Successful",
      description: "Please log in with your credentials.",
    });
  };

  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
      setIsLoggedIn(false);
      setMemberName("");
      setMemberNumber("");
      navigate('/membership');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  if (isLoggedIn) {
    return <LoggedInMemberContent 
      memberName={memberName} 
      memberNumber={memberNumber} 
      onLogout={handleLogout} 
    />;
  }

  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
        Members-Only Area
      </h2>
      <p className="text-lg text-gray-600 mb-8 text-center max-w-3xl mx-auto">
        Access exclusive resources, publications, and benefits available only to GCS members. 
        Please log in with your membership credentials.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 backdrop-blur-sm">
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-r from-gcs-blue to-gcs-blue/70 p-4 rounded-full text-white">
              <Shield className="h-8 w-8" />
            </div>
          </div>
          
          {activeTab === 'login' ? (
            <LoginForm onSuccess={handleLoginSuccess} />
          ) : (
            <SignUpForm onSuccess={handleRegisterSuccess} />
          )}

          <div className="mt-6 text-center">
            <Button 
              variant="link" 
              onClick={() => setActiveTab(activeTab === 'login' ? 'register' : 'login')}
            >
              {activeTab === 'login' ? "Don't have an account? Register" : "Already have an account? Login"}
            </Button>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-gcs-blue/10 to-gcs-orange/5 p-8 rounded-xl border border-gcs-blue/20">
          <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
            <Shield className="h-5 w-5 mr-2 text-gcs-blue" />
            Premium Membership Benefits
          </h3>
          <ul className="space-y-4">
            <li className="flex items-center text-gray-700">
              <Award className="h-5 w-5 mr-2 text-gcs-blue" />
              <div>
                <h4 className="font-semibold">Exclusive Publications</h4>
                <p className="text-sm text-gray-600">Access to GCS journals, research papers, and publications.</p>
              </div>
            </li>
            <li className="flex items-center text-gray-700">
              <User className="h-5 w-5 mr-2 text-gcs-blue" />
              <div>
                <h4 className="font-semibold">Member Directory</h4>
                <p className="text-sm text-gray-600">Connect with other GCS members and expand your professional network.</p>
              </div>
            </li>
            <li className="flex items-center text-gray-700">
              <FileBarChart className="h-5 w-5 mr-2 text-gcs-blue" />
              <div>
                <h4 className="font-semibold">Research Grants</h4>
                <p className="text-sm text-gray-600">Apply for members-only scholarships and research grants.</p>
              </div>
            </li>
            <li className="flex items-center text-gray-700">
              <BookOpen className="h-5 w-5 mr-2 text-gcs-blue" />
              <div>
                <h4 className="font-semibold">Online Learning</h4>
                <p className="text-sm text-gray-600">Access to webinars, courses, and educational materials.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MembersAreaContent;
