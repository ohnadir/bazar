import React from 'react';
import { SyncOutlined } from '@ant-design/icons';
interface IButtonProps{
    label: string;
    style: string;
    type: "submit" | "button" | "reset" | undefined;
    loading?: boolean;
}

const Button: React.FC<IButtonProps> = ({label, style, type, loading}) => {
    return (
        <button
            type={type} 
            className={`
                ${style}
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
        </button>
    )
}

export default Button