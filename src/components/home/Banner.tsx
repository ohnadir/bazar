import Image from 'next/image'
import React from 'react'
import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Slider, { CustomArrowProps, Settings } from "react-slick";


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

            <div className='col-span-7' style={{borderRadius: 8}}>
                <Slider {...settings}>
                    {
                        [
                            "https://res.cloudinary.com/ddqovbzxy/image/upload/v1684986067/slider-1_yobsp0.webp", 
                            "https://res.cloudinary.com/ddqovbzxy/image/upload/v1684989969/slider-3_qj0nwr.webp", 
                            "https://res.cloudinary.com/ddqovbzxy/image/upload/v1684989969/slider-3_qj0nwr.webp"
                        ].map((item:string, index:number)=>{
                            return(
                                <div className='relative' key={index}>
                                    <div className='relative w-full h-[400px]' >
                                        <Image
                                            src={item}
                                            alt="slider image"
                                            fill
                                            style={{objectFit: "cover"}}
                                        />
                                    </div>
                                    <div className='bg-black bg-opacity-[10%] w-full h-full absolute top-0 left-0 flex items-center justify-center'>
                                        <div>
                                            <h1 data-aos="fade-up" data-aos-delay="300" className='slider-slogan mb-1 text-xl sm:text-lg md:text-2xl  lg:text-3xl font-bold text-gray-800'>The Best Quality Products Guaranteed</h1>
                                            <h5 data-aos="fade-up" data-aos-delay="100" className="slider-text text-gray-600 text-base leading-6">Dramatically facility effective total linkage for go forward processes.</h5>
                                            <div data-aos="fade-up" data-aos-delay="500" className='flex gap-10 '>
                                                <button className='shop-btn '>Shop Now</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                    
                </Slider>
            </div>

            <div className='col-span-5 border border-red-300 h-[400px]'></div>
        </div>
    )
}

export default Banner