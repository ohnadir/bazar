import React from 'react';
import Footer from '@/components/shared/Footer';
import Navbar from '@/components/shared/Navbar';
import SubHeader from '@/components/shared/SubHeader';

const layout = ({children}: {children: React.ReactNode}) => {
    return (
        <div>
            <Navbar/>
            <SubHeader/>
            <div>
                {children}
            </div>
            <Footer/>
        </div>
    )
}

export default layout