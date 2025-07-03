import React, { Suspense, lazy, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { supabase } from './lib/supabase';
import Navbar from './components/Navbar.tsx';
import Footer from './components/Footer.tsx';
import About from './pages/About.tsx';
import Partnership from './pages/Partnership.tsx';
import PartnershipApply from './pages/PartnershipApply.tsx';
import ApplicationSuccess from './pages/partnership/ApplicationSuccess.tsx';
import Community from './pages/Community.tsx';
import Resources from './pages/Resources.tsx';
import Membership from './pages/Membership.tsx';
import NotFound from './pages/NotFound.tsx';
import AnimatedBackground from './components/AnimatedBackground.tsx';
import AuthCallback from './pages/AuthCallback.tsx';
import ProtectedRoute from './components/ProtectedRoute.tsx';
import Dashboard from './pages/Dashboard.tsx';
import Login from './pages/auth/Login.tsx';
import Register from './pages/auth/Register.tsx';
import MembersArea from './pages/membership/MembersArea.tsx';
import VerifyEmail from './pages/auth/VerifyEmail.tsx';
import ForgotPassword from './pages/auth/ForgotPassword.tsx';
import ResetPassword from './pages/auth/ResetPassword.tsx';
import MembershipRegister from './pages/membership/MembershipRegister.tsx';
import MembershipRenew from './pages/membership/MembershipRenew.tsx';
import AdminDashboard from './pages/admin/AdminDashboard.tsx';
import { useToast } from './hooks/use-toast.tsx';
import Maintenance from './pages/Maintenance.tsx';

// Lazy load components
const Index = lazy(() => import('./pages/Index.tsx'));
const EventDetailPage = lazy(() => import('./components/EventDetailPage.tsx'));
const InternationalPartners = lazy(() => import('./pages/community/InternationalPartners.tsx'));
const LocalPartners = lazy(() => import('./pages/community/LocalPartners.tsx'));
const EventsPrograms = lazy(() => import('./pages/community/EventsPrograms.tsx'));
const Outreach = lazy(() => import('./pages/community/Outreach.tsx'));
const ProgramDetail = lazy(() => import('./pages/community/ProgramDetail.tsx'));
const Journals = lazy(() => import('./pages/resources/Journals.tsx'));
const Publications = lazy(() => import('./pages/resources/Publications.tsx'));
const NewsArticles = lazy(() => import('./pages/resources/NewsArticles.tsx'));

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
