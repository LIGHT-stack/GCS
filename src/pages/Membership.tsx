import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedBackground from '@/components/AnimatedBackground';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { 
  Users, 
  GraduationCap, 
  Briefcase, 
  Globe, 
  Award,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

const Membership = () => {
  // Update page title
  useEffect(() => {
    document.title = 'Membership | Ghana Chemical Society - GCS';
  }, []);

  const membershipTiers = [
    {
      title: 'Fellow Member',
      description: 'For distinguished professionals with significant contributions to the chemical sciences',
      price: 'GHS 500',
      period: 'per year',
      features: [
        'Full voting rights',
        'Access to all GCS resources',
        'Priority event registration',
        'Leadership opportunities',
        'International recognition'
      ],
      icon: Award,
      color: 'bg-purple-100 text-purple-600'
    },
    {
      title: 'Regular Member',
      description: 'For practicing chemical professionals and researchers',
      price: 'GHS 300',
      period: 'per year',
      features: [
        'Full access to GCS resources',
        'Event participation',
        'Professional development',
        'Networking opportunities',
        'Industry updates'
      ],
      icon: Briefcase,
      color: 'bg-blue-100 text-blue-600'
    },
    {
      title: 'Student Member',
      description: 'For undergraduate and graduate students in chemical sciences',
      price: 'GHS 100',
      period: 'per year',
      features: [
        'Access to student resources',
        'Conference discounts',
        'Mentorship opportunities',
        'Career guidance',
        'Student events'
      ],
      icon: GraduationCap,
      color: 'bg-green-100 text-green-600'
    }
  ];

  const benefits = [
    {
      title: 'Professional Development',
      description: 'Access to training programs, workshops, and certification courses to enhance your skills and knowledge.',
      icon: GraduationCap
    },
    {
      title: 'Networking Opportunities',
      description: 'Connect with industry professionals, researchers, and fellow chemists through events and online platforms.',
      icon: Users
    },
    {
      title: 'International Recognition',
      description: 'Be part of a globally recognized professional body with connections to international chemical societies.',
      icon: Globe
    },
    {
      title: 'Career Advancement',
      description: 'Access to job opportunities, career resources, and professional guidance to advance your career.',
      icon: Briefcase
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <AnimatedBackground />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Join the Ghana Chemical Society
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Become part of Ghana's leading professional body for chemical scientists and professionals.
              Access exclusive resources, networking opportunities, and professional development programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/auth">
                <Button size="lg" className="bg-gcs-blue hover:bg-gcs-blue/90">
                  Register Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/auth">
                <Button size="lg" variant="outline">
                  Renew Membership
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Membership Benefits</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-6">
                <benefit.icon className="h-12 w-12 text-gcs-blue mb-4" />
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Tiers */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Membership Tiers</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {membershipTiers.map((tier, index) => (
              <Card key={index} className="p-6">
                <div className={`${tier.color} p-3 rounded-lg w-fit mb-4`}>
                  <tier.icon className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold mb-2">{tier.title}</h3>
                <p className="text-gray-600 mb-4">{tier.description}</p>
                <div className="mb-6">
                  <span className="text-3xl font-bold">{tier.price}</span>
                  <span className="text-gray-600"> {tier.period}</span>
                </div>
                <ul className="space-y-3 mb-6">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/auth">
                  <Button className="w-full bg-gcs-blue hover:bg-gcs-blue/90">
                    Join Now
                  </Button>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gcs-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Join?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Take the first step towards advancing your career in chemical sciences.
            Join our community of professionals today.
          </p>
          <Link to="/auth">
            <Button size="lg" variant="secondary">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Membership;
