import React from 'react';
import Footer from '@/components/shared/Footer';
import Navbar from '@/components/shared/Navbar';

const layout = ({children}: {children: React.ReactNode}) => {
    return (
        <div>
            <Navbar/>
            <div>
                {children}
            </div>
            <Footer/>
        </div>
    )
}

export default layout