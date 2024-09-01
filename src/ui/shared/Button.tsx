<<<<<<< HEAD
import React from 'react';
import { SyncOutlined } from '@ant-design/icons';
=======
import React from 'react'

>>>>>>> f5142b8 (feat: :sparkles: implete redux rtk and stripe)
interface IButtonProps{
    label: string;
    style: string;
    type: "submit" | "button" | "reset" | undefined;
<<<<<<< HEAD
    loading?: boolean;
}

const Button: React.FC<IButtonProps> = ({label, style, type, loading}) => {
=======
}

const Button: React.FC<IButtonProps> = ({label, style, type}) => {
>>>>>>> f5142b8 (feat: :sparkles: implete redux rtk and stripe)
    return (
        <button
            type={type} 
            className={`
                ${style}
<<<<<<< HEAD
                border-none outline-none shadow-none h-12 text-[17px] leading-6 flex items-center justify-center
            `}  
        >
            {
                loading
                ?
                <div className="flex items-center gap-2">
                    <SyncOutlined spin />
                    <p className="text-[15px]">Loading...</p>
                </div>
                :
                label
            }
=======
                border-none outline-none shadow-none h-12 text-[17px] leading-6
            `}  
        >
            {label}
>>>>>>> f5142b8 (feat: :sparkles: implete redux rtk and stripe)
        </button>
    )
}

export default Button