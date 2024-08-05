import React from 'react'

interface IDetailsProps{
    productId: string;
}

const DetailsClient: React.FC<IDetailsProps> = ({productId}) => {
    return (
        <div className='container py-10'>DetailsClient {productId}</div>
    )
}

export default DetailsClient