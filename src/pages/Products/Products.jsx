import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Card from '../../Component/Card';
import { useState } from 'react';
import SliderProduct from '../../contextProvider/SliderProduct';



const Produncts = () => {
    const [menProducts, setMenProducts] = useState([]);
    const [womenProducts, setWomenProducts] = useState([])
    const [kidsProducts, setKidSproducs] = useState([])

    const { data: products = [], refetch, isLoading } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch('https://ecom-repliq-server-morshed0099.vercel.app/product')
            const data = await res.json()
            return data
        }
    })
    return (
        <div>
            <div>
                <SliderProduct 
                 sliderItems=
                    {
                        products.map(product => <Card
                            product={product}
                            key={product._id}
                        ></Card>)
                    }                 
                >                   
                </SliderProduct>
            </div>
        </div>
    );
};

export default Produncts;