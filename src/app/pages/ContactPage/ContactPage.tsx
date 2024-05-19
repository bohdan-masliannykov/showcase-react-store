
import { Input } from '@/shared/components/atoms/Input/Input';
import { Textarea } from '@/shared/components/atoms/Textarea/Textarea';
import React from 'react';
import { SubmitHandler, useForm } from "react-hook-form"
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup"

type ContactFormInputs = {
    email: string;
    subject: string;
    description: string;
}
const schema = yup
    .object({
        email: yup.string().required('E-mail is required').email('E-mail is not valid'),
        subject: yup.string().required('Subject is required').min(10, 'Subject must be at least 10 characters').max(250, 'Subject must be at most 250 characters'),
        description: yup.string().required('Description is required').min(10, 'Description must be at least 10 characters').max(500, 'Description must be at most 500 characters'),
    })
    .required()

export const ContactPage: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ContactFormInputs>({
        resolver: yupResolver(schema),
    });

    const onSubmit: SubmitHandler<ContactFormInputs> = (data: any) => {
        console.log(data);
    }

    return (
        <div className="container py-12">
            <form onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-[460px] mx-auto">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" >
                        E-mail:
                    </label>
                    <Input {...register('email', { required: true })} errors={errors.email} data-testid="email" id="email" type="text" placeholder="Please provide e-mail" />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" >
                        Subject:
                    </label>
                    <Input {...register('subject', { required: true })} errors={errors.description} data-testid="subject" id="subject" type="text" placeholder="Please provide subject" />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" >
                        Description:
                    </label>
                    <Textarea {...register('description', { required: true })} errors={errors.description} data-testid="descripton" id="descripton" placeholder="Please provide description" />
                </div>
                <button
                    type='submit'
                    className="rounded-full px-4 py-2 text-center bg-indigo-600 font-semibold text-lg text-white flex transition-all duration-500 hover:bg-indigo-700">
                    Send Message
                </button>
            </form>
        </div>
    );
};