
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { CalendarDays } from 'lucide-react';

const HistorySection = () => {
  return (
    <section id="history" className="py-16">
      <h2 className="section-title mb-8">Our History</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <p className="text-gray-600 mb-6">
            The Ghana Chemical Society (GCS) was founded in the year 1981, however, the society became 
            incorporated in 1995 under statutory provisions given by the Ghana Registrar General's 
            Department. Since its inception, GCS has focused on the most important gatherings of chemistry 
            practitioners from the academia and industry for the purposes of disseminating scientific 
            knowledge and holding fruitful discussions on issues in relation to national development.
          </p>
          <p className="text-gray-600 mb-6">
            Ghana Chemical Society embarks on the dissemination of scientific knowledge with the 
            view to solving local challenges and contributing to global knowledge. This objective 
            is achieved through school outreaches, conferences, and workshops.
          </p>
        </div>
        <div className="space-y-4">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <CalendarDays className="h-6 w-6 text-gcs-blue flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">1981</h3>
                  <p className="text-gray-600">Founding of the Ghana Chemical Society</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <CalendarDays className="h-6 w-6 text-gcs-blue flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">1995</h3>
                  <p className="text-gray-600">Incorporation under Ghana Registrar General's Department</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <CalendarDays className="h-6 w-6 text-gcs-blue flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">2000s</h3>
                  <p className="text-gray-600">Expansion of outreach programs and educational initiatives</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <CalendarDays className="h-6 w-6 text-gcs-blue flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">Present</h3>
                  <p className="text-gray-600">Focus on research, innovation, and collaboration with industry and government</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <div className="mt-10">
        <h3 className="text-xl font-semibold mb-4">Objectives</h3>
        <ul className="list-disc pl-5 space-y-2 text-gray-600">
          <li>To promote investigation and research in the field of chemistry and allied sciences</li>
          <li>To disseminate chemical knowledge through, meetings, lectures, symposia, publication, and other appropriate means</li>
          <li>To popularize chemistry</li>
          <li>To foster the development of chemical education</li>
          <li>To promote the application of chemistry in national development</li>
          <li>To promote and protect the professional and economic welfare of its members</li>
        </ul>
        
        <p className="mt-6 text-gray-600">
          To foster the improvement of the qualifications and usefulness of chemists. The society shall be concerned with both the profession of chemistry and its practitioners.
        </p>
        
        <p className="mt-4 text-gray-600">
          To foster the objectives specified, the society shall co-operate with all scientists in the world over and shall be concerned with the universal application of chemistry for the advancement of humanity.
        </p>
      </div>
    </section>
  );
};

export default HistorySection;
