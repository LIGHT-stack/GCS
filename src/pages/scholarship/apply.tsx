import { ScholarshipForm } from '@/components/forms/ScholarshipForm.tsx';
import { useAuth } from '@/lib/auth.ts';
import { useStore } from '@/lib/store.ts';
// import { useRouter } from 'next/navigation'; // Removed: not available in Vite/CRA
const useRouter = () => ({ push: (url: string) => { window.location.href = url; } });
import { useEffect } from 'react';

export default function ScholarshipApplicationPage() {
  const auth = useAuth();
  const user = useStore((state) => state.user);
  const loading = auth.loading;
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