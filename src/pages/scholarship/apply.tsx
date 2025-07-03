import { ScholarshipForm } from '@/components/forms/ScholarshipForm';
import { useAuth } from '@/lib/auth';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function ScholarshipApplicationPage() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login?redirect=/scholarship/apply');
    }
  }, [user, loading, router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="max-w-3xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Scholarship Application</h1>
        <p className="mt-2 text-sm text-gray-600">
          Please fill out the form below to apply for a scholarship.
        </p>
      </div>

      <div className="bg-white shadow rounded-lg p-6">
        <ScholarshipForm />
      </div>
    </div>
  );
} 