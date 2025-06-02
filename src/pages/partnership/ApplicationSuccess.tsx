import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import AnimatedBackground from '../../components/AnimatedBackground';
import { CheckCircle2, ArrowRight, Home, Mail } from 'lucide-react';

const ApplicationSuccess = () => {
  const navigate = useNavigate();

  // Update page title
  useEffect(() => {
    document.title = 'Application Submitted | Ghana Chemical Society - GCS';
  }, []);

  return (
    <div className="min-h-screen relative overflow-x-hidden bg-gradient-to-b from-gray-50 to-white">
      <AnimatedBackground />
      <Navbar />
      
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gcs-blue/20 via-gcs-orange/10 to-transparent" />
<<<<<<< HEAD
        <div className="absolute inset-0 bg-[url('/lovable-uploads/f325ad61-649a-4137-b354-0cdcc5dda909.png')] bg-cover bg-center opacity-10" />
=======
        <div className="absolute inset-0 bg-[url('/src/assets/globe ghana.png')] bg-cover bg-center opacity-10" />
>>>>>>> 345f58f175da680e4e16a649576bd9f6922fa1ff
        
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center justify-center mb-6 bg-green-100 w-20 h-20 rounded-full">
              <CheckCircle2 className="h-10 w-10 text-green-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Application Submitted Successfully
            </h1>
            <p className="text-xl text-gray-600">
              Thank you for your interest in partnering with the Ghana Chemical Society.
              We will review your application and get back to you soon.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900">What's Next?</CardTitle>
                <CardDescription className="text-base">
                  Here's what you can expect in the coming days
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Confirmation Email</h3>
                    <p className="text-gray-600">
                      You will receive a confirmation email with your application details and a reference number.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Application Review</h3>
                    <p className="text-gray-600">
                      Our team will review your application within 5-7 business days.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <ArrowRight className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Next Steps</h3>
                    <p className="text-gray-600">
                      We will contact you to discuss the next steps and answer any questions you may have.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => navigate('/')}
                className="bg-gcs-blue hover:bg-gcs-blue/90 text-white"
              >
                <Home className="mr-2 h-5 w-5" />
                Return to Home
              </Button>
              <Button 
                onClick={() => navigate('/partnership')}
                variant="outline"
                className="border-2"
              >
                Back to Partnership
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ApplicationSuccess; 