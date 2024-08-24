"use client";
import Image from 'next/image';
import React, { useState } from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { MdOutlineAddShoppingCart } from 'react-icons/md';
import ProductDetails from '../ProductDetails';

interface IProductCard{
    product: {}
}

const ProductCard:React.FC<IProductCard> = ({product}) => {
    const [open, setOpen] = useState(false)

    // handle cart button function
    const handleCart = (e:any) => {
        e.stopPropagation();
        e.preventDefault();
    };

    // handle wish button function
    const handleWish = (e:any) => {
        e.stopPropagation();
        e.preventDefault();
    };

    return (
        <>
            <div                    
                className="bg-gray-100 cursor-pointer shadow-sm rounded-md  p-2 relative"
                onClick={()=>setOpen(true)}
            >

                {/* product image  */}
                <div className="relative w-full h-[150px] md:h-[220px] overflow-hidden rounded" >
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
                    onClick={(e) => handleWish(e)}
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
                        className={"fill-neutral-500/70"}
                    />
                </div>
                {/* wish button end here */}


                <div className="flex items-center justify-between px-1 pt-3">
                    {/* price */}
                    <h3 className="text-[#555656] font-medium text-[16px] md:text-xl tracking-tight">Fresh Fruits</h3>
                    {/* product stock count */}
                    <p className="text-[#929394] text-sm "> 120 pc</p>
                </div>

                <div className="flex items-center justify-between  py-2">
                    {/* price container */}
                    <p className="text-[15px]  sm:text-[18px] leading-6 font-semibold text-primary">
                        $120
                        <sub className="text-[12px] font-medium text-red-600 line-through"> $100</sub>
                    </p>

                    {/* cart button */}
                    <div 
                        onClick={(e)=>handleCart(e)} 
                        className="w-[30px]  sm:w-[40px] h-[30px] sm:h-[40px] flex items-center cursor-pointer bg-white justify-center rounded"
                    >
                        <MdOutlineAddShoppingCart size={20} color='#10b981' />
                    </div>
                </div>

            </div>

            {/* products details modal */}
            <ProductDetails
                open={open}
                setOpen={setOpen}
            />
        </>
    )
}

export default ProductCard