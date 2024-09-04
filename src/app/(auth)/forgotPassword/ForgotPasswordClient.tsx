"use client"
import Heading from '@/ui/shared/Heading';
import { Form, Input } from 'antd';
import React from 'react';
import { useRouter } from "next/navigation";
import toast from 'react-hot-toast';
import FormInput from '@/ui/shared/FormInput';
import Button from '@/ui/shared/Button';

const ForgotPasswordClient = () => {
    const [form] = Form.useForm();
    form.setFieldsValue(undefined)
    const router = useRouter();

    const handleSubmit=async(values:any)=>{
        router.push("/otp-verify")
    }
    
    
    return (
        <React.Fragment>
            <Heading name='Forgot password' style='font-semibold text-[24px] leading-[32px] text-[#333333] text-center mb-6' />

            <Form onFinish={handleSubmit} form={form} layout='vertical'>
                <FormInput name='email' label='Email' />

                <div className='flex items-center justify-center'>
                    <Button 
                        label='Send OTP' 
                        type='submit'
                        style='w-[150px] bg-primary text-white rounded-[24px]'
                    />
                </div>
            </Form>
        </React.Fragment>
    )
}

export default ForgotPasswordClient