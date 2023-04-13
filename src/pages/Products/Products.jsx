import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Button from '../../Component/Button';
import CategoryWise from './CategoryWise';



const Produncts = () => {
    const { data: products = [], refetch, isLoading } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/products')
            const data = await res.json()
            return data
        }
    })
    const menProducts = products.filter(product => product.category_name === 'men')
    const womenProducts = products.filter(product => product.category_name === 'women')
    const kidsProducts = products.filter(product => product.category_name === 'women')
    console.log(menProducts);
    return (
        <div className='max-w-[1200px] mx-auto'>
            <div className='flex items-center justify-between'>
                <div>
                    <h1 className='text-4xl text-center font-bold mt-4 mb-2'>
                        Men Products
                    </h1>
                </div>
                <div>
                    <Button desgin={'btn-sm'} name={"View All"}></Button>
                </div>
            </div>
            <CategoryWise product={menProducts} />
            <div className='max-w-[1200px] mx-auto'>
                <div className='flex items-center justify-between'>
                    <div>
                        <h1 className='text-4xl text-center font-bold mt-4 mb-2'>
                            Women Products
                        </h1>
                    </div>
                    <div>
                        <Button desgin={'btn-sm'} name={"View All"}></Button>
                    </div>
                </div>
                <CategoryWise product={womenProducts} />

            </div>
            <div className='max-w-[1200px] mx-auto'>
                <div className='flex items-center justify-between'>
                    <div>
                        <h1 className='text-4xl text-center font-bold mt-4 mb-2'>
                            Kids Products
                        </h1>
                    </div>
                    <div>
                        <Button desgin={'btn-sm'} name={"View All"}></Button>
                    </div>
                </div>
                <CategoryWise product={kidsProducts} />

            </div>


        </div>
    );
};

export default Produncts;