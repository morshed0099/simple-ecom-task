import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Card from '../../Component/Card';



const Produncts = () => {
    
    const {data:products=[],refetch,isLoading}=useQuery({
        queryKey:['products'],
        queryFn:async()=>{
          const res=await fetch('https://ecom-repliq-server-morshed0099.vercel.app/product')
          const data=await res.json()
          return data
        }      
      })
    return (
        <div>
            {
                products.map(product=><Card
                product={product}
                key={product._id}
                ></Card>)
            }            
        </div>
    );
};

export default Produncts;