"use client"
import Heading from '@/components/shared/Heading';
import { Button, Form, Input, Select } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import toast from 'react-hot-toast';
import { ChevronDown, Eye, EyeOff } from 'lucide-react';

const RegisterClient = () => {
    const [form] = Form.useForm();
    form.setFieldsValue(undefined);
    const router = useRouter();


    const handleSubmit = async (values: any) => {
        router.push('/');
    };

    return (
        <div className='py-6'>
            <Heading name='Sign up' style='font-semibold text-[24px] leading-[32px] text-[#333333] text-center mb-4' />
            <p className='font-normal text-[16px] leading-[20px] text-[#5C5C5C] text-center mb-6' >Please Enter Your Personal Data</p>

            <Form 
                onFinish={handleSubmit} 
                form={form} layout='vertical'
                className='grid grid-cols-12 gap-6'
            >
                <Form.Item
                    name="name"
                    label={<p className='font-medium text-[16px] leading-6 text-[#636363]'>User Name</p>}
                    rules={[
                        {
                            required: true,
                            message: "Please Enter Your Name!"
                        }
                    ]}
                    style={{marginBottom: 0}}
                    className='col-span-12'
                >
                    <Input
                        placeholder='Enter Your Name'
                        style={{
                            width: "100%",
                            height: 48,
                            boxShadow: "none",
                            outline: "none",
                            border: "1px solid #E0E0E0",
                            borderRadius: 24,
                            background: "#FEFEFE"
                        }}
                        className='poppins placeholder:text-[#818181] placeholder:text-[14px] placeholder:font-normal placeholder:leading-6'
                    />
                </Form.Item>

                <Form.Item
                    name="email"
                    label={<p className='font-medium text-[16px] leading-6 text-[#636363]'>Email</p>}
                    rules={[
                        {
                            required: true,
                            message: "Please Enter Email!"
                        }
                    ]}
                    style={{marginBottom: 0}}
                    className='col-span-12'
                >
                    <Input
                        placeholder='Enter Email'
                        style={{
                            width: "100%",
                            height: 48,
                            boxShadow: "none",
                            outline: "none",
                            border: "1px solid #E0E0E0",
                            borderRadius: 24,
                            background: "#FEFEFE"
                        }}
                        className='poppins placeholder:text-[#818181] placeholder:text-[14px] placeholder:font-normal placeholder:leading-6'
                    />
                </Form.Item>

                <Form.Item
                    name="contact"
                    label={<p className='font-medium text-[16px] leading-6 text-[#636363]'>Contact No</p>}
                    rules={[
                        {
                            required: true,
                            message: "Please Enter Contact No!"
                        }
                    ]}
                    style={{marginBottom: 0}}
                    className='col-span-12'
                >
                    <Input
                        placeholder='Enter Contact No'
                        style={{
                            width: "100%",
                            height: 48,
                            boxShadow: "none",
                            outline: "none",
                            border: "1px solid #E0E0E0",
                            borderRadius: 24,
                            background: "#FEFEFE"
                        }}
                        className='poppins placeholder:text-[#818181] placeholder:text-[14px] placeholder:font-normal placeholder:leading-6'
                    />
                </Form.Item>

                <Form.Item
                    name="password"
                    label={<p className='font-medium text-[16px] leading-6 text-[#636363]'>Password</p>}
                    rules={[
                        {
                            required: true,
                            message: "Please Enter Password"
                        }
                    ]}
                    style={{marginBottom: 0}}
                    className='col-span-12'
                >
                    <Input.Password
                        placeholder='Enter Password'
                        className='placeholder:text-[#818181] placeholder:text-[16px] placeholder:font-normal placeholder:leading-6'
                        style={{
                            width: "100%",
                            height: 48,
                            boxShadow: "none",
                            outline: "none",
                            border: "1px solid #E0E0E0",
                            borderRadius: 24,
                            background: "#FEFEFE",
                            padding: "4px 4px 4px 11px"
                        }}
                        iconRender={(visible) => (
                            <div
                                style={{
                                    background: "#E6F2F5",
                                    width: 40,
                                    height: 40,
                                    borderRadius: "100%",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                {
                                    visible ? (
                                    <Eye className="cursor-pointer" color="#10b981" size={24} />
                                    ) : (
                                    <EyeOff className="cursor-pointer" color="#10b981" size={24} />
                                    )
                                }
                            </div>
                        )}
                    />
                </Form.Item>

                <Form.Item
                    name="password"
                    label={<p className='font-medium text-[16px] leading-6 text-[#636363]'>Confirm Password</p>}
                    rules={[
                        {
                            required: true,
                            message: "Please Enter Confirm Password"
                        }
                    ]}
                    style={{marginBottom: 0}}
                    className='col-span-12'
                >
                    <Input.Password
                        placeholder='Enter Confirm Password'
                        className='placeholder:text-[#818181] placeholder:text-[16px] placeholder:font-normal placeholder:leading-6'
                        style={{
                            width: "100%",
                            height: 48,
                            boxShadow: "none",
                            outline: "none",
                            border: "1px solid #E0E0E0",
                            borderRadius: 24,
                            background: "#FEFEFE",
                            padding: "4px 4px 4px 11px"
                        }}
                        iconRender={(visible) => (
                            <div
                                style={{
                                    background: "#E6F2F5",
                                    width: 40,
                                    height: 40,
                                    borderRadius: "100%",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                {
                                    visible ? (
                                    <Eye className="cursor-pointer" color="#10b981" size={24} />
                                    ) : (
                                    <EyeOff className="cursor-pointer" color="#10b981" size={24} />
                                    )
                                }
                            </div>
                        )}
                    />
                </Form.Item>

                <Form.Item
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "100%",
                        marginBottom: 0
                    }}
                    className='col-span-12'
                >
                    <Button 
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
                        {"Sign up"}
                    </Button>
                </Form.Item>

                <p className="text-[#636363] col-span-12 text-[16px] leading-[21px] font-normal text-center">
                    Have any account? 
                    <Link className='ml-2' href={"/login"}>
                        <span className='text-primary cursor-pointer font-semibold'>Login</span>
                    </Link> 
                </p>
            </Form>
        </div>
    )
}

export default RegisterClient