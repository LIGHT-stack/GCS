
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MembershipHeader from '../components/membership/MembershipHeader';
import BenefitsContent from '../components/membership/BenefitsContent';
import AnimatedBackground from '../components/AnimatedBackground';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const Membership = () => {
  // Update page title
  useEffect(() => {
    document.title = 'Membership | Ghana Chemical Society - GCS';
  }, []);

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <AnimatedBackground />
      <Navbar />
      <MembershipHeader />
      
      <div className="max-w-7xl mx-auto px-4 py-12 space-y-16">
        <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 md:p-8">
          <BenefitsContent />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all">
            <CardHeader>
              <CardTitle className="text-2xl text-gcs-blue">Register Membership</CardTitle>
              <CardDescription>Join the Ghana Chemical Society</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Become a member of GCS and gain access to exclusive resources, networking opportunities, 
                and professional development events.
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full bg-gcs-blue hover:bg-gcs-blue/80">
                <Link to="/membership/register">
                  Register Now <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
          
          <Card className="bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all">
            <CardHeader>
              <CardTitle className="text-2xl text-gcs-orange">Renew Membership</CardTitle>
              <CardDescription>Continue your GCS membership</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Already a member? Renew your membership to continue enjoying all the benefits and 
                stay connected with the chemical sciences community.
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full bg-gcs-orange hover:bg-gcs-orange/80">
                <Link to="/membership/renew">
                  Renew Now <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
          
          <Card className="bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all">
            <CardHeader>
              <CardTitle className="text-2xl text-green-600">Members Area</CardTitle>
              <CardDescription>Exclusive content for members</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Access members-only resources including journals, publications, networking 
                opportunities, and professional development tools.
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full bg-green-600 hover:bg-green-700">
                <Link to="/membership/members-area">
                  Members Area <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Membership;
