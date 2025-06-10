
import React from 'react';
import { Check } from 'lucide-react';

const membershipTiers = [
  {
    name: "Student Member",
    price: "GHS 50/year",
    benefits: [
      "Access to digital publications",
      "Discounted entry to GCS events",
      "Networking opportunities",
      "Eligibility for student scholarships",
      "Online learning resources"
    ]
  },
  {
    name: "Associate Member",
    price: "GHS 150/year",
    benefits: [
      "All Student benefits",
      "Quarterly GCS newsletter",
      "Vote in society elections",
      "Professional development resources",
      "Participation in regional chapters"
    ]
  },
  {
    name: "Full Member",
    price: "GHS 300/year",
    benefits: [
      "All Associate benefits",
      "Print journals subscription",
      "Committee membership eligibility",
      "Leadership opportunities",
      "Research grant opportunities",
      "Mentor program participation"
    ]
  },
  {
    name: "Fellow",
    price: "GHS 500/year",
    benefits: [
      "All Full Member benefits",
      "Recognition of professional achievement",
      "Priority speaking opportunities",
      "Featured profile on GCS website",
      "Exclusive Fellow events",
      "Influence on GCS policy direction"
    ]
  }
];

const BenefitsContent = () => {
  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
        Membership Tiers & Benefits
      </h2>
      <p className="text-lg text-gray-600 mb-8 text-center max-w-3xl mx-auto">
        Choose the membership level that best fits your professional status and needs. 
        Each tier offers valuable benefits to support your career in chemistry.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {membershipTiers.map((tier, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="bg-gcs-blue p-4 text-white text-center">
              <h3 className="text-xl font-bold">{tier.name}</h3>
              <p className="text-lg font-medium mt-1">{tier.price}</p>
            </div>
            <div className="p-5">
              <ul className="space-y-3">
                {tier.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="h-5 w-5 text-gcs-orange flex-shrink-0 mr-2 mt-0.5" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-12 p-6 bg-gcs-blue/10 rounded-lg border border-gcs-blue/30">
        <h3 className="text-xl font-bold text-gray-800 mb-3">Additional Membership Benefits</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="flex items-start">
            <Check className="h-5 w-5 text-gcs-orange flex-shrink-0 mr-2 mt-0.5" />
            <span className="text-gray-700">Access to exclusive research databases</span>
          </div>
          <div className="flex items-start">
            <Check className="h-5 w-5 text-gcs-orange flex-shrink-0 mr-2 mt-0.5" />
            <span className="text-gray-700">Participation in specialized interest groups</span>
          </div>
          <div className="flex items-start">
            <Check className="h-5 w-5 text-gcs-orange flex-shrink-0 mr-2 mt-0.5" />
            <span className="text-gray-700">Mentorship programs with industry experts</span>
          </div>
          <div className="flex items-start">
            <Check className="h-5 w-5 text-gcs-orange flex-shrink-0 mr-2 mt-0.5" />
            <span className="text-gray-700">Reduced rates for laboratory equipment</span>
          </div>
          <div className="flex items-start">
            <Check className="h-5 w-5 text-gcs-orange flex-shrink-0 mr-2 mt-0.5" />
            <span className="text-gray-700">International chemistry conference discounts</span>
          </div>
          <div className="flex items-start">
            <Check className="h-5 w-5 text-gcs-orange flex-shrink-0 mr-2 mt-0.5" />
            <span className="text-gray-700">Professional certification opportunities</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitsContent;
