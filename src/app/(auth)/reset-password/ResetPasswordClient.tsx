"use client"
import Button from '@/ui/shared/Button';
import FormPassword from '@/ui/shared/FormPassword';
import Heading from '@/ui/shared/Heading';
import { Form } from 'antd';
import { useRouter } from 'next/navigation';
import React from 'react'
import toast from 'react-hot-toast';

const ResetPasswordClient = () => {
    const [form] = Form.useForm();
    const router = useRouter();
    form.setFieldsValue(undefined);


    const handleSubmit=async(values:any)=>{
        router.push("/login");
        toast.success("Password Reset Successfully")
    }


    return (
        <div className='my-10'>
            <Heading name='Set a new password' style='font-semibold text-[24px] leading-[32px] text-[#333333] text-center mb-6' />
            <p className='font-normal w-[361px] mx-auto text-center leading-[26px] text-[16px] mb-6' >
                Create a new password. Ensure it differs from previous ones for security
            </p>

            <Form onFinish={handleSubmit} form={form} layout='vertical'>
                <FormPassword name='password' label='Password'/>
                <FormPassword name='confirm_password' label='Confirm Password'/>

                <Form.Item className='flex items-center justify-center w-full'>
                    <Button 
                        label='Reset Password' 
                        type='submit'
                        style='w-[200px] mx-auto bg-primary text-white rounded-[24px]'
                    />
                </Form.Item>
            </Form>
        </div>
    )
}

export default ResetPasswordClient;