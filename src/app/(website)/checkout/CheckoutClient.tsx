/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import Payment from '@/ui/Payment';
import Heading from '@/ui/shared/Heading';
import { Checkbox, ConfigProvider, DatePicker, Form, Input, Radio, theme } from 'antd';
import dayjs from 'dayjs';
import { Minus, Plus } from 'lucide-react';
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const CheckoutClient = () => {
    const [quantity, setQuantity] = useState<number>(1);
    const [checkbox, setCheckbox] = useState<boolean>(false); 
    const [form] = Form.useForm();
    return (
        <div className='bg-[#EFEEF6] py-4 h-[calc(100vh-147px)]'>
            <div className='container grid grid-cols-12 gap-6 h-full'>

                {/* shipping information */}
                <div className='col-span-8  bg-white rounded-lg p-4 h-full'>
                    <Heading name='Shipping Information' style='text-[24px]  leading-[24px] text-black font-semibold' />

                    <Form form={form} layout='vertical' className='grid grid-cols-12 gap-6 mt-4'>

                        <Form.Item
                            name="name"
                            rules={[
                                {
                                    required: true,
                                    message: "Please Enter Your Full Name"
                                }
                            ]}
                            label={<p className=''>Enter Your Name</p>}
                            style={{marginBottom: 0}}
                            className='col-span-6'
                        >
                            <Input
                                placeholder='Enter Your Full Name'
                                style={{
                                    width: "100%",
                                    height: 40,
                                    boxShadow: "none",
                                    outline: "none",
                                    border: "none",
                                    borderRadius: 6,
                                    background: "#EFEEF6"
                                }}
                                className='poppins placeholder:text-[#838383] placeholder:text-[14px] placeholder:font-normal placeholder:leading-6'
                            />
                        </Form.Item>

                        <Form.Item
                            name="contact"
                            label={<p className=''>Contact Number</p>}
                            rules={[
                                {
                                    required: true,
                                    message: "Please Enter Phone Number"
                                }
                            ]}
                            style={{marginBottom: 0}}
                            className='col-span-6'
                        >
                            <Input
                                placeholder='Enter Your Phone Number'
                                style={{
                                    width: "100%",
                                    height: 40,
                                    boxShadow: "none",
                                    outline: "none",
                                    border: "none",
                                    borderRadius: 6,
                                    background: "#EFEEF6"
                                }}
                                className='poppins placeholder:text-[#838383] placeholder:text-[14px] placeholder:font-normal placeholder:leading-6'
                            />
                        </Form.Item>

                        <Form.Item
                            name="location"
                            label={<p className=''>Delivery Address</p>}
                            rules={[
                                {
                                    required: true,
                                    message: "Please Enter Address!"
                                }
                            ]}
                            style={{marginBottom: 0}}
                            className='col-span-12'
                        >
                            <Input
                                placeholder='Enter Your Address'
                                style={{
                                    width: "100%",
                                    height: 40,
                                    boxShadow: "none",
                                    outline: "none",
                                    border: "none",
                                    borderRadius: 6,
                                    background: "#EFEEF6"
                                }}
                                className='poppins placeholder:text-[#838383] placeholder:text-[14px] placeholder:font-normal placeholder:leading-6'
                            />
                        </Form.Item>

                        <Form.Item
                            name="date"
                            label={<p className=''>Delivery Date</p>}
                            rules={[
                                {
                                    required: true,
                                    message: "Please Pick Your Delivery Date"
                                }
                            ]}
                            style={{marginBottom: 0}}
                            className='col-span-12'
                        >
                            <ConfigProvider
                                theme={{
                                    token: {
                                      colorPrimary: "#838383",
                                      colorTextPlaceholder: "#838383",
                                    }
                                }}
                            > 
                                <DatePicker
                                    placeholder="Picker Your Delivery Date"
                                    style={{
                                        width: "100%",
                                        height: 40,
                                        boxShadow: "none",
                                        outline: "none",
                                        border: "none",
                                        borderRadius: 6,
                                        background: "#EFEEF6",
                                    }}
                                    // className='placeholder:text-black placeholder:text-[14px] placeholder:font-normal placeholder:leading-6'
                                />
                            </ConfigProvider>
                        </Form.Item>

                        <Form.Item className='col-span-12' style={{marginBottom: 0}}>
                            <ConfigProvider
                                theme={{
                                    token: {
                                      colorPrimary: "#10b981",
                                      colorPrimaryHover: "#10b981",
                                      controlInteractiveSize: 18,
                                      colorBorder: "#838383"
                                    }
                                }}
                            >
                                <Checkbox onChange={(e:any)=>setCheckbox(e.target.checked)} className="text-[12px] leading-[24px] font-medium">Your Profile Address</Checkbox>
                            </ConfigProvider>
                        </Form.Item>

                        <Form.Item 
                            name={"payment_method"} 
                            style={{marginBottom: 0}}
                            className='col-span-12'
                            label={<p>Payment Method</p>}
                            rules={[
                                {
                                    required: true,
                                    message: "Please Choose Your Payment Method"
                                }
                            ]}
                        >
                            <ConfigProvider
                                theme={{
                                    token: {
                                      colorPrimary: "#10b981",
                                      colorPrimaryHover: "#10b981",
                                      colorBorder: "#838383"
                                    }
                                }}
                            >
                                <Radio.Group>
                                    <Radio value={"bkash"}>Bkash</Radio>
                                    <Radio value={"online"}>Online</Radio>
                                    <Radio value={"cash"}>Cash On Delivery</Radio>
                                </Radio.Group>
                            </ConfigProvider>
                        </Form.Item>


                    </Form>
                </div>


                {/* cart summary */}
                <div className='col-span-4 flex flex-col overflow-hidden bg-white rounded-lg h-full'>
                    <Heading name='Order Summary' style='text-[24px] p-4 leading-[24px] text-black font-semibold' />
                    <div className='p-4 flex-1 overflow-y-auto'>
                        <div className='grid grid-cols-1 gap-3'>
                            {
                                [...Array(15)]?.map((item, index)=>{
                                    return(
                                        <div className='flex items-center justify-between' key={index}>

                                            <div className='flex items-center gap-4'>
                                                {/* product image */}
                                                <Image
                                                    src={"https://preetheme.com/html/fruits/assets/img/cate/4.jpg"}
                                                    alt='cart-product photo'
                                                    width={50}
                                                    height={50}
                                                    className='rounded-sm'
                                                />
                                                {/* product details start */}
                                                <div className='w-full'>
                                                    <h2 className='text-black text-[16px] leading-6'>Tomato</h2>
                                                    <p className='text-black text-[12px]'>Item Price <span className='font-semibold'>$12</span></p>
                                                </div>
                                            </div>

                                            <div className='w-[100px] rounded-md border border-secondary border-opacity-[40%] py-1 flex items-center justify-between px-2'>
                                                <button disabled={quantity === 1} onClick={()=>setQuantity(quantity - 1)}><Minus color='#555555' size={18} /></button>
                                                <button>{quantity}</button>
                                                <button onClick={()=>setQuantity( quantity + 1 )} ><Plus color='#555555' size={18} /></button>
                                            </div>

                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className='border-b-[1px] border-t-[1px] border-[#EFEEF6] p-4'>
                        <p className='flex items-center justify-between mb-2 text-[16px] leading-6 '>Subtotal: <span className='font-semibold'>$120</span></p>
                        <p className='flex items-center justify-between text-[16px] leading-6 '>Shipping Cost: <span className='font-semibold'>$0</span></p>
                    </div>
                    <p className='flex items-center justify-between p-4 text-[16px] leading-6 '>Total: <span className='font-semibold'>$120</span></p>
                    <div className='px-4 pb-4'>
                        <button className=' h-10 text-white w-full rounded-md bg-primary hover:bg-[#059669] transition-all duration-150 flex items-center justify-center'>
                            Proceed To Payment
                        </button>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default CheckoutClient