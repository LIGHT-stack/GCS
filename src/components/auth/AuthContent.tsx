import React, { useState, useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';
import { Card, CardContent } from "@/components/ui/card";
import { LockKeyhole, UserPlus } from 'lucide-react';
import { useSearchParams, useNavigate } from 'react-router-dom';

interface AuthContentProps {
  initialTab?: string;
}

const AuthContent: React.FC<AuthContentProps> = ({ initialTab = 'login' }) => {
  const [activeTab, setActiveTab] = useState(initialTab);
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const tab = searchParams.get('tab');
    if (tab && (tab === 'login' || tab === 'register')) {
      setActiveTab(tab);
    }
  }, [searchParams]);

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    setSearchParams({ tab: value });
  };

  const handleLoginSuccess = () => {
    navigate('/dashboard');
  };

  const handleRegisterSuccess = () => {
    setActiveTab('login');
    setSearchParams({ tab: 'login' });
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
          Welcome to Ghana Chemical Society
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Join our community of chemistry professionals, or log in to access exclusive member benefits.
        </p>
      </div>
      
      <Card className="bg-white/90 backdrop-blur-sm shadow-lg">
        <CardContent className="p-6 md:p-8">
          <Tabs 
            defaultValue={activeTab}
            value={activeTab}
            onValueChange={handleTabChange}
            className="w-full"
          >
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-2 gap-4 bg-gray-100 p-1 rounded-lg">
                <TabsTrigger value="login" className="flex items-center gap-2">
                  <LockKeyhole className="w-4 h-4" />
                  <span>Login</span>
                </TabsTrigger>
                <TabsTrigger value="register" className="flex items-center gap-2">
                  <UserPlus className="w-4 h-4" />
                  <span>Sign Up</span>
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="login" className="mt-0">
              <LoginForm onSuccess={handleLoginSuccess} />
            </TabsContent>
            
            <TabsContent value="register" className="mt-0">
              <SignUpForm onSuccess={handleRegisterSuccess} />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
      
      <div className="mt-8 text-center text-gray-600">
        <p>Need help? Contact us at <a href="mailto:support@ghanachemicalsociety.org" className="text-gcs-blue hover:underline">support@ghanachemicalsociety.org</a></p>
      </div>
    </div>
  );
};

export default AuthContent;
