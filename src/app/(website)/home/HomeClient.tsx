"use client";
import Advertisement from '@/ui/home/Advertisement';
import Banner from '@/ui/home/Banner';
import Category from '@/ui/home/Category';
import Faq from '@/ui/home/Faq';
import FeaturedProduct from '@/ui/home/FeaturedProduct';
import React from 'react'

const HomeClient = () => {
    return (
        <div className='py-5 md:py-10'>
            <div className='container'>
                <Banner/>
                <Advertisement/>
                <Category/>
                <FeaturedProduct/>
                <Faq/>
            </div>
            
        </div>
    )
}

export default HomeClient