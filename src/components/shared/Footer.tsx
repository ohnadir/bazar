"use client";
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import Logo from "@/assets/logo2.svg";
import Heading from './Heading';
import { Button, Input } from 'antd';
import facebook  from "@/assets/facebook.png";
import instagram  from "@/assets/instagram.png";
import linkedin  from "@/assets/linkedin.png";
import twitter  from "@/assets/twitter.png";

const Footer = () => {
    const [keyword, setKeyword] = useState("");

    const item = [
        {
            label: "Home",
            path: "/"
        },
        {
            label: "Services",
            path: "/services"
        },
        {
            label: "About",
            path: "/about"
        }
    ]

    const items = [
        {
            label: "News",
            path: "/news"
        },
        {
            label: "Terms & Conditions",
            path: "/term-and-conditions"
        },
        {
            label: "Supports",
            path: "/supports"
        }
    ]
    return (
        <div className='bg-[#EFEEF6]'>
            <div className='container grid grid-cols-12 py-[30px] gap-6 md:gap-4'>

                <div className='col-span-12 mb-4'>
                    <Link href={"/"} className='w-fit h-fit block'>
                        <Image alt='Logo' src={Logo} width={188} height={150} />
                    </Link>
                </div>
                
                <div className='col-span-12 sm:col-span-6  md:col-span-4 lg:col-span-4 mx-auto sm:mx-0'>
                    <p className='text-black'>
                        Fusce quis tellus nulla. Donec sodales mauris eget pellentesque hendrerit. Donec molestie 
                        non urna sit amet aliquet. Curabitur sit amet est nec nulla varius fermentum. explore us
                    </p>
                </div>

                <div className='col-span-6 sm:col-span-6  md:col-span-4 lg:col-span-2 flex flex-col gap-4'>
                    {
                        item.map((menu, index) => {
                            return(
                                <Link 
                                    key={index} 
                                    className={`
                                        h-[21px]
                                        font-normal text-[16px] leading-6 
                                        text-black
                                        border-[#D9D9D9]
                                    `} 
                                    href={`${menu.path}`}
                                >
                                    {menu.label}
                                </Link>
                            )
                        })
                    }
                </div>

                <div className='col-span-6 sm:col-span-6  md:col-span-4 lg:col-span-2 flex flex-col gap-4'>
                    {
                        items.map((menu, index) => {
                            return(
                                <Link 
                                    key={index} 
                                    className={`
                                        h-[21px]
                                        font-normal text-[16px] leading-6 
                                        text-black
                                        border-[#D9D9D9]
                                    `} 
                                    href={`${menu.path}`}
                                >
                                    {menu.label}
                                </Link>
                            )
                        })
                    }
                </div>

                <div className='col-span-12 sm:col-span-6  md:col-span-4 lg:col-span-4'>
                    <Heading name='Get in touch !' style='font-semibold text-[16px] leading-[20px] text-black mb-2' />
                    <div className='w-full flex md:items-center flex-col md:flex-row gap-4'>
                        <Input
                            placeholder='Enter Your Email'
                            style={{
                                width: "100%",
                                height: 42,
                                border: "1px solid #BBBBBB",
                                boxShadow: "none",
                                outline: "none",
                                color: "#5C5C5C",
                                background:"#FFFFFF"
                            }}
                            value={keyword}
                            onChange={(e)=>setKeyword(e.target.value)}
                            className='placeholder:text-[#5C5C5C]'
                        />

                        <Button 
                            onClick={()=>setKeyword("")}
                            htmlType='submit'
                            style={{
                                background: "#10b981",
                                color: "white",
                                border: "none",
                                height: 42
                            }}
                        >
                            Subscribe
                        </Button>

                    </div>
                    <div className='flex items-center gap-6 mt-6'>
                        <a href="https://www.facebook.com/" target='_blank'>
                            <Image
                                alt='social-link'
                                src={facebook}
                                width={32}
                                height={32}
                            />
                        </a>

                        <a href='https://www.instagram.com/' target='_blank'>
                            <Image
                                alt='social-link'
                                src={instagram}
                                width={32}
                                height={32}
                            />
                        </a>

                        <a href='https://www.linkedin.com/' target='_blank'>
                            <Image
                                alt='social-link'
                                src={linkedin}
                                width={32}
                                height={32}
                                />
                            </a>

                        <a href='https://www.twitter.com/' target='_blank'>
                            <Image
                                alt='social-link'
                                src={twitter}
                                width={32}
                                height={32}
                            />
                        </a>
                    </div>
                </div>
            </div>

            <div className='bg-[#003642] py-3'>
                <p className='text-center text-[#ffffff]'>©Copyright UX/UI 2024. Bazar</p>
            </div>
        </div>
    )
}

export default Footer