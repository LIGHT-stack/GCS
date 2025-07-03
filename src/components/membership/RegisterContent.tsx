import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { AlertCircle, CheckCircle2 } from 'lucide-react';

const RegisterContent = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add registration logic here
    toast({
      title: "Registration Submitted",
      description: "We will review your application and contact you shortly.",
    });
    navigate('/membership');
  };

  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
        Join the Ghana Chemical Society
      </h2>
      <p className="text-lg text-gray-600 mb-8 text-center max-w-3xl mx-auto">
        Complete the form below to begin your membership application process. 
        Our team will review your application and contact you with next steps.
      </p>

      <div className="max-w-2xl mx-auto">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  id="firstName"
                  placeholder="Enter your first name"
                  required
                />
              </div>
              <div>
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  id="lastName"
                  placeholder="Enter your last name"
                  required
                />
              </div>
            </div>

            <div>
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email address"
                required
              />
            </div>

            <div>
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="Enter your phone number"
                required
              />
            </div>

            <div>
              <Label htmlFor="institution">Institution/Organization</Label>
              <Input
                id="institution"
                placeholder="Enter your institution or organization"
                required
              />
            </div>

            <div>
              <Label htmlFor="position">Position/Title</Label>
              <Input
                id="position"
                placeholder="Enter your position or title"
                required
              />
            </div>

            <div>
              <Label htmlFor="membershipType">Membership Type</Label>
              <select
                id="membershipType"
                className="w-full rounded-md border border-gray-300 px-3 py-2"
                required
              >
                <option value="">Select membership type</option>
                <option value="fellow">Fellow Member</option>
                <option value="regular">Regular Member</option>
                <option value="student">Student Member</option>
              </select>
            </div>

            <div>
              <Label htmlFor="qualification">Highest Qualification</Label>
              <Input
                id="qualification"
                placeholder="Enter your highest qualification"
                required
              />
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex items-start gap-3">
            <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5" />
            <div>
              <h4 className="font-medium text-blue-800">Membership Benefits</h4>
              <ul className="text-sm text-blue-700 space-y-1 mt-1">
                <li>• Access to exclusive resources and publications</li>
                <li>• Networking opportunities with industry professionals</li>
                <li>• Professional development and training programs</li>
                <li>• Conference and event participation</li>
              </ul>
            </div>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 flex items-start gap-3">
            <AlertCircle className="h-5 w-5 text-yellow-600 mt-0.5" />
            <div>
              <h4 className="font-medium text-yellow-800">Important Notice</h4>
              <p className="text-sm text-yellow-700">
                Please ensure all information provided is accurate. You will receive a confirmation email 
                once your application is received. Our team will review your application and contact you 
                with next steps.
              </p>
            </div>
          </div>

          <Button type="submit" className="w-full bg-gcs-blue hover:bg-gcs-blue/90">
            Submit Application
          </Button>
        </form>
      </div>
    </div>
  );
};

export default RegisterContent;
