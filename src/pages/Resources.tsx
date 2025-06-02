
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ResourcesHeader from '../components/resources/ResourcesHeader';
import AnimatedBackground from '../components/AnimatedBackground';
import { Button } from '@/components/ui/button';
import { ArrowRight, BookOpen, Newspaper, FileText } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const Resources = () => {
  // Update page title
  useEffect(() => {
    document.title = 'Resources | Ghana Chemical Society - GCS';
  }, []);

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <AnimatedBackground />
      <Navbar />
      <div className="pt-24 pb-8 md:pt-28 md:pb-12 px-4">
        <ResourcesHeader />
        
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <Card className="bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all">
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 rounded-full bg-gcs-blue/10 flex items-center justify-center mb-4">
                  <BookOpen className="h-8 w-8 text-gcs-blue" />
                </div>
                <CardTitle className="text-2xl text-gcs-blue">Journals</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-gray-700">
                  Access scientific journals from GCS and affiliated international societies and institutions, 
                  featuring cutting-edge research in chemistry and related fields.
                </p>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Button asChild className="bg-gcs-blue hover:bg-gcs-blue/80">
                  <Link to="/resources/journals">
                    Browse Journals <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
            
            <Card className="bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all">
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 rounded-full bg-gcs-orange/10 flex items-center justify-center mb-4">
                  <Newspaper className="h-8 w-8 text-gcs-orange" />
                </div>
                <CardTitle className="text-2xl text-gcs-orange">News & Articles</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-gray-700">
                  Stay updated with the latest news, articles, and developments from the Ghana Chemical Society,
                  its members, and affiliated partners worldwide.
                </p>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Button asChild className="bg-gcs-orange hover:bg-gcs-orange/80">
                  <Link to="/resources/news-articles">
                    Read News & Articles <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
            
            <Card className="bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all">
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 rounded-full bg-gcs-blue/10 flex items-center justify-center mb-4">
                  <FileText className="h-8 w-8 text-gcs-blue" />
                </div>
                <CardTitle className="text-2xl text-gcs-blue">Publications</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-gray-700">
                  Explore publications by the Ghana Chemical Society, its members, and affiliated organizations,
                  including research papers, conference proceedings, and reports.
                </p>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Button asChild className="bg-gcs-blue hover:bg-gcs-blue/80">
                  <Link to="/resources/publications">
                    View Publications <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Resources;
