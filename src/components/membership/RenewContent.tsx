
import React from 'react';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Calendar } from 'lucide-react';

const renewSchema = z.object({
  membershipId: z.string().min(5, { message: "Please enter a valid membership ID" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  membershipType: z.string().min(1, { message: "Please select a membership type" }),
  renewalPeriod: z.string().min(1, { message: "Please select a renewal period" })
});

type RenewFormValues = z.infer<typeof renewSchema>;

const RenewContent = () => {
  const form = useForm<RenewFormValues>({
    resolver: zodResolver(renewSchema),
    defaultValues: {
      membershipId: "",
      email: "",
      membershipType: "",
      renewalPeriod: "1"
    }
  });

  const onSubmit = (data: RenewFormValues) => {
    console.log("Renewal form submitted:", data);
    // This would normally connect to a backend API
    alert("Thank you for renewing your membership! We'll process your renewal shortly.");
    form.reset();
  };

  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
        Renew Your GCS Membership
      </h2>
      <p className="text-lg text-gray-600 mb-8 text-center max-w-3xl mx-auto">
        Keep your membership active to continue enjoying all the benefits 
        of being part of Ghana's premier chemical society.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="membershipId"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Membership ID</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="Enter your GCS membership ID" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input {...field} type="email" placeholder="Your registered email" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="membershipType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Current Membership Type</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select membership type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="student">Student Member</SelectItem>
                          <SelectItem value="associate">Associate Member</SelectItem>
                          <SelectItem value="full">Full Member</SelectItem>
                          <SelectItem value="fellow">Fellow</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="renewalPeriod"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Renewal Period</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select renewal period" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="1">1 Year</SelectItem>
                          <SelectItem value="2">2 Years</SelectItem>
                          <SelectItem value="3">3 Years</SelectItem>
                          <SelectItem value="5">5 Years</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-gcs-blue hover:bg-gcs-blue/80 text-white font-semibold py-3 px-6 rounded-md transition-colors"
              >
                Renew Membership
              </button>
            </form>
          </Form>
        </div>
        
        <div className="space-y-6">
          <div className="bg-gcs-blue/10 rounded-lg p-6 border border-gcs-blue/30">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Renewal Benefits</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="flex-shrink-0 h-5 w-5 rounded-full bg-gcs-orange flex items-center justify-center text-white font-bold mr-2">✓</span>
                <span className="text-gray-700">Uninterrupted access to member benefits</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 h-5 w-5 rounded-full bg-gcs-orange flex items-center justify-center text-white font-bold mr-2">✓</span>
                <span className="text-gray-700">Multi-year discounts available</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 h-5 w-5 rounded-full bg-gcs-orange flex items-center justify-center text-white font-bold mr-2">✓</span>
                <span className="text-gray-700">Opportunity to upgrade membership tier</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 h-5 w-5 rounded-full bg-gcs-orange flex items-center justify-center text-white font-bold mr-2">✓</span>
                <span className="text-gray-700">Early access to upcoming events</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <div className="flex items-center text-gcs-blue mb-4">
              <Calendar className="mr-2 h-5 w-5" />
              <h3 className="text-lg font-semibold">Renewal Reminder Service</h3>
            </div>
            <p className="text-gray-700 mb-4">
              Never miss your renewal date again! Sign up to receive email reminders 
              30 days before your membership expires.
            </p>
            <div className="flex">
              <Input placeholder="Your email address" className="flex-grow mr-2" />
              <button className="bg-gcs-orange hover:bg-gcs-orange/80 text-white px-4 py-2 rounded transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RenewContent;
