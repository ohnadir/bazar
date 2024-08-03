"use client";
import React from 'react';
import Image from 'next/image';
import Logo from "@/assets/logo.svg"
import { Badge, Input } from 'antd';
import { BiHeart, BiSearch } from 'react-icons/bi';
import { BsCart } from 'react-icons/bs';
import Link from 'next/link';

const Navbar = () => {

    return (
        <div className='bg-primary sticky top-0 z-20 h-20 flex items-center justify-center'>
            <div className='container flex items-center justify-center md:justify-between gap-10'>
                <div>
                    <Image
                        alt='logo'
                        width={150}
                        height={60}
                        src={Logo}
                    />
                </div>

                <div className='hidden md:flex-1'>
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

                <div className='hidden md:flex items-center gap-6'>
                    <Badge count={5} color='#FFEDD5'>
                        <BsCart size={22} style={{color: "white"}} />
                    </Badge>

                    <Badge count={5} color='#FFEDD5'>
                        <BiHeart size={22} style={{color: "white"}} />
                    </Badge>
                    <Link href={"/login"}>
                        <button className='bg-white text-primary border-none outline-none rounded-3xl w-[108px] h-[40px]'>Login</button>
                    </Link>
                    {/* <HiOutlineUserCircle size={24} style={{color: "white"}} /> */}
                </div>

            </div>
        </div>
    )
}

export default Navbar