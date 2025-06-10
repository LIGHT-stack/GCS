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

const GrantsScholarshipsContent = () => {
  return (
    <div className="space-y-12 py-8">
      {/* Student Scholarships */}
      <section className="space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold text-gray-900">Student Scholarships</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Supporting the next generation of chemical scientists through merit-based scholarships and financial aid.
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
                  <GraduationCap className="h-6 w-6 text-blue-600" />
                  <CardTitle className="text-xl">Undergraduate Scholarship</CardTitle>
                </div>
                <CardDescription className="text-base">
                  Full tuition coverage for outstanding chemistry students
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-1" />
                    <span>Full tuition coverage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-1" />
                    <span>Research opportunities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-1" />
                    <span>Mentorship program</span>
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
                  <BookOpen className="h-6 w-6 text-blue-600" />
                  <CardTitle className="text-xl">Graduate Fellowship</CardTitle>
                </div>
                <CardDescription className="text-base">
                  Comprehensive support for graduate research in chemical sciences
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-1" />
                    <span>Stipend and tuition coverage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-1" />
                    <span>Research funding</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-1" />
                    <span>Conference travel support</span>
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
                  <CardTitle className="text-xl">Research Excellence Award</CardTitle>
                </div>
                <CardDescription className="text-base">
                  Recognition and support for exceptional research achievements
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-1" />
                    <span>Cash prize and research grant</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-1" />
                    <span>Publication support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-1" />
                    <span>International collaboration opportunities</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Research Grants */}
      <section className="space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold text-gray-900">Research Grants</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Competitive funding opportunities for innovative research projects in chemical sciences.
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
                  <CardTitle className="text-xl">Early Career Research Grant</CardTitle>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800">New</Badge>
                </div>
                <CardDescription className="text-base">
                  Support for early-career researchers in chemical sciences
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <FileText className="h-4 w-4" />
                    <span>Grant: Up to $25,000</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Users className="h-4 w-4" />
                    <span>Duration: 12 months</span>
                  </div>
                  <p className="text-gray-600">
                    Designed to support innovative research projects by early-career researchers.
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
                  <CardTitle className="text-xl">Collaborative Research Grant</CardTitle>
                  <Badge variant="secondary" className="bg-green-100 text-green-800">Popular</Badge>
                </div>
                <CardDescription className="text-base">
                  Funding for joint research initiatives between institutions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <FileText className="h-4 w-4" />
                    <span>Grant: Up to $50,000</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Users className="h-4 w-4" />
                    <span>Duration: 24 months</span>
                  </div>
                  <p className="text-gray-600">
                    Encourages collaboration between multiple institutions for larger-scale research projects.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Application Process */}
      <section className="space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold text-gray-900">Application Process</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Simple and transparent process for applying to our grants and scholarships.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-blue-600">1</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Review Requirements</h3>
            <p className="text-gray-600">Check eligibility criteria and required documents</p>
          </motion.div>

          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center"
          >
            <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-blue-600">2</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Prepare Application</h3>
            <p className="text-gray-600">Gather necessary documents and write proposals</p>
          </motion.div>

          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center"
          >
            <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-blue-600">3</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Submit Application</h3>
            <p className="text-gray-600">Complete online application form</p>
          </motion.div>

          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center"
          >
            <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-blue-600">4</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Review Process</h3>
            <p className="text-gray-600">Applications reviewed by expert panel</p>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center space-y-6 py-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl">
        <h2 className="text-3xl font-bold text-gray-900">Ready to Apply?</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Start your application process today and take the next step in your academic or research career.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/partnership/apply?type=grants">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg">
              Apply Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <Button size="lg" variant="outline" className="border-2 px-8 py-6 text-lg">
            View Guidelines
          </Button>
        </div>
      </section>
    </div>
  );
};

export default GrantsScholarshipsContent;
