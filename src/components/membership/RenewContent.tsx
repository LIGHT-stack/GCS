import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { AlertCircle } from 'lucide-react';

const RenewContent = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add renewal logic here
    toast({
      title: "Renewal Request Submitted",
      description: "We will process your renewal request and contact you shortly.",
    });
    navigate('/membership');
  };

  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
        Renew Your GCS Membership
      </h2>
      <p className="text-lg text-gray-600 mb-8 text-center max-w-3xl mx-auto">
        Complete the form below to renew your membership. Please ensure all information is accurate.
      </p>

      <div className="max-w-2xl mx-auto">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div>
              <Label htmlFor="memberId">Member ID</Label>
              <Input
                id="memberId"
                placeholder="Enter your member ID"
                required
              />
            </div>
            
            <div>
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your registered email"
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
              <Label htmlFor="duration">Renewal Duration</Label>
              <select
                id="duration"
                className="w-full rounded-md border border-gray-300 px-3 py-2"
                required
              >
                <option value="">Select duration</option>
                <option value="1">1 Year</option>
                <option value="2">2 Years</option>
                <option value="3">3 Years</option>
              </select>
            </div>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 flex items-start gap-3">
            <AlertCircle className="h-5 w-5 text-yellow-600 mt-0.5" />
            <div>
              <h4 className="font-medium text-yellow-800">Important Notice</h4>
              <p className="text-sm text-yellow-700">
                Please ensure your contact information is up to date. You will receive a confirmation email 
                once your renewal is processed.
              </p>
            </div>
          </div>

          <Button type="submit" className="w-full bg-gcs-blue hover:bg-gcs-blue/90">
            Submit Renewal Request
          </Button>
        </form>
      </div>
    </div>
  );
};

export default RenewContent;
