"user client";
import React, { useState } from 'react';
import {Drawer,} from "antd";
import { FaBagShopping } from "react-icons/fa6";
import { MdClose } from 'react-icons/md';
import { BsTrash } from 'react-icons/bs';
import Image from 'next/image';
import { Minus, Plus } from 'lucide-react';

interface ICartDrawerProps{
    open: boolean;
    setOpen: (open: boolean)=> void;
}

const CartDrawer: React.FC<ICartDrawerProps> = ({open, setOpen}) => {
    const [quantity, setQuantity] = useState<number>(1)
    return (
        <Drawer
            title={false}
            placement={"right"}
            closable={false}
            onClose={()=>setOpen(false)}
            open={open}
            width={400} 
            bodyStyle={{padding:0, margin: 0}} 
        >
            <div className='flex flex-col h-full '>

                {/* heading of cart */}
                <div className='bg-[#EFEEF6] flex items-center justify-between px-3 py-4'>
                    <div className='flex items-center gap-1'>
                        <FaBagShopping size={24} color='#10b981' />
                        <p className='text-[16px] leading-5 text-primary font-semibold'>Shopping  Cart</p>
                    </div>
                    {/* close icon */}
                    <MdClose size={18} className='cursor-pointer' onClick={()=>setOpen(false)} />
                </div>
                
                {/* body */}
                <div className='flex-1 p-3 h-full overflow-y-auto'>
                    {
                        [...Array(5)]?.map((item, index)=>{
                            return(
                                <div className='flex items-center gap-4 mb-3' key={index}>

                                    {/* product image */}
                                    <Image
                                        src={"https://preetheme.com/html/fruits/assets/img/cate/4.jpg"}
                                        alt='cart-product photo'
                                        width={80}
                                        height={80}
                                        className='border border-secondary border-opacity-[20%] p-2 rounded-full'
                                    />

                                    {/* product details start */}
                                    <div className='w-full'>
                                        <h2 className='text-black text-[16px] leading-6'>Tomato</h2>
                                        <p className='text-black text-[12px]'>Item Price $12</p>

                                        <div className='w-full flex items-center justify-between mt-2'>
                                            <p className='text-[16px] leading-6 font-semibold'>$ 12</p>
                                            {/* cart increase, decrease & remove container start */}
                                            <div className='w-[100px] rounded-md border border-secondary border-opacity-[40%] py-1 flex items-center justify-between px-2'>
                                                <button disabled={quantity === 1} onClick={()=>setQuantity(quantity - 1)}><Minus color='#555555' size={18} /></button>
                                                <button>{quantity}</button>
                                                <button onClick={()=>setQuantity( quantity + 1 )} ><Plus color='#555555' size={18} /></button>
                                            </div>
                                            {/* cart item remove button*/}
                                            <div className='bg-[#ef444433] w-[30px] h-[30px] flex items-center justify-center rounded-full'>
                                                <BsTrash size={14} style={{color : "red"}}/>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                
                {/* footer */}
                <div className="p-3">
                    <button className='p-2 w-full rounded-md bg-primary hover:bg-[#059669] transition-all duration-150 flex items-center justify-between'>
                        <span className='text-white'>Proceed To Checkout</span>
                        <span className='bg-white rounded-md px-2 py-1'>$ 12</span>
                    </button>
                </div>

            </div>
        </Drawer>
    )
}

export default CartDrawer