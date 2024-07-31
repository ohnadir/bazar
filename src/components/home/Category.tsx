"use client"
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BsPlusLg } from 'react-icons/bs';

const Category: React.FC = () => {
  return (
    <div className='flex items-center gap-6 flex-wrap'>
            {
                [...Array(10)].map((_item:any, index:number)=>
                    <Link href={"/"} key={index}>
                        <div className='cursor-pointer w-fit group relative h-fit border-dashed border border-primary p-2 rounded-full'>
                            <Image
                                alt='category Image'
                                width={120}
                                height={120}
                                src={"https://preetheme.com/html/fruits/assets/img/cate/4.jpg"}
                                style={{borderRadius: "100%"}}
                            />
                            <div 
                                className='
                                    absolute top-1/2 left-1/2 transform -translate-x-[50%] -translate-y-[50%]  
                                    w-[100px] h-[100px] rounded-full bg-primary flex items-center justify-center
                                    transition-all duration-200 group-hover:scale-100  scale-0
                                '
                            >
                                <BsPlusLg color='white' size={24}/> 
                            </div>
                        </div>
                        <p className='text-center mt-2 text-[16px] leading-6 font-medium'>{"Vegetable"}</p>
                    </Link>
                )
            }
    </div>
  )
}

export default Category