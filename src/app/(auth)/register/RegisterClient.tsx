"use client"
import Heading from '@/ui/shared/Heading';
import { Form, Input, Select } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import FormInput from '@/ui/shared/FormInput';
import FormPassword from '@/ui/shared/FormPassword';
import Button from '@/ui/shared/Button';

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
                className='grid grid-cols-12'
            >

                <FormInput style='col-span-12' name='fullName' label='Full Name' />
                <FormInput style='col-span-12' name='email' label='Email' />
                <FormInput style='col-span-12' name='contact' label='Contact No' />
                <FormPassword style="col-span-12" name='password' label='Password' />
                <FormPassword style="col-span-12" name='confirm_password' label='Confirm Password' />

                <Button 
                    label='Sign up' 
                    type='submit'
                    style='col-span-12 mb-6 w-[150px] mx-auto bg-primary text-white rounded-[24px]'
                />

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