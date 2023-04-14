import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Card from '../../Component/Card';

const KidsProducts = () => {
    const { data: kidsProduct = [], refetch } = useQuery({
        queryKey: ['kidsProduct'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/product/kids`)
            const data = await res.json()
            return data
        }
    })
    
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4'>
            {
                kidsProduct.map(product => <Card
                    product={product}
                    key={product._id}
                ></Card>)
            }
        </div>
    );
};



export default KidsProducts;