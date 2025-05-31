
import React from 'react';
import { MapPin, Building, GraduationCap, Beaker } from 'lucide-react';
import PartnershipCard, { PartnerItem } from './partnerships/PartnershipCard';
import HeaderSection from './partnerships/HeaderSection';
import JoinNetworkSection from './partnerships/JoinNetworkSection';

const academicPartners: PartnerItem[] = [
  {
    title: "University of Ghana",
    description: "Research collaboration and student development programs"
  },
  {
    title: "Kwame Nkrumah University of Science and Technology",
    description: "Joint research initiatives and laboratory resources"
  },
  {
    title: "Council for Scientific and Industrial Research",
    description: "Collaborative research and technology transfer"
  }
];

const industryPartners: PartnerItem[] = [
  {
    title: "Ghana Pharmaceutical Association",
    description: "Industry standards and professional development"
  },
  {
    title: "Mining Industry Alliance",
    description: "Environmental chemistry and sustainable practices"
  },
  {
    title: "Agricultural Chemical Suppliers",
    description: "Food security and agricultural chemistry innovation"
  }
];

const governmentPartners: PartnerItem[] = [
  {
    title: "Ministry of Environment, Science, Technology & Innovation",
    description: "Policy development and scientific advisement"
  },
  {
    title: "Ghana Standards Authority",
    description: "Chemical safety standards and quality control"
  },
  {
    title: "Environmental Protection Agency",
    description: "Environmental chemistry and pollution control"
  }
];

const researchProjects: PartnerItem[] = [
  {
    title: "Ghana Water Quality Initiative",
    description: "Multi-institutional research on water purification"
  },
  {
    title: "Medicinal Plants Research",
    description: "Traditional medicine and pharmaceutical development"
  },
  {
    title: "Sustainable Chemistry Alliance",
    description: "Green chemistry practices for industrial applications"
  }
];

const LocalPartnershipsContent = () => {
  return (
    <div className="space-y-8">
      <HeaderSection />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <PartnershipCard
          title="Academic Institutions"
          description="Universities and research centers"
          Icon={GraduationCap}
          iconColor="text-gcs-blue"
          iconBgColor="bg-gcs-blue/10"
          items={academicPartners}
        />

        <PartnershipCard
          title="Industry Partners"
          description="Corporate and manufacturing collaborations"
          Icon={Building}
          iconColor="text-gcs-orange"
          iconBgColor="bg-gcs-orange/10"
          items={industryPartners}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <PartnershipCard
          title="Government Bodies"
          description="Public sector partnerships"
          Icon={MapPin}
          iconColor="text-green-600"
          iconBgColor="bg-green-100"
          items={governmentPartners}
        />

        <PartnershipCard
          title="Research Projects"
          description="Ongoing collaborative initiatives"
          Icon={Beaker}
          iconColor="text-purple-600"
          iconBgColor="bg-purple-100"
          items={researchProjects}
        />
      </div>

      <JoinNetworkSection />
    </div>
  );
};

export default LocalPartnershipsContent;
