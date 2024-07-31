"use client";
import Advertisement from '@/components/home/Advertisement';
import Banner from '@/components/home/Banner';
import Category from '@/components/home/Category';
import React from 'react'

const HomeClient = () => {
    return (
        <div className='py-10'>
            <div className='container'>
                <Banner/>
                <Advertisement/>
                <Category/>
            </div>
            
        </div>
    )
}

export default HomeClient