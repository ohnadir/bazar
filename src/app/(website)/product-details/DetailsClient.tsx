import React from 'react'

interface IDetailsProps{
    productId: string;
}

const DetailsClient: React.FC<IDetailsProps> = ({productId}) => {
    return (
        <div>DetailsClient {productId}</div>
    )
}

export default DetailsClient