import Footer from '@/components/shared/Footer';
import Navbar from '@/components/shared/Navbar';
import React from 'react';

const ClientProvider = ({children}: {children: React.ReactNode}) => {
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

export default ClientProvider