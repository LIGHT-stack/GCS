
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { User2 } from 'lucide-react';

/**
 * LeadershipSection Component
 * 
 * Displays information about the executive members of the Ghana Chemical Society,
 * including their names, positions, institutions, and biographies.
 */
const LeadershipSection = () => {
  // Data for the executive committee members
  const executiveMembers = [
    {
      name: "Prof. Akwasi Acheampong",
      position: "National President",
      institution: "Department of Chemistry, Kwame Nkrumah University of Science and Technology",
      bio: "Professor in the Department of Chemistry at KNUST with extensive experience in research and academic leadership.",
      image: "/src/assets/Prof Kwesi Acheampong.jpg"
    },
    {
      name: "Dr. Michael Baah Mensah",
      position: "National Secretary",
      institution: "Department of Chemistry, Kwame Nkrumah University of Science and Technology",
      bio: "Dedicated professional with expertise in organizational management and scientific communication. Lecturer at the Department of Chemistry, KNUST.",
      image: "/src/assets/Dr Michael Baah Mensah.jpg"
    },
    {
      name: "Miss Janet Atebiya",
      position: "National Treasurer",
      institution: "Regional Water Quality Assurance Manager, GWCL, Sunyani",
      bio: "Specialist in water quality analysis and financial management with extensive experience in the public sector.",
      image: "/src/assets/Janet Atebiya.jpg"
    },
    {
      name: "Isaac Aidoo",
      position: "National Service Personnel",
      institution: "Department of Chemistry, KNUST",
      bio: "Supporting the activities and operations of the Ghana Chemical Society.",
      image: "/src/assets/Isaac Aidoo.jpg"
    }
  ];

  return (
    <section id="leadership" className="py-16">
      <h2 className="section-title mb-8">Our Leadership</h2>
      <p className="text-gray-600 max-w-4xl mb-10">
        The Ghana Chemical Society is led by dedicated professionals who volunteer their time and expertise to advance 
        our mission. Our executive committee comprises distinguished chemists from academia, research institutions, 
        and industry who bring diverse perspectives and experiences to guide our organization.
      </p>
      
      {/* Executive Committee Section */}
      <h3 className="text-2xl font-semibold mb-6">Executive Committee</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {executiveMembers.map((member, index) => (
          <Card key={index} className="hover:shadow-md transition-shadow duration-300">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                {member.image ? (
                  <div className="h-16 w-16 rounded-full overflow-hidden mr-4">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="h-full w-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="h-12 w-12 rounded-full bg-gcs-blue/10 flex items-center justify-center mr-4">
                    <User2 className="h-6 w-6 text-gcs-blue" />
                  </div>
                )}
                <div>
                  <h3 className="font-bold text-lg text-gray-800">{member.name}</h3>
                  <p className="text-gcs-blue font-medium">{member.position}</p>
                </div>
              </div>
              <p className="text-sm text-gray-500 mb-2">{member.institution}</p>
              <p className="text-gray-600">{member.bio}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default LeadershipSection;
