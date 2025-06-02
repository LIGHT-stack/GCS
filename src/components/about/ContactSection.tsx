
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would submit the form data to a server
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. We'll respond as soon as possible.",
    });
  };

  return (
    <section id="contact" className="py-16">
      <h2 className="section-title mb-8">Contact Us</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Get in Touch</h3>
          <p className="text-gray-600 mb-8">
            Have questions about the Ghana Chemical Society or interested in becoming a member? 
            We'd love to hear from you. Fill out the form or use the contact information provided.
          </p>
          
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex">
                  <MapPin className="h-6 w-6 text-gcs-blue mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Our Address</h4>
                    <p className="text-gray-600">Department of Chemistry, KNUST, Kumasi, Ghana</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex">
                  <Phone className="h-6 w-6 text-gcs-blue mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Phone</h4>
                    <p className="text-gray-600">+233 (0) 530 446 824</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex">
                  <Mail className="h-6 w-6 text-gcs-blue mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p className="text-gray-600">ghchemicalsocietyashanti@gmail.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex">
                  <Mail className="h-6 w-6 text-gcs-blue mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Membership Inquiries</h4>
                    <p className="text-gray-600">gcsmembership@gmail.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex">
                  <Clock className="h-6 w-6 text-gcs-blue mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Office Hours</h4>
                    <p className="text-gray-600">Monday to Friday: 9:00 AM - 5:00 PM</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div>
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Send Us a Message</h3>
            <p className="text-gray-600">We'll get back to you as soon as possible</p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Your Name</Label>
                <Input id="name" placeholder="Enter your name" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="Enter your email" required />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Input id="subject" placeholder="Enter subject" required />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" placeholder="Enter your message" rows={5} required />
            </div>
            
            <Button type="submit" className="w-full">Submit Message</Button>
          </form>
        </div>
      </div>
      
      <div className="mt-12">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Our Location</h3>
        <div className="w-full h-[400px] rounded-lg overflow-hidden border border-gray-200">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.5931926591126!2d-1.5723870848609426!3d6.674225395182687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdb943e2d41fdb5%3A0xbbcfc4d56732326e!2sKwame%20Nkrumah%20University%20of%20Science%20and%20Technology!5e0!3m2!1sen!2sus!4v1712182647412!5m2!1sen!2sus" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Ghana Chemical Society Location"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
