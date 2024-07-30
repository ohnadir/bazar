
import React from 'react';
// import banner from "@/assets";

const AuthLayout  = ({children}: {children : React.ReactNode}) => {
    return (
        <div 
            className='flex items-center justify-center'
            style={{
                width: "100%",
                height: "100vh",
                backgroundImage: `url('/banner.png')`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover"
            }}
        >
            <div className='bg-white w-[500px] h-fit rounded-lg bg-opacity-[80%] p-4'>
                {children}
            </div>
        </div>
    )
}

export default AuthLayout;