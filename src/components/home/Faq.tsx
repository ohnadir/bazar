"use client";
import React, { useEffect, useRef, useState } from 'react'
import { MdKeyboardArrowRight } from 'react-icons/md';
import Heading from '../shared/Heading';
type ContentRef = HTMLDivElement | null;

const Faq: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const contentRefs = useRef<ContentRef[]>([]);

    const toggleAccordion = (index: number) => {
        setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    useEffect(() => {
        if (openIndex !== null && contentRefs.current[openIndex]) {
            contentRefs.current[openIndex]!.style.maxHeight = `${contentRefs.current[openIndex]!.scrollHeight}px`;
        }
        contentRefs.current.forEach((ref, index) => {
            if (ref && index !== openIndex) {
                ref.style.maxHeight = '0px';
            }
        });
    }, [openIndex]);

    return (
        <div className='container'>
        
        {/* heading of Faq section */}
        <Heading name='Frequently Asked Questions' style='text-center text-[32px] leading-[48px] text-black font-semibold' />

        {/* faq container */}
        <div className='mt-10 grid grid-cols-1 gap-6'>
            {
                [...Array(5)].map((_item: any, index) => {
                    return (
                        <div 
                            onClick={() => toggleAccordion(index)} key={index}
                            ref={(el:any) => (contentRefs.current[index] = el)}
                            className='accordion-content overflow-hidden transition-max-height duration-300 ease-in-out py-10 px-4 pt-2 rounded-[4px] cursor-pointer relative'
                            style={{
                                maxHeight: openIndex === index ? `${contentRefs.current[index]?.scrollHeight}px` : '0px',
                                boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"
                            }}
                        >
                            <div className='absolute top-[9px] right-2 bg-primary rounded-full flex items-center justify-center w-[30px] h-[30px]'>
                                <MdKeyboardArrowRight 
                                    className={` transition-all ${openIndex === index ? 'rotate-90' : ''} `}
                                    size={24}
                                    color='white'
                                />
                            </div>
                            <p className='pt-2 text-[16px] leading-5 font-medium text-black'>How it work?</p>
                            <div className='text-[16px] leading-6 font-normal text-secondary mt-2'>
                                This bazar work by your choice
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </div>
    )
}

export default Faq