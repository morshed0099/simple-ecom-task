import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Button from '../../Component/Button';
import CategoryWise from './CategoryWise';
import useCardView from '../../Hooks/useCardView';
import { useContext } from 'react';
import { userAuth } from '../../contextProvider/ContextProvider';
import { Link } from 'react-router-dom';


const Produncts = () => {
    const { user } = useContext(userAuth)

    const [card, refetch] = useCardView(user?.phoneNumber)
    const { data: products = [], isLoading } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/products')
            const data = await res.json()
            refetch()
            return data
        }
    })


    const menProducts = products.filter(product => product.category_name === 'men')
    const womenProducts = products.filter(product => product.category_name === 'women')
    const kidsProducts = products.filter(product => product.category_name === 'kids')


    return (
        <div className='max-w-[1200px] mx-auto'>
            <div className='flex items-center justify-between'>
                <div>
                    <h1 className='text-4xl text-center font-bold mt-4 mb-2'>
                        Men Products
                    </h1>
                </div>
                <div>
                    <Link to='/men'><Button desgin={'btn-sm'} name={"View All"} /></Link>
                </div>
            </div>
            <CategoryWise category={menProducts} />
            <div className='max-w-[1200px] mx-auto'>
                <div className='flex items-center justify-between'>
                    <div>
                        <h1 className='text-4xl text-center font-bold mt-4 mb-2'>
                            Women Products
                        </h1>
                    </div>
                    <div>
                        <Link to='/women'><Button desgin={'btn-sm'} name={"View All"} /></Link>
                    </div>
                </div>
                <CategoryWise category={womenProducts} />
            </div>
            <div className='max-w-[1200px] mx-auto'>
                <div className='flex items-center justify-between'>
                    <div>
                        <h1 className='text-4xl text-center font-bold mt-4 mb-2'>
                            Kids Products
                        </h1>
                    </div>
                    <div>
                        <Link to='/kids'><Button desgin={'btn-sm'} name={"View All"} /></Link>
                    </div>
                </div>
                <CategoryWise category={kidsProducts} />
            </div>


        </div>
    );
};

export default Produncts;