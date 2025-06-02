
import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Eye, Download, BookOpen } from 'lucide-react';

const JournalsContent = () => {
  return (
    <div className="space-y-8">
      <section className="bg-white rounded-lg shadow-md p-6">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Digital Library</h2>
          <p className="text-gray-600">Access our collection of peer-reviewed research journals from the Ghana Chemical Society.</p>
        </div>

        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[300px]">Journal Title</TableHead>
                <TableHead>Authors</TableHead>
                <TableHead>Publication Date</TableHead>
                <TableHead>Category</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {journalData.map((journal, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{journal.title}</TableCell>
                  <TableCell>{journal.authors}</TableCell>
                  <TableCell>{journal.date}</TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryStyle(journal.category)}`}>
                      {journal.category}
                    </span>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end space-x-2">
                      <button className="p-1 text-gray-500 hover:text-gcs-blue">
                        <Eye size={18} />
                      </button>
                      <button className="p-1 text-gray-500 hover:text-gcs-blue">
                        <BookOpen size={18} />
                      </button>
                      <button className="p-1 text-gray-500 hover:text-gcs-blue">
                        <Download size={18} />
                      </button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="mt-6 flex justify-between items-center">
          <div className="text-sm text-gray-500">Showing 1-5 of 24 entries</div>
          <div className="flex space-x-2">
            <button className="px-3 py-1 rounded border border-gray-300 text-gray-600 hover:bg-gray-50">Previous</button>
            <button className="px-3 py-1 rounded bg-gcs-blue text-white hover:bg-gcs-blue/80">1</button>
            <button className="px-3 py-1 rounded border border-gray-300 text-gray-600 hover:bg-gray-50">2</button>
            <button className="px-3 py-1 rounded border border-gray-300 text-gray-600 hover:bg-gray-50">3</button>
            <button className="px-3 py-1 rounded border border-gray-300 text-gray-600 hover:bg-gray-50">Next</button>
          </div>
        </div>
      </section>

      <section className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Journal Submissions</h3>
        <p className="text-gray-600 mb-4">
          The Ghana Chemical Society welcomes submissions for our peer-reviewed journals. Please review our submission guidelines below.
        </p>
        <div className="p-4 bg-gcs-blue/10 rounded-lg">
          <h4 className="font-medium text-gray-800 mb-2">Submission Requirements</h4>
          <ul className="list-disc pl-5 text-gray-600 space-y-1">
            <li>Original research not previously published</li>
            <li>Adherence to ACS or similar citation style</li>
            <li>Complete documentation of experimental procedures</li>
            <li>High-resolution figures and clear data presentation</li>
            <li>Author information including affiliations</li>
          </ul>
        </div>
        <div className="mt-4 flex justify-end">
          <button className="btn-primary">Submit a Manuscript</button>
        </div>
      </section>
    </div>
  );
};

// Journal data
const journalData = [
  {
    title: "Advances in Sustainable Chemical Processes in Ghana",
    authors: "Kwame Ansah, Elizabeth Owusu",
    date: "May 2024",
    category: "Organic Chemistry"
  },
  {
    title: "Water Quality Analysis: Methods and Results from the Volta Basin",
    authors: "Abena Mensah, David Agyei",
    date: "March 2024",
    category: "Environmental Chemistry"
  },
  {
    title: "Innovative Green Chemistry Approaches to Plastic Waste Management",
    authors: "John Osei, Fatima Ibrahim",
    date: "January 2024",
    category: "Green Chemistry"
  },
  {
    title: "Heavy Metal Contamination in Urban Soils: A Case Study of Accra",
    authors: "Grace Adu, Michael Tetteh",
    date: "November 2023",
    category: "Analytical Chemistry"
  },
  {
    title: "Extraction and Characterization of Bioactive Compounds from Indigenous Plants",
    authors: "Victoria Asare, Daniel Mensah",
    date: "August 2023",
    category: "Medicinal Chemistry"
  }
];

// Helper function for category styling
const getCategoryStyle = (category: string) => {
  switch (category) {
    case 'Organic Chemistry':
      return 'bg-blue-100 text-blue-800';
    case 'Environmental Chemistry':
      return 'bg-green-100 text-green-800';
    case 'Green Chemistry':
      return 'bg-emerald-100 text-emerald-800';
    case 'Analytical Chemistry':
      return 'bg-purple-100 text-purple-800';
    case 'Medicinal Chemistry':
      return 'bg-red-100 text-red-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

export default JournalsContent;
