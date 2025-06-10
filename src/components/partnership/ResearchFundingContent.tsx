import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Award, BookOpen, Building2, CheckCircle2, FileText, GraduationCap, Lightbulb, Microscope, Users } from "lucide-react";
import { Link } from 'react-router-dom';

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const ResearchFundingContent = () => {
  return (
    <div className="space-y-12 py-8">
      {/* Research Funding Opportunities */}
      <section className="space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold text-gray-900">Research Funding Opportunities</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Support groundbreaking research in chemistry and related fields through our various funding programs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5 }}
          >
            <Card className="h-full hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Microscope className="h-6 w-6 text-blue-600" />
                  <CardTitle className="text-xl">Research Grants</CardTitle>
                </div>
                <CardDescription className="text-base">
                  Competitive grants for innovative research projects in chemical sciences
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-1" />
                    <span>Up to $50,000 per project</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-1" />
                    <span>12-24 month duration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-1" />
                    <span>Equipment and consumables support</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="h-full hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Users className="h-6 w-6 text-blue-600" />
                  <CardTitle className="text-xl">Collaborative Research</CardTitle>
                </div>
                <CardDescription className="text-base">
                  Support for joint research initiatives between academia and industry
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-1" />
                    <span>Industry-academia partnerships</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-1" />
                    <span>Shared resources and expertise</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-1" />
                    <span>Commercialization support</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="h-full hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Award className="h-6 w-6 text-blue-600" />
                  <CardTitle className="text-xl">Innovation Awards</CardTitle>
                </div>
                <CardDescription className="text-base">
                  Recognition and funding for breakthrough innovations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-1" />
                    <span>Annual innovation competition</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-1" />
                    <span>Cash prizes and research funding</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-1" />
                    <span>Mentorship opportunities</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Current Funded Projects */}
      <section className="space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold text-gray-900">Current Funded Projects</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our ongoing research initiatives and their impact on chemical sciences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5 }}
          >
            <Card className="h-full hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-xl">Green Chemistry Solutions</CardTitle>
                  <Badge variant="secondary" className="bg-green-100 text-green-800">Active</Badge>
                </div>
                <CardDescription className="text-base">
                  Developing sustainable chemical processes for industrial applications
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Building2 className="h-4 w-4" />
                    <span>University of Ghana</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <FileText className="h-4 w-4" />
                    <span>Grant: $45,000</span>
                  </div>
                  <p className="text-gray-600">
                    Research focuses on developing eco-friendly alternatives to traditional chemical processes.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="h-full hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-xl">Pharmaceutical Research</CardTitle>
                  <Badge variant="secondary" className="bg-green-100 text-green-800">Active</Badge>
                </div>
                <CardDescription className="text-base">
                  Investigating novel drug delivery systems
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Building2 className="h-4 w-4" />
                    <span>KNUST</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <FileText className="h-4 w-4" />
                    <span>Grant: $35,000</span>
                  </div>
                  <p className="text-gray-600">
                    Developing innovative approaches to drug delivery for improved patient outcomes.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center space-y-6 py-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl">
        <h2 className="text-3xl font-bold text-gray-900">Ready to Make an Impact?</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Submit your research proposal and join our community of innovators in chemical sciences.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/partnership/apply?type=research">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg">
              Submit Proposal
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <Button size="lg" variant="outline" className="border-2 px-8 py-6 text-lg">
            Learn More
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ResearchFundingContent;
