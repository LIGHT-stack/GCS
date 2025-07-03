import { z } from 'zod';
import { FormWrapper } from './FormWrapper';
import { useAuth } from '@/lib/auth';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

const scholarshipSchema = z.object({
  scholarship_type: z.enum(['undergraduate', 'postgraduate', 'research', 'conference']),
  academic_level: z.string().min(1, 'Academic level is required'),
  institution: z.string().min(1, 'Institution is required'),
  program: z.string().min(1, 'Program is required'),
  gpa: z.number().min(0).max(4).optional(),
  expected_graduation_date: z.string().min(1, 'Expected graduation date is required'),
  financial_need: z.string().min(1, 'Financial need description is required'),
  motivation_letter: z.string().min(100, 'Motivation letter must be at least 100 characters'),
});

export const ScholarshipForm = () => {
  const { user } = useAuth();
  const supabase = createClientComponentClient();

  const handleSubmit = async (data: z.infer<typeof scholarshipSchema>) => {
    if (!user) throw new Error('You must be logged in to submit a scholarship application');

    const { error } = await supabase
      .from('scholarship_applications')
      .insert({
        applicant_id: user.id,
        ...data,
        status: 'pending'
      });

    if (error) throw error;
  };

  return (
    <FormWrapper
      schema={scholarshipSchema}
      onSubmit={handleSubmit}
      defaultValues={{
        scholarship_type: 'undergraduate',
        academic_level: '',
        institution: '',
        program: '',
        gpa: undefined,
        expected_graduation_date: '',
        financial_need: '',
        motivation_letter: ''
      }}
    >
      {({ register, errors, isSubmitting }) => (
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Scholarship Type
            </label>
            <select
              {...register('scholarship_type')}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            >
              <option value="undergraduate">Undergraduate</option>
              <option value="postgraduate">Postgraduate</option>
              <option value="research">Research</option>
              <option value="conference">Conference</option>
            </select>
            {errors.scholarship_type && (
              <p className="mt-1 text-sm text-red-600">{errors.scholarship_type.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Academic Level
            </label>
            <input
              type="text"
              {...register('academic_level')}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
            {errors.academic_level && (
              <p className="mt-1 text-sm text-red-600">{errors.academic_level.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Institution
            </label>
            <input
              type="text"
              {...register('institution')}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
            {errors.institution && (
              <p className="mt-1 text-sm text-red-600">{errors.institution.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Program
            </label>
            <input
              type="text"
              {...register('program')}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
            {errors.program && (
              <p className="mt-1 text-sm text-red-600">{errors.program.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              GPA (optional)
            </label>
            <input
              type="number"
              step="0.01"
              min="0"
              max="4"
              {...register('gpa', { valueAsNumber: true })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
            {errors.gpa && (
              <p className="mt-1 text-sm text-red-600">{errors.gpa.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Expected Graduation Date
            </label>
            <input
              type="date"
              {...register('expected_graduation_date')}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
            {errors.expected_graduation_date && (
              <p className="mt-1 text-sm text-red-600">{errors.expected_graduation_date.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Financial Need
            </label>
            <textarea
              {...register('financial_need')}
              rows={3}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
            {errors.financial_need && (
              <p className="mt-1 text-sm text-red-600">{errors.financial_need.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Motivation Letter
            </label>
            <textarea
              {...register('motivation_letter')}
              rows={5}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
            {errors.motivation_letter && (
              <p className="mt-1 text-sm text-red-600">{errors.motivation_letter.message}</p>
            )}
          </div>

          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Application'}
            </button>
          </div>
        </div>
      )}
    </FormWrapper>
  );
}; 