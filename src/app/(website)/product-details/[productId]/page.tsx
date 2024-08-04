import React from 'react'
import DetailsClient from '../DetailsClient'

const page = ({ params: {productId}}: {params: {productId: string}}) => {
    return (
        <React.Fragment>
            <DetailsClient productId={productId} />
        </React.Fragment>
    )
}

export default page