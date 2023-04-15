import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Card from '../../Component/Card';

const WomenProduct = () => {
    const { data: womenProduct = [], refetch } = useQuery({
        queryKey: ['womenProduct'],
        queryFn: async () => {
            const res = await fetch(`https://simple-ecom-server.vercel.app/product/kids`)
            const data = await res.json()
            return data
        }
    })
    
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4'>
            {
                womenProduct.map(product => <Card
                    product={product}
                    key={product._id}
                ></Card>)
            }
        </div>
    );
};


export default WomenProduct;