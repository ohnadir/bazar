"use client";
import { Select } from 'antd';
import Link from 'next/link'
import React from 'react'
import { MdKeyboardArrowRight } from 'react-icons/md';
import { IoIosArrowDown } from "react-icons/io";
import { RiMenuUnfoldFill } from "react-icons/ri";

const SubHeader:React.FC = () => {
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
                <div className="flex items-center gap-10">
                    {
                        item.map((menu, index) => {
                            return(
                                <Link key={index} className="font-normal poppins text-[16px] leading-6 text-[#555656]" href={`${menu.path}`}>{menu.label}</Link>
                            )
                        })
                    }
                </div>
                {/* header route container end */}
                
            </div>
        </div>
    )
}

export default SubHeader