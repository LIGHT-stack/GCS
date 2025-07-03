import { ReactNode, useState } from 'react';
import { useForm, UseFormProps } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

interface FormWrapperProps<T extends z.ZodType> {
  schema: T;
  onSubmit: (data: z.infer<T>) => Promise<void>;
  children: (props: {
    register: any;
    handleSubmit: any;
    errors: any;
    isSubmitting: boolean;
  }) => ReactNode;
  defaultValues?: UseFormProps<z.infer<T>>['defaultValues'];
}

export const FormWrapper = <T extends z.ZodType>({
  schema,
  onSubmit,
  children,
  defaultValues
}: FormWrapperProps<T>) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<z.infer<T>>({
    resolver: zodResolver(schema),
    defaultValues
  });

  const handleFormSubmit = async (data: z.infer<T>) => {
    try {
      setIsSubmitting(true);
      setSubmitError(null);
      await onSubmit(data);
      reset();
    } catch (error: any) {
      setSubmitError(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-6">
      {children({
        register,
        handleSubmit,
        errors,
        isSubmitting
      })}
      
      {submitError && (
        <div className="rounded-md bg-red-50 p-4">
          <div className="flex">
            <div className="ml-3">
              <h3 className="text-sm font-medium text-red-800">
                {submitError}
              </h3>
            </div>
          </div>
        </div>
      )}
    </form>
  );
}; 