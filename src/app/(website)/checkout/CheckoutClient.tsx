/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import Payment from '@/ui/Payment';
import Heading from '@/ui/shared/Heading';
import { Checkbox, ConfigProvider, DatePicker, Form, Input, Radio, theme } from 'antd';
import dayjs from 'dayjs';
import { Minus, Plus } from 'lucide-react';
import Image from 'next/image'
import React, { useEffect, useState } from 'react';

/* import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
const stripePromise = loadStripe('pk_test_51JwnGrLiLwVG3jO00U7B3YmokwdPnB6FKd1uresJgkbsL4f5xUfCmbFdBaGO42KvLmLfVzsgo1oIQToXABSTyypS00xQsEgKZ6'); */

const CheckoutClient = () => {
    const [quantity, setQuantity] = useState<number>(1);
    const [checkbox, setCheckbox] = useState<boolean>(false); 
    const [form] = Form.useForm();

    

    const handleSubmit=(values: FormDataEvent)=>{
        console.log(values)
    }
    const total = 120;


    return (
        <div className='bg-[#EFEEF6] py-4 h-[calc(100vh-147px)]'>
            
                <Form onFinish={handleSubmit} form={form} layout='vertical' className='container grid grid-cols-12 gap-6 h-full'>

                    {/* shipping information */}
                    <div className='col-span-8  bg-white rounded-lg p-4 h-full'>
                        <Heading name='Shipping Information' style='text-[24px]  leading-[24px] text-black font-semibold' />

                        <div className='grid grid-cols-12 gap-6 mt-4'>

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
                                <input 
                                    placeholder='Enter Your Full Name'
                                    className='
                                        w-full h-10 px-[11px] 
                                        border-none outline-none 
                                        rounded-md bg-[#EFEEF6] 
                                        placeholder:text-[#838383] placeholder:text-[14px] placeholder:font-normal placeholder:leading-6
                                    '
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
                                className='col-span-6 '
                            >
                                <input 
                                    placeholder='Enter Your Phone Number'
                                    className='
                                        w-full h-10 px-[11px] 
                                        border-none outline-none 
                                        rounded-md bg-[#EFEEF6] 
                                        placeholder:text-[#838383] placeholder:text-[14px] placeholder:font-normal placeholder:leading-6
                                    '
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
                                <input 
                                    placeholder='Enter Your Address'
                                    className='
                                        w-full h-10 px-[11px] 
                                        border-none outline-none 
                                        rounded-md bg-[#EFEEF6] 
                                        placeholder:text-[#838383] placeholder:text-[14px] placeholder:font-normal placeholder:leading-6
                                    '
                                />
                            </Form.Item>
                            
                            <ConfigProvider
                                theme={{
                                    
                                    components: {
                                        DatePicker: {
                                            activeBorderColor: "#10b981",
                                            cellHoverBg: "#10b981",
                                        }
                                    },
                                    token: {
                                        colorPrimary: "#10b981",
                                        colorTextPlaceholder: "#838383"
                                    }
                                }}
                            > 
                                <Form.Item
                                    name="date"
                                    label={<p className='text-[#838383] text-[14px] font-normal leading-6'>Delivery Date</p>}
                                    rules={[
                                        {
                                            required: true,
                                            message: "Please Pick Your Delivery Date"
                                        }
                                    ]}
                                    style={{marginBottom: 0}}
                                    className='col-span-12'
                                    valuePropName='date'
                                    getValueFromEvent={(value)=>  value.format("YYYY-MM-DD")}
                                >
                                    
                                    <DatePicker
                                        format="YYYY-MM-DD"
                                        placeholder="Picker Your Delivery Date"
                                        className='bg-[#EFEEF6] rounded-md h-10 border-none outline-none shadow-none w-full'
                                    />
                                </Form.Item>
                            </ConfigProvider>

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
                                <Form.Item className='col-span-12' style={{marginBottom: 0}}>
                                    <Checkbox onChange={(e:any)=>setCheckbox(e.target.checked)} className="text-[12px] leading-[24px] font-medium">Your Profile Address</Checkbox>
                                </Form.Item>
                            </ConfigProvider>


                            <ConfigProvider
                                theme={{
                                    token: {
                                    colorPrimary: "#10b981",
                                    colorPrimaryHover: "#10b981",
                                    colorBorder: "#838383"
                                    }
                                }}
                            >
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
                                    
                                    <Radio.Group
                                        onChange={(e) => {
                                            const selectedValue = e.target.value;
                                            let deliveryCharge = 0;

                                            if (selectedValue === "bkash") {
                                                deliveryCharge = 60;
                                            } else if (selectedValue === "online") {
                                                deliveryCharge = 50;
                                            } else if (selectedValue === "cash") {
                                                deliveryCharge = 30;
                                            }

                                            form.setFieldsValue({ 
                                                delivery_charge: deliveryCharge, 
                                                total: deliveryCharge + total 
                                            });
                                        }}
                                    >
                                        <Radio value={"bkash"}>Bkash</Radio>
                                        <Radio value={"online"}>Online</Radio>
                                        <Radio value={"cash"}>Cash On Delivery</Radio>
                                    </Radio.Group>
                                </Form.Item>
                            </ConfigProvider>

                            <Form.Item
                                label={<p className=''>Do you Have Coupon Code?</p>}
                                style={{marginBottom: 0}}
                                className='col-span-8'
                            >
                                <div className='flex items-center gap-6'>
                                    <input 
                                        placeholder='Enter Coupon Code'
                                        className='
                                            w-full flex-1 h-10 px-[11px] 
                                            border-none outline-none 
                                            rounded-md bg-[#EFEEF6] 
                                            placeholder:text-[#838383] placeholder:text-[14px] placeholder:font-normal placeholder:leading-6
                                        '
                                    />
                                    <button
                                        type='button' 
                                        onClick={()=>{
                                            const discountPercentage = 10;
                                            const discountAmount = total * (discountPercentage / 100);
                                            console.log("discountAmount", discountAmount)
                                            const finalPrice = total - discountAmount;
                                            console.log("final price", finalPrice)
                                            form.setFieldsValue({discount: finalPrice, total : finalPrice})
                                        }} 
                                        className='border h-10 border-primary rounded-lg text-primary w-[200px]'
                                    >
                                        Apply
                                    </button>
                                </div>
                            </Form.Item>




                        </div>
                    </div>


                    {/* cart summary */}
                    <div className='col-span-4 flex flex-col overflow-hidden bg-white rounded-lg h-full'>
                        <Heading name='Order Summary' style='text-[24px] p-4 leading-[24px] text-black font-semibold' />
                        <div className='pb-4 px-4 flex-1 overflow-y-auto'>
                            <div className='grid grid-cols-1 gap-3'>
                                {
                                    [...Array(5)]?.map((item, index)=>{
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
                            <p className='flex items-center justify-between text-[16px] leading-6 '>
                                Shipping Cost: 
                                <Form.Item 
                                    name={"delivery_charge"} 
                                    style={{marginBottom: 0}}
                                >
                                    <span className='font-semibold'>${Form.useWatch('delivery_charge', form) || 0}</span> 
                                </Form.Item>
                            </p>
                            <p className='flex items-center justify-between text-[16px] leading-6 '>
                                Discount: 
                                <Form.Item 
                                    name={"discount"} 
                                    style={{marginBottom: 0}}
                                >
                                    <span className='font-semibold'>${Form.useWatch('discount', form) || 0}</span> 
                                </Form.Item>
                            </p>
                        </div>
                        <p className='flex items-center justify-between p-4 text-[16px] leading-6 '>
                            Total: 
                            <Form.Item 
                                name={"total"} 
                                style={{marginBottom: 0}}
                            >
                                <span className='font-semibold'>${Form.useWatch('total', form) || total}</span> 
                            </Form.Item>
                        </p>
                        <div className='px-4 pb-4'>
                            <Form.Item>
                                <button type='submit' className=' h-10 text-white w-full rounded-md bg-primary hover:bg-[#059669] transition-all duration-150 flex items-center justify-center'>
                                    Proceed To Payment
                                </button>
                            </Form.Item>
                        </div>
                    </div>

                </Form>
            
            {/* <Elements stripe={stripePromise}>
            <Payment  open={open} setOpen={setOpen} clientSecret={clientSecret} />
            </Elements> */}
        </div>
    )
}

export default CheckoutClient