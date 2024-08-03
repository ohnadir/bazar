"use client";
import Link from 'next/link';
import React from 'react';

const Advertisement:React.FC = () => {
    return (
        <div className='bg-[#FFEDD5] my-6 rounded-lg p-4 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0'>
            <div>
                <h1 className='text-[16px] leading-6 '>
                    <span className='text-primary font-bold'>100% Natural quality </span>
                    <span className='text-black'>Organic Product</span>
                </h1>
                <p className='text-[16px] leading-6 '>
                    See our latest discounted products from here and get a special
                    <span className='text-primary'> discount product</span>
                </p>
            </div>

            <Link href={"/"} className='w-full md:w-[120px]'>
                <button className='bg-primary text-white rounded-lg h-[42px] w-full md:w-[120px]'>Shop Now</button>
            </Link>
        </div>
    )
}

export default Advertisement