import { ConfigProvider, Form, Input } from 'antd';
import { Eye, EyeOff } from 'lucide-react';
import React, { useEffect } from 'react';

interface IFormInputProps{
    name: string;
    label: string;
<<<<<<< HEAD
    style?: string; 
}

const FormPassword:React.FC<IFormInputProps> = ({name, label, style}) => {
=======
}

const FormInput:React.FC<IFormInputProps> = ({name, label}) => {
>>>>>>> f5142b8 (feat: :sparkles: implete redux rtk and stripe)

    const form = Form.useFormInstance();

    useEffect(() => {
        form.setFieldsValue({ name: 'Initial Value' });
    }, [form]);

    return (
        <ConfigProvider
            theme={{
                components: {

                },
                token: {
                    fontFamily: 'Poppins, sans-serif',
                    colorTextPlaceholder: "#A2A3B1"
                }
            }}
        >
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
                <Input.Password
                    id='passwordInput'
                    placeholder='Enter Password'
                    style={{
                        width: "100%",
                        height: 48,
                        boxShadow: "none",
                        outline: "none",
                        border: "1px solid #E0E0E0",
                        borderRadius: 24,
                        background: "#FEFEFE",
                        padding: "4px 4px 4px 11px",
                    }}
                    iconRender={(visible:any) => (
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
        </ConfigProvider>
    )
}

<<<<<<< HEAD
export default FormPassword;
=======
export default FormInput
>>>>>>> f5142b8 (feat: :sparkles: implete redux rtk and stripe)
