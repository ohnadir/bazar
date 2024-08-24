import React from 'react';
import Footer from '@/ui/shared/Footer';
import Navbar from '@/ui/shared/Navbar';
import SubHeader from '@/ui/shared/SubHeader';

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