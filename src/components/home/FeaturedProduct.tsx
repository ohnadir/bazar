import React from 'react'
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import Slider, { Settings } from 'react-slick';
import Heading from '../shared/Heading';
import Link from 'next/link';
import Image from 'next/image';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { MdOutlineAddShoppingCart } from 'react-icons/md';

const FeaturedProduct: React.FC = () => {

    // left button
    const ArrowLeft = ({ currentSlide, slideCount, ...props }: {currentSlide?: any, slideCount?: any}) => (
        <button {...props} className="absolute z-10 -top-12 right-11 bg-gray-100 p-1 rounded-md flex items-center justify-center">
          <BiChevronLeft size={30} color="#10b981" />
        </button>
    );
    
    // right button
    const ArrowRight = ({ currentSlide, slideCount, ...props }: {currentSlide?: any, slideCount?: any}) => (
        <button {...props} className="absolute -top-12 right-0 bg-gray-100 rounded-md p-1 flex items-center justify-center">
          <BiChevronRight size={30} color="#10b981" />
        </button>
    );
    
    // all settings for slider
    const settings: Settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        prevArrow: <ArrowLeft />,
        nextArrow: <ArrowRight />,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    // handle cart button function
    const handleCart = (e:any, id:number) => {
        e.stopPropagation();
        e.preventDefault();
    };

    // handle wish button function
    const handleWish = (e:any, id:number) => {
        e.stopPropagation();
        e.preventDefault();
    };

    return (
        <div className="my-20">

            <div className='flex items-center justify-between'>
                {/* heading of Faq section */}
                <Heading name='Featured Products' style='text-center text-[20px]  md:text-[32px] leading-[38px] md:leading-[48px] text-black font-semibold' />
                <Link className='text-primary underline text-[14px] md:text-[16px]' href={"/shop"}>View All</Link>
            </div>

            {/* product container start from here */}
            <div className="mt-12 md:mt-16 relative featured-product">
                <Slider {...settings}>
                    {
                        [...Array(5)].map((_product:any, index:any) => (
                            <Link key={index} href={"/"}>
                                <div className="bg-gray-100 shadow-sm rounded-md  p-2 relative ">

                                    {/* product image  */}
                                    <div className="relative w-full h-[220px] overflow-hidden rounded" >
                                        <Image 
                                            src={"https://preetheme.com/html/fruits/assets/img/cate/4.jpg"}
                                            alt="product image"
                                            fill
                                            style={{objectFit: "cover"}}
                                        />
                                    </div>

                                    {/* wish button start from here */}
                                    <div
                                        className="
                                            absolute  top-4 right-4
                                            hover:opacity-80
                                            transition
                                            cursor-pointer
                                        "
                                        onClick={(e) => handleWish(e, index)}
                                    >
                                        <AiOutlineHeart
                                            size={28}
                                            className="
                                                fill-white
                                                absolute
                                                -top-[2px]
                                                -right-[2px]
                                            "
                                        />
                                        <AiFillHeart
                                            size={24}
                                            className={
                                                `${ _product?.favorite ? "fill-primary " : "fill-neutral-500/70" }`
                                            }
                                        />
                                    </div>
                                    {/* wish button end here */}


                                    <div className="flex items-center justify-between px-1 pt-3">
                                        {/* price */}
                                        <h3 className="text-[555656] font-medium text-xl tracking-tight">Fresh Fruits</h3>

                                        {/* product stock count */}
                                        <p className="text-[#929394] text-sm "> 120 pc</p>
                                    </div>

                                    <div className="flex items-center justify-between  py-2">
                                        {/* price container */}
                                        <p className="text-[18px] leading-6 font-semibold text-primary">
                                            $120
                                            <sub className="text-[12px] font-medium text-red-600 line-through"> $100</sub>
                                        </p>
                                            
                                        {/* cart button */}
                                        <div 
                                            onClick={(e)=>handleCart(e, index)} 
                                            className="w-[40px] h-[40px] flex items-center cursor-pointer bg-white justify-center rounded"
                                        >
                                            <MdOutlineAddShoppingCart size={20} color='#10b981' />
                                        </div>

                                    </div>
                                </div>
                            </Link>
                        ))
                    }
                </Slider>
            </div>
            {/* product container end */}

        </div>
    )
}

export default FeaturedProduct