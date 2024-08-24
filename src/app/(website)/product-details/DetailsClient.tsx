"use client";
import Heading from '@/ui/shared/Heading';
import { Minus, Plus } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react'
import { BiChevronLeft, BiChevronRight, BiHeart } from 'react-icons/bi';
import { FaStar } from 'react-icons/fa6';
import Slider, { CustomArrowProps, Settings } from "react-slick";
import "slick-carousel/slick/slick.css";

interface IDetailsProps{
    productId: string;
}

const DetailsClient: React.FC<IDetailsProps> = ({productId}) => {
    const [sliderIndex, setSliderIndex] = useState<number>();
    const [quantity, setQuantity] = useState<number>(1);

    const product = {
        image : "https://images.unsplash.com/photo-1517666005606-69dea9b54865?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Tomato",
        rating: 5,
        protein: 5,
        carbs: 50,
        fat: 10,
        price: 20,
        details: "asdasdasd",
        instructions: "adsasdasd",
        ingredient: "asdasd"

    };

    const ArrowLeft = ({currentSlide, slideCount,...props}: CustomArrowProps) => (
        <button {...props} className="prev absolute z-[1] top-[40%] -left-2">
          <BiChevronLeft size={24} color="black" className="mx-auto " />
        </button>
    );
    
    const ArrowRight = ({ currentSlide, slideCount, ...props}: CustomArrowProps) => (
        <button {...props} className="next absolute top-[40%] -right-2">
          <BiChevronRight size={24} color="black" className="mx-auto" />
        </button>
    );
    
    const settings: Settings = {
        infinite: true,
        speed: 500,
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: false,
        dots: false,
        prevArrow: <ArrowLeft />,
        nextArrow: <ArrowRight />,
        autoplaySpeed: 2000,
    };


    return (
        <div className='container mt-3'>

            <div className='grid grid-cols-12 gap-5 lg:gap-10 mb-6'>

                {/* image container */}
                <div className="col-span-12 lg:col-span-6 h-fit  order-1 lg:order-1">
                    <div className='relative w-full h-[250px] sm:h-[250px] md:h-[350px] lg:h-[400px] mb-2'>
                        {
                            product?.image
                            &&
                            <Image
                                alt="Catering"
                                src={product?.image}
                                fill={true}
                                priority={true}
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className="w-auto h-auto  object-fill object-center"
                            />
                        }
                    </div>

                    <Slider {...settings}>
                        {[...Array(6)].map((item, index) => {
                            return (
                                <div
                                    className="w-[123px] h-[98px] relative group"
                                    key={index}
                                    onClick={() => setSliderIndex(index)}
                                >
                                    <Image
                                        alt="Logo"
                                        src={product.image}
                                        fill={true}
                                        priority={true}
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        className={`w-auto h-auto object-fill object-center ${
                                            index === sliderIndex
                                            ? "border border-[#00809E] border-opacity-[50%]"
                                            : "border border-transparent"
                                        }`}
                                    />
                                </div>
                            );
                        })}
                    </Slider>
                    
                </div>
                
                {/* product container */}
                <div className='col-span-12 lg:col-span-6 order-2 lg:order-2'>
                    <Heading name={product?.name} style='font-bold text-[24px] leading-[36px] text-[#5C5C5C] mb-1' />
                    {
                        product?.rating
                        &&
                        <div className='flex items-center gap-3 mt-4 mb-1'>
                            <FaStar className='' color='#FDB64E' size={14} /> <span className='text-[#FDB64E] text-[14px] leading-[18px] font-medium'>{product?.rating}</span>
                        </div>
                    }

                    <p className='font-semibold text-[24px] leading-5 text-[#735571] mt-1'>${product?.price}</p>

                    <div className='flex items-center gap-8'>
                        <div className='w-[150px] bg-primary bg-opacity-[20%] rounded-md border border-secondary border-opacity-[40%] h-10 flex items-center justify-between px-2'>
                            <button disabled={quantity === 1} onClick={()=>setQuantity(quantity - 1)}><Minus color='#555555' size={18} /></button>
                            <button>{quantity}</button>
                            <button onClick={()=>setQuantity( quantity + 1 )} ><Plus color='#555555' size={18} /></button>
                        </div>
                        <button className='w-[150px]  border-none font-medium text-[14px] leading-6 bg-primary text-white h-10 rounded-lg'>Add to cart</button>
                        <button className=' flex items-center justify-center gap-2 w-[150px] font-medium text-[14px] leading-6 border border-primary text-primary h-10 rounded-lg'><BiHeart size={20}/> Favorite</button>
                    </div>

                    {/* product description */}
                    <p className='font-medium text-[16px] leading-[20px] text-[#7E7E7E] my-4'>
                        {product?.details}
                    </p>
                </div>
            </div>

            
            {/* <RelatedMenu id={product?._id} /> */}
            
        </div>
    )
}

export default DetailsClient