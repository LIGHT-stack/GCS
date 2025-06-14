import React, { Suspense, lazy, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { supabase } from './lib/supabase';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './pages/About';
import Partnership from './pages/Partnership';
import PartnershipApply from './pages/PartnershipApply';
import ApplicationSuccess from './pages/partnership/ApplicationSuccess';
import Community from './pages/Community';
import Resources from './pages/Resources';
import Membership from './pages/Membership';
import NotFound from './pages/NotFound';
import AnimatedBackground from './components/AnimatedBackground';
import AuthCallback from './pages/AuthCallback';
import ProtectedRoute from './components/ProtectedRoute';
import Dashboard from './pages/Dashboard';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import MembersArea from './pages/membership/MembersArea';
import VerifyEmail from '@/pages/auth/VerifyEmail';
import ForgotPassword from '@/pages/auth/ForgotPassword';
import ResetPassword from '@/pages/auth/ResetPassword';
import MembershipRegister from './pages/membership/MembershipRegister';
import MembershipRenew from './pages/membership/MembershipRenew';
import AdminDashboard from './pages/admin/AdminDashboard';
import { useToast } from './hooks/use-toast';
import Maintenance from '@/pages/Maintenance';

// Lazy load components
const Index = lazy(() => import('./pages/Index'));
const EventDetailPage = lazy(() => import('./components/EventDetailPage'));
const InternationalPartners = lazy(() => import('./pages/community/InternationalPartners'));
const LocalPartners = lazy(() => import('./pages/community/LocalPartners'));
const EventsPrograms = lazy(() => import('./pages/community/EventsPrograms'));
const Outreach = lazy(() => import('./pages/community/Outreach'));
const ProgramDetail = lazy(() => import('./pages/community/ProgramDetail'));
const Journals = lazy(() => import('./pages/resources/Journals'));
const Publications = lazy(() => import('./pages/resources/Publications'));
const NewsArticles = lazy(() => import('./pages/resources/NewsArticles'));

// Loading component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
  </div>
);

// Protected Route component
const ProtectedRoute = ({ children, requiredRole = null }: { children: React.ReactNode, requiredRole?: string | null }) => {
  const [loading, setLoading] = useState(true);
  const [authorized, setAuthorized] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        setAuthorized(false);
        return;
      }

      if (requiredRole) {
        const { data: profile } = await supabase
          .from('gcs_profiles')
          .select('role, status')
          .eq('id', user.id)
          .single();

        if (!profile || profile.status !== 'active' || profile.role !== requiredRole) {
          setAuthorized(false);
          toast({
            title: "Access Denied",
            description: "You don't have permission to access this page",
            variant: "destructive"
          });
          return;
        }
      }

      setAuthorized(true);
    } catch (error) {
      setAuthorized(false);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin mb-4">
            <svg className="h-12 w-12 text-gcs-blue" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          </div>
          <h2 className="text-xl font-semibold text-gray-800">Loading...</h2>
        </div>
      </div>
    );
  }

  if (!authorized) {
    return <Navigate to="/auth" replace />;
  }

  return <>{children}</>;
};

function App() {
  return (
    <Router>
      <div className="min-h-screen relative overflow-x-hidden bg-gradient-to-b from-gray-50 to-white">
        <AnimatedBackground />
        <Navbar />
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/partnership" element={<Partnership />} />
            <Route path="/partnership/apply" element={<PartnershipApply />} />
            <Route path="/partnership/apply/success" element={<ApplicationSuccess />} />
            <Route path="/community" element={<Community />} />
            <Route path="/community/international-partners" element={<InternationalPartners />} />
            <Route path="/community/local-partners" element={<LocalPartners />} />
            <Route path="/community/events-programs" element={<EventsPrograms />} />
            <Route path="/community/events-programs/:programId" element={<ProgramDetail />} />
            <Route path="/community/outreach" element={<Outreach />} />
            <Route path="/events/:eventId" element={<EventDetailPage />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/resources/journals" element={<Journals />} />
            <Route path="/resources/publications" element={<Publications />} />
            <Route path="/resources/news-articles" element={<NewsArticles />} />
            <Route path="/membership" element={<Membership />} />
            <Route path="/membership/register" element={<MembershipRegister />} />
            <Route path="/membership/renew" element={<MembershipRenew />} />
            <Route path="/auth" element={<Login />} />
            <Route path="/auth/register" element={<Register />} />
            <Route path="/auth/callback" element={<AuthCallback />} />
            <Route path="/auth/verify" element={<VerifyEmail />} />
            <Route path="/auth/forgot-password" element={<ForgotPassword />} />
            <Route path="/auth/reset-password" element={<ResetPassword />} />
            <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
            <Route path="/membership/members-area" element={<ProtectedRoute><MembersArea /></ProtectedRoute>} />
            <Route 
              path="/admin" 
              element={
                <ProtectedRoute requiredRole="admin">
                  <AdminDashboard />
                </ProtectedRoute>
              } 
            />
            <Route path="/maintenance" element={<Maintenance />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
