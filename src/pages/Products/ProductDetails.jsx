import React, { useState } from 'react';
import { StarIcon } from '@heroicons/react/24/solid';
import { useLoaderData } from 'react-router-dom';

const ProductDetails = () => {
    const product=useLoaderData()
    console.log(product);
    const {  productName, price, 
        description, imgaeOne, imageTwo, imageThird } = product;
        const [img, setImg] = useState(imgaeOne)
    const hadelImages = e => {
        console.log(e.target.src)
        setImg(e.target.src)
    }
    return (
        <div className=' max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 p-4 border border-light rounded-2xl shadow-2xl'>
            <div>
                <img className='w-[400px] h-[400px]' src={img} alt="" />
                <div onClick={hadelImages} className='flex mt-3 gap-3'>
                    <img
                        className='w-[100px] h-[100px] border border-light rounded-2xl' src={imgaeOne} alt="" />
                    <img
                        className='w-[100px] h-[100px] border border-light rounded-2xl' src={imageTwo} alt="" />
                    <img
                        className='w-[100px] h-[100px] border border-light rounded-2xl' src={imageThird} alt="" />
                </div>
            </div>

            <div>
                <div>
                    <p className='text-2xl p-3 font-bold  text-pink-500'>{productName}</p>
                </div>
                <div className='flex md:mt-4'>
                    <span> <StarIcon className='h-6 w-6 text-yellow-600'/> </span>
                    <span> <StarIcon className='h-6 w-6 text-yellow-600'/> </span>
                    <span> <StarIcon className='h-6 w-6 text-yellow-600'/> </span>
                    <span> <StarIcon className='h-6 w-6 text-yellow-600'/> </span>
                </div>
               <div className='md:mt-4 mt-2'>
                 <p className='text-3xl font-xl'>Pirce : ${price}</p>
               </div>
                <div>
                    <div className='md:mt-3 mt-2'>
                        <lebel>Select Quantity :</lebel>
                    </div>
                    <input type="number" className='input input-bordered' />
                </div>
                <div className='text-center md:mt-3 mt-2'>
                    <p><strong>Description</strong>:<span className='text-gray-600'>{description}</span></p>
                </div>
                <div className='md:mt-3 mt-2'>
                    <button className='btn bg-pink-600 hover:bg-pink-800 border-none '>Buy Now</button>
                </div>
            </div>

        </div>
    );
};

export default ProductDetails;