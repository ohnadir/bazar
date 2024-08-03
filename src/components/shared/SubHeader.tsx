"use client";
import { Select } from 'antd';
import Link from 'next/link'
import React, { useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { RiMenuFoldFill, RiMenuUnfoldFill } from "react-icons/ri";
import Drawer from './Drawer';

const SubHeader:React.FC = () => {
    const [open, setOpen] = useState(false);
    const item = [
        {
            label: "Home",
            path: "/"
        },
        {
            label: "Shop",
            path: "/shop"
        },
        {
            label: "About US",
            path: "/about"
        },
        {
            label: "Contact Us",
            path: "/contact"
        },
        {
            label: "Offer",
            path: "/offer"
        }
    ]
    return (
        <div className='bg-[#EFEEF6]'>
            <div className="container header flex items-center justify-between py-3">

                {/* category select container start */}
                <Select
                    placeholder={<div className="flex items-center gap-4">
                        <RiMenuUnfoldFill size={20} color="white"/>
                        <span className='text-white'>Select Category</span>
                    </div>}
                    style={{
                        width: 300,
                        height: 42
                    }}
                    suffixIcon={<IoIosArrowDown color="white" size={20} />}
                >
                    {/* select value */}
                    {
                        [...Array(5)].map((option, index) => (
                            <Select.Option value={option?._id} key={index}>
                                {option?.categoryName}
                            </Select.Option>
                        ))
                    }

                </Select>
                {/* category select container end */}

                {/* header route container start */}
                <div className="hidden md:flex items-center gap-10">
                    {
                        item.map((menu, index) => {
                            return(
                                <Link key={index} className="font-normal poppins text-[16px] leading-6 text-[#555656]" href={`${menu.path}`}>{menu.label}</Link>
                            )
                        })
                    }
                </div>
                {/* header route container end */}
                
                {/* mobile device hum burger menu */}
                <div className="block md:hidden cursor-auto" onClick={()=>setOpen(true)}>
                    <RiMenuFoldFill size={30} color='#10b981' />
                </div>
            </div>

            {/* drawer container */}
            <Drawer open={open} setOpen={setOpen} />
            
        </div>
    )
}

export default SubHeader