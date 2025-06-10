import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
            <Route path="/auth" element={<Login />} />
            <Route path="/auth/register" element={<Register />} />
            <Route path="/auth/callback" element={<AuthCallback />} />
            <Route path="/auth/verify" element={<VerifyEmail />} />
            <Route path="/auth/forgot-password" element={<ForgotPassword />} />
            <Route path="/auth/reset-password" element={<ResetPassword />} />
            <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
            <Route path="/membership/members-area" element={<ProtectedRoute><MembersArea /></ProtectedRoute>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
