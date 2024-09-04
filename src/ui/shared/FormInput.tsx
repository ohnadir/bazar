import { Form, Input } from 'antd';
import React, { useEffect } from 'react';

interface IFormInputProps{
    name: string;
    label: string;
    style?: string;
    className?: string 
}

const FormInput:React.FC<IFormInputProps> = ({name, label, style, className}) => {

    const form = Form.useFormInstance();

    useEffect(() => {
        form.setFieldsValue({ name: '' });
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
            className={`${style}`}
        >
            <Input
                placeholder={`Enter Your ${label}`}
                style={{
                    width: "100%",
                    height: 48,
                    boxShadow: "none",
                    outline: "none",
                    borderRadius: 6,
                    fontFamily: 'Poppins, sans-serif'
                }}
                className={` ${className} ${className ? "border-none" : "border-[1px] border-[#E0E0E0]"}
                    placeholder:text-[#A2A3B1] 
                    placeholder:text-[14.4px] 
                    placeholder:leading-6 font-normal
                `}
            />
        </Form.Item>
    )
}

export default FormInput