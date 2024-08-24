import Image from 'next/image'
import React from 'react'
import "slick-carousel/slick/slick.css";
import Slider, { Settings } from "react-slick";


const Banner:React.FC = () => {
    const settings: Settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className='grid grid-cols-12 gap-6'>

            <div className='col-span-12  md:col-span-7 rounded-lg order-1 md:order-1'>
                <Slider {...settings}>
                    {
                        [
                            "https://res.cloudinary.com/ddqovbzxy/image/upload/v1684986067/slider-1_yobsp0.webp", 
                            "https://res.cloudinary.com/ddqovbzxy/image/upload/v1684989969/slider-3_qj0nwr.webp", 
                            "https://res.cloudinary.com/ddqovbzxy/image/upload/v1684989969/slider-3_qj0nwr.webp"
                        ].map((item:string, index:number)=>{
                            return(
                                <div className='relative' key={index}>
                                    <div className='relative w-full h-[200px] md:h-[400px]' >
                                        <Image
                                            src={item}
                                            alt="slider image"
                                            fill={true}
                                            priority={true}
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            className="w-auto h-auto  object-fill object-center"
                                        />
                                    </div>
                                </div>
                            )
                        })
                    }
                    
                </Slider>
            </div>

            <div className='col-span-12  md:col-span-5 border border-red-300 h-[200px] md:h-[400px] order-2 md:order-2'></div>
        </div>
    )
}

export default Banner