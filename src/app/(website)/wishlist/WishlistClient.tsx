"use client";
import ProductCard from '@/ui/Card/ProductCard';
import Heading from '@/ui/shared/Heading';
import React from 'react';

const WishlistClient = () => {
    return (
        <div className='container mb-10'>
            <Heading name='Your Wishlist'  style='text-[20px] my-4 sm:my-8  md:text-[32px] leading-[38px] md:leading-[48px] text-black font-semibold' />

            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4'>
                {
                    [...Array(10)].map((product:number, index:number)=>{
                        return(
                            <ProductCard product={product} key={index} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default WishlistClient