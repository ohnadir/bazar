import { Form, Input } from 'antd';
import React, { useEffect } from 'react';

interface IFormInputProps{
    name: string;
    label: string;
<<<<<<< HEAD
    style?: string;
    className?: string 
}

const FormInput:React.FC<IFormInputProps> = ({name, label, style, className}) => {
=======
}

const FormInput:React.FC<IFormInputProps> = ({name, label}) => {
>>>>>>> f5142b8 (feat: :sparkles: implete redux rtk and stripe)

    const form = Form.useFormInstance();

    useEffect(() => {
<<<<<<< HEAD
        form.setFieldsValue({ name: '' });
=======
        form.setFieldsValue({ name: 'Initial Value' });
>>>>>>> f5142b8 (feat: :sparkles: implete redux rtk and stripe)
    }, [form]);

    return (
        <Form.Item 
            name={name} 
            label={<p>{label}</p>}
            rules={[
                {
                    required: true,
                    message: `Please Enter ${label}`
                }
            ]}
<<<<<<< HEAD
            className={`${style}`}
=======
>>>>>>> f5142b8 (feat: :sparkles: implete redux rtk and stripe)
        >
            <Input
                placeholder={`Enter Your ${label}`}
                style={{
                    width: "100%",
                    height: 48,
                    boxShadow: "none",
                    outline: "none",
<<<<<<< HEAD
                    borderRadius: 6,
                    fontFamily: 'Poppins, sans-serif'
                }}
                className={` ${className} ${className ? "border-none" : "border-[1px] border-[#E0E0E0]"}
                    placeholder:text-[#A2A3B1] 
                    placeholder:text-[14.4px] 
                    placeholder:leading-6 font-normal
                `}
=======
                    border: "1px solid #E0E0E0",
                    borderRadius: 24,
                    background: "#FEFEFE",
                    fontFamily: 'Poppins, sans-serif'
                }}
                className=' placeholder:text-[#A2A3B1] placeholder:text-[14.4px] placeholder:leading-6 font-normal'
>>>>>>> f5142b8 (feat: :sparkles: implete redux rtk and stripe)
            />
        </Form.Item>
    )
}

export default FormInput