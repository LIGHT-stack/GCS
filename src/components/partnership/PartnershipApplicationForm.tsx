import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight, Building2, FileText, Award, GraduationCap, Users } from 'lucide-react';

interface ApplicationFormProps {
  type: 'sponsorship' | 'research' | 'grants';
  tier?: 'platinum' | 'gold' | 'silver';
}

const PartnershipApplicationForm: React.FC<ApplicationFormProps> = ({ type, tier }) => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    organizationName: '',
    organizationType: '',
    contactName: '',
    position: '',
    email: '',
    phone: '',
    website: '',
    description: '',
    goals: '',
    additionalInfo: '',
    termsAccepted: false,
    privacyAccepted: false,
    sponsorshipTier: tier || '',
    researchGoals: '',
    grantType: '',
    budget: '',
    timeline: '',
  });

  // Get form title and description based on type
  const getFormDetails = () => {
    switch (type) {
      case 'sponsorship':
        return {
          title: 'Sponsorship Application',
          description: 'Complete the form below to become a partner of the Ghana Chemical Society.',
          icon: <Building2 className="h-6 w-6" />
        };
      case 'research':
        return {
          title: 'Research Proposal Submission',
          description: 'Submit your research proposal for funding consideration.',
          icon: <FileText className="h-6 w-6" />
        };
      case 'grants':
        return {
          title: 'Grant Application',
          description: 'Apply for research grants or scholarships.',
          icon: <Award className="h-6 w-6" />
        };
    }
  };

  const formDetails = getFormDetails();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Show success message
      toast({
        title: "Application Submitted",
        description: "Your application has been submitted successfully. We will review it and get back to you soon.",
        duration: 5000,
      });

      // Reset form
      setFormData({
        organizationName: '',
        organizationType: '',
        website: '',
        contactName: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        country: '',
        message: '',
        agreeToTerms: false,
        // Additional fields
        sponsorshipTier: tier || '',
        researchGoals: '',
        grantType: '',
        budget: '',
        timeline: '',
      });

      // Redirect to success page
      navigate('/partnership/apply/success');
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an error submitting your application. Please try again.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2 mb-2">
            {formDetails.icon}
            <CardTitle className="text-2xl font-bold text-gray-900">{formDetails.title}</CardTitle>
          </div>
          <CardDescription className="text-base">
            {formDetails.description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Organization Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">Organization Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="organizationName">Organization Name</Label>
                  <Input 
                    id="organizationName"
                    value={formData.organizationName}
                    onChange={(e) => setFormData({ ...formData, organizationName: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="organizationType">Organization Type</Label>
                  <Select 
                    value={formData.organizationType}
                    onValueChange={(value) => setFormData({ ...formData, organizationType: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select organization type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="academic">Academic Institution</SelectItem>
                      <SelectItem value="industry">Industry</SelectItem>
                      <SelectItem value="research">Research Institute</SelectItem>
                      <SelectItem value="government">Government Agency</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Organization Description</Label>
                <Textarea 
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Tell us about your organization"
                  required
                />
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">Contact Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="contactName">Contact Person</Label>
                  <Input 
                    id="contactName"
                    value={formData.contactName}
                    onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="position">Position</Label>
                  <Input 
                    id="position"
                    value={formData.position}
                    onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input 
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="website">Website (if applicable)</Label>
                <Input 
                  id="website"
                  type="url"
                  value={formData.website}
                  onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                  placeholder="https://"
                />
              </div>
            </div>

            {/* Application Specific Fields */}
            {type === 'sponsorship' && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">Sponsorship Details</h3>
                <div className="space-y-2">
                  <Label htmlFor="tier">Desired Partnership Tier</Label>
                  <Select 
                    value={tier}
                    onValueChange={(value) => setFormData({ ...formData, sponsorshipTier: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select partnership tier" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="platinum">Platinum Partner</SelectItem>
                      <SelectItem value="gold">Gold Partner</SelectItem>
                      <SelectItem value="silver">Silver Partner</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            )}

            {type === 'research' && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">Research Proposal</h3>
                <div className="space-y-2">
                  <Label htmlFor="goals">Research Goals</Label>
                  <Textarea 
                    id="goals"
                    value={formData.goals}
                    onChange={(e) => setFormData({ ...formData, goals: e.target.value })}
                    placeholder="Describe your research goals and objectives"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="additionalInfo">Additional Information</Label>
                  <Textarea 
                    id="additionalInfo"
                    value={formData.additionalInfo}
                    onChange={(e) => setFormData({ ...formData, additionalInfo: e.target.value })}
                    placeholder="Any additional information about your research proposal"
                  />
                </div>
              </div>
            )}

            {type === 'grants' && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">Grant Application</h3>
                <div className="space-y-2">
                  <Label htmlFor="goals">Project Goals</Label>
                  <Textarea 
                    id="goals"
                    value={formData.goals}
                    onChange={(e) => setFormData({ ...formData, goals: e.target.value })}
                    placeholder="Describe your project goals and expected outcomes"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="additionalInfo">Additional Information</Label>
                  <Textarea 
                    id="additionalInfo"
                    value={formData.additionalInfo}
                    onChange={(e) => setFormData({ ...formData, additionalInfo: e.target.value })}
                    placeholder="Any additional information about your grant application"
                  />
                </div>
              </div>
            )}

            {/* Terms and Conditions */}
            <div className="space-y-4">
              <div className="flex items-start space-x-2">
                <Checkbox 
                  id="terms"
                  checked={formData.termsAccepted}
                  onCheckedChange={(checked) => setFormData({ ...formData, termsAccepted: checked as boolean })}
                  required
                />
                <Label htmlFor="terms" className="text-sm text-gray-600">
                  I agree to the terms and conditions of the partnership program
                </Label>
              </div>
              <div className="flex items-start space-x-2">
                <Checkbox 
                  id="privacy"
                  checked={formData.privacyAccepted}
                  onCheckedChange={(checked) => setFormData({ ...formData, privacyAccepted: checked as boolean })}
                  required
                />
                <Label htmlFor="privacy" className="text-sm text-gray-600">
                  I consent to the processing of my personal data
                </Label>
              </div>
            </div>

            <Button 
              type="submit" 
              className="w-full bg-blue-600 hover:bg-blue-700 text-white"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Submit Application'}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default PartnershipApplicationForm; 