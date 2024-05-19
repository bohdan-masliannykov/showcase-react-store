import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useToast } from '@/shared/components/ui/use-toast';
import { useState } from 'react';

type ContactFormInputs = {
  email: string;
  subject: string;
  description: string;
};

const schema = yup
  .object({
    email: yup
      .string()
      .required('E-mail is required')
      .email('E-mail is not valid'),
    subject: yup
      .string()
      .required('Subject is required')
      .min(10, 'Subject must be at least 10 characters')
      .max(250, 'Subject must be at most 250 characters'),
    description: yup
      .string()
      .required('Description is required')
      .min(10, 'Description must be at least 10 characters')
      .max(500, 'Description must be at most 500 characters'),
  })
  .required();

export const useContactPageHook = () => {
  const [mockLoading, setMockLoading] = useState(false);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormInputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<ContactFormInputs> = (data: any) => {
    setMockLoading(true);
    new Promise((resolve: any) => {
      setTimeout(() => {
        resolve();
        toast({
          title: 'Your message has been sent!',
          description: 'We will get back to you as soon as possible!',
        });
        reset();
        setMockLoading(false);
      }, 2000);
    });
  };

  const onFormError = (error: any) => {
    toast({
      variant: 'destructive',
      title: 'Please check the form!',
      description: Object.values(errors)[0]?.message,
    });
  };

  return {
    handleSubmit,
    onSubmit,
    onFormError,
    register,
    errors,
    mockLoading,
  };
};
