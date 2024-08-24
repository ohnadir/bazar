"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Logo from "@/assets/logo.svg"
import { Badge, Input } from 'antd';
import { BiHeart, BiSearch } from 'react-icons/bi';
import { BsCart } from 'react-icons/bs';
import Link from 'next/link';
import CartDrawer from './CartDrawer';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className='bg-primary sticky top-0 z-20 h-20 flex items-center justify-center'>
            <div className='container flex items-center justify-center md:justify-between gap-10'>
                <div>
                    <Image
                        alt='logo'
                        src={Logo}
                        className='w-auto h-auto'
                    />
                </div>

                <div className='hidden sm:block flex-1'>
                    <Input
                        placeholder='Search Product'
                        className='
                            placeholder:text-[#000000] placeholder:text-[16px] placeholder:leading-5 
                            w-full h-[42px] rounded-md bg-white px-3 border-none outline-none shadow-none
                        '
                        suffix={<BiSearch size={24}  className='text-secondary' />}
                    />
                </div>

                <div className='hidden md:flex items-center gap-6'>
                    <Badge count={5} color='#FFEDD5' style={{color: "black", cursor: "pointer"}}>
                        <BsCart 
                            className='cursor-pointer' 
                            size={22} 
                            style={{color: "white"}}
                            onClick={()=>setOpen(true)}
                        />
                    </Badge>

                    <Badge count={5} color='#FFEDD5' style={{color: "black"}}>
                        <Link href={"/wishlist"}>
                            <BiHeart size={25} style={{color: "white", cursor: "pointer"}} />
                        </Link>
                    </Badge>
                    <Link href={"/login"}>
                        <button className='bg-white text-primary border-none outline-none rounded-3xl w-[108px] h-[40px]'>Login</button>
                    </Link>
                    {/* <HiOutlineUserCircle size={24} style={{color: "white"}} /> */}
                </div>

            </div>
            <CartDrawer open={open} setOpen={setOpen} />
        </div>
    )
}

export default Navbar