"use client";
import React from 'react';
import Button from '@/ui/shared/Button';
import FormInput from '@/ui/shared/FormInput';
import FormPassword from '@/ui/shared/FormPassword';
import Heading from '@/ui/shared/Heading';
import { Checkbox, Form } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { setToken } from '@/lib/Token';

const LoginClient = () => {
    const [form] = Form.useForm();
    const router = useRouter();
    form.setFieldsValue(undefined);


    const handleSubmit = async (values: any) => {
        // setToken("token", values.email)
        router.push('/');
        toast.success("Logged In Successfully")
    };
    return (
        <div className='py-10'>
            <Heading name='Login to Account' style='text-center text-[32px] leading-8 font-semibold mb-4' />
            <p className='font-normal text-[16px] leading-[18px] text-[#5C5C5C] text-center mb-6' >Please enter your email and password to continue</p>
            <Form onFinish={handleSubmit} form={form} layout='vertical'>

                <FormInput  name='email' label='Email'/>
                <FormPassword  name='password' label='Password'/>

                <div className="flex justify-between items-center text-[#6A6D7C] mb-[22px]">
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox className="text-[#818181] text-[16px] leading-[24px] font-normal">Remember me</Checkbox>
                    </Form.Item>

                    <Link href={"forgotPassword"}>
                        <p className="text-[#FF9773] cursor-pointer text-[15px] leading-[27px] font-normal">
                            Forgot password
                        </p>
                    </Link>   
                </div>

                <Form.Item className='flex items-center justify-center w-full'>
                    <Button 
<<<<<<< HEAD
<<<<<<< HEAD
                        htmlType='submit'
                        style={{
                            width: 150,
                            height: 48,
                            border: "none",
                            outline: "none",
                            borderRadius: 24,
                            background: "#10b981",
                            color: "#ffffff"
                        }}
                    >
                       Login
                    </Button>
=======
                        label='Login' 
                        type='submit'
                        loading={false} 
                        style='w-[150px] bg-primary text-white rounded-[24px]'
                    />
>>>>>>> 9b3ea56 (design: :art: complete checkout page design)
=======
                        label='Login' 
                        type='submit' 
                        style='w-[150px] bg-primary text-white rounded-[24px]'
                    />
>>>>>>> f5142b8 (feat: :sparkles: implete redux rtk and stripe)
                </Form.Item>

                <p className="text-[#636363] text-[16px] leading-[21px] font-normal text-center">
                    Don&apos;t have any account? 
                    <Link className='ml-2' href={"/register"}>
                        <span className='text-primary cursor-pointer font-semibold'>Sign up</span>
                    </Link> 
                </p>

            </Form>
        </div>
    )
}

export default LoginClient