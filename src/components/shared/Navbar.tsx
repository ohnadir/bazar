"use client";
import React from 'react';
import Image from 'next/image';
import Logo from "@/assets/logo.svg"
import { Badge, Input } from 'antd';
import { BiHeart, BiSearch } from 'react-icons/bi';
import { BsCart } from 'react-icons/bs';
import { HiOutlineUserCircle } from 'react-icons/hi';

const Navbar = () => {

    return (
        <div className='bg-primary sticky top-0 z-10 h-20 flex items-center justify-center'>
            <div className='container flex items-center justify-between gap-10'>
                <div>
                    <Image
                        alt='logo'
                        width={150}
                        height={60}
                        src={Logo}
                    />
                </div>

                <div className='flex-1'>
                    <Input
                        placeholder='Search Product'
                        style={{
                            width: "100%",
                            height: 42,
                            background: "white",
                            border: "none",
                            outline: "none",
                            boxShadow: "none",
                            borderRadius: 8
                        }}
                        suffix={<BiSearch size={24} color='white' />}
                    />
                </div>

                <div className='flex items-center gap-6'>
                    <Badge count={5} color='red'>
                        <BsCart size={22} style={{color: "white"}} />
                    </Badge>

                    <Badge count={5} color='red'>
                        <BiHeart size={22} style={{color: "white"}} />
                    </Badge>

                    <HiOutlineUserCircle size={24} style={{color: "white"}} />
                </div>

            </div>
        </div>
    )
}

export default Navbar