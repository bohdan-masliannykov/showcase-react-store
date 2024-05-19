
import { Input } from '@/shared/components/atoms/Input/Input';
import { Textarea } from '@/shared/components/atoms/Textarea/Textarea';
import React from 'react';
import { LoadingButton } from '@/shared/components/atoms/LoadingButton/LoadingButton';
import { useContactPageHook } from './useContactPage.hook';

export const ContactPage: React.FC = () => {
    const {
        handleSubmit,
        onSubmit,
        onFormError,
        register,
        errors,
        mockLoading
    } = useContactPageHook();

    return (
        <div className="container py-12">
            <form onSubmit={handleSubmit(onSubmit, onFormError)} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-[460px] mx-auto">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" >
                        E-mail:
                    </label>
                    <Input {...register('email', { required: true })} errors={errors.email} disabled={mockLoading} data-testid="email" id="email" type="text" placeholder="Please provide e-mail" />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" >
                        Subject:
                    </label>
                    <Input {...register('subject', { required: true })} errors={errors.subject} disabled={mockLoading} data-testid="subject" id="subject" type="text" placeholder="Please provide subject" />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" >
                        Description:
                    </label>
                    <Textarea {...register('description', { required: true })} errors={errors.description} disabled={mockLoading} data-testid="descripton" id="descripton" placeholder="Please provide description" />
                </div>

                <LoadingButton loading={mockLoading} type="submit">
                    Send message
                </LoadingButton>
            </form>
        </div>
    );
};