import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Card from '../../Component/Card';

const MenProducs = () => {
     const {data:menProduct=[],refetch}=useQuery({
        queryKey:['menProduct'],
        queryFn:async()=>{
            const res=await fetch(`https://simple-ecom-server.vercel.app/product/men`)
            const data=await res.json()
            return data
        }
     })
     console.log(menProduct ,);
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4'>
           {
            menProduct.map(product=><Card
              product={product}
              key={product._id}
            ></Card>)
           }
        </div>
    );
};

export default MenProducs;