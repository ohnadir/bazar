import React, { useState } from 'react';
import Modal from './shared/Modal';
import Image from 'next/image';
import Link from 'next/link';
import { Minus, Plus } from 'lucide-react';
import { LiaCartPlusSolid } from "react-icons/lia";
import { Button } from 'antd';

interface IProductDetailsProps{
    open: boolean;
    setOpen: (open: boolean)=>void;
    value?: object
} 

const ProductDetails: React.FC<IProductDetailsProps> = ({value, open, setOpen}) => {
    const [count, setCount] = useState<number>(1);
    

    const body=(
        <div className='grid grid-cols-12 gap-8 custom:gap-0'>
            <div className='col-span-12 custom:col-span-5 order-1 custom:order-1'>
                <Image
                    src={"https://preetheme.com/html/fruits/assets/img/cate/4.jpg"}
                    alt="" 
                    width={300}
                    height={300}
                    className='mx-auto custom:mx-0 rounded-lg'
                />
            </div>

            <div className='col-span-12 custom:col-span-7 order-2 custom:order-2'>
                <h2 className='text-black text-[24px] leading-7'>Tomato</h2>

                {/* price container */}
                <p className="text-[18px] leading-6 my-2 font-semibold text-primary">
                    $120
                    <sub className="text-[12px] font-medium text-red-600 line-through"> $100</sub>
                </p>

                {/* product details */}
                <p>
                    Most fresh vegetables are low in calories and have a water content 
                    in excess of 70 percent, with only about 3.5 percent protein and less 
                    than 1 percent fat. ... The root vegetables include beets, carrots, 
                    radishes, sweet potatoes, and turnips. Stem vegetables include asparagus and kohlrabi...
                </p>

                {/* product stock count */}
                <p className="text-[#929394] text-sm py-2"> 120 pc</p>

                {/* product count container */}
                <div className='flex items-center gap-6'>
                    <div className='border border-[#929394] rounded-md w-[120px] px-2 h-[42px] flex items-center justify-between'>
                        <button disabled={count === 1} onClick={()=>setCount(count - 1)}  > <Minus color='#929394' /> </button>
                        <button className='text-[16px] font-medium text-[#929394]'>{count}</button>
                        <button onClick={()=>setCount(count + 1)}> <Plus color='#929394' /> </button>
                    </div>
                    <Button
                        icon={<LiaCartPlusSolid color='white' size={20} />}
                        style={{
                            background: "#10b981",
                            height: 42,
                            width: 120,
                            border: "none",
                            outline: "none",
                            boxShadow: "none",
                            color: "white"
                        }}
                    >
                        Add to Cart
                    </Button>
                </div>

                {/* product details more link */}
                <div className='w-full flex items-end justify-end mt-3 text-orange-500'>
                    <Link href={"/product-details/2"} className='hover:text-third'>
                        <button>More info</button>
                    </Link>
                </div>
            </div>
        </div>
    )

    return (
        <React.Fragment>
            <Modal
                body={body}
                open={open}
                setOpen={setOpen}
                width={900}
            />
        </React.Fragment>
    )
}

export default ProductDetails