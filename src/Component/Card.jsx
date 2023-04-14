import React, { useContext } from 'react';
import { HeartIcon, StarIcon } from '@heroicons/react/24/solid'
import Button from './Button';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { userAuth } from '../contextProvider/ContextProvider';
import { useState } from 'react';
import useCardView from '../Hooks/useCardView';
import Login from '../pages/Login';


const Card = ({ product }) => {
    console.log(product);
    const { user, setLoader } = useContext(userAuth)
    const [activeCard, setActiveCard] = useState(false)
    const [card, refetch] = useCardView(user?.phoneNumber)
    const { _id, productName, price, oldPrice,
        description, imgaeOne, imageTwo, imageThird  } = product;
    const nagitage = useNavigate()

    const hadenlAddtoCart = (product) => {
        if (!user?.phoneNumber) {
            return toast.error('please login first');
        }
        setActiveCard(true)
        const cartProduct = {
            cartId: product._id,
            phoneNumber: user?.phoneNumber,
            price: product.price,
            oldPrice: product.oldPrice,
            imgaeOne: product.product,
            imageTwo: product.product,
            imageThird: product.imageThird,
            productName: product.productName,
            description: product.description,
            quantity: 1
        }

        fetch('http://localhost:5000/addtocard', {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(cartProduct)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('added to cart')
                    refetch()
                } else {
                    toast.error(data?.message);
                }
            });
    }

    return (
        <div className='p-4 m-3 border border-light rounded-2xl shadow-2xl'>
           
            <div className='flex justify-between items-center mb-2'>
                <Button desgin={'btn-sm'} name={'Shop Now'}></Button>
                <button onClick={() => hadenlAddtoCart(product)}> <HeartIcon className={`h-6 w-6 text-gray-400 hover:text-yellow-500 ${activeCard ? "text-yellow-400" : ""} `} /></button>

            </div>
            <div className='overflow-hidden p-3 mb-2'>
                <img className=' w-full h-[300px] hover:scale-125 duration-1000 ease-out ' src={imgaeOne} alt="" />
            </div>
            <div className='flex justify-between '>
                <div>
                    <p className='text-3xl font-xl text-pink-800 '>${price}</p>
                    <p className='text-3xl font-xl line-through'>${oldPrice}</p>
                </div>
                <div>
                    <div className='flex'>
                        <span> <StarIcon className="h-6 w-6  text-yellow-500" /></span>
                        <span> <StarIcon className="h-6 w-6  text-yellow-500" /></span>
                        <span> <StarIcon className="h-6 w-6  text-yellow-500" /></span>
                        <span> <StarIcon className="h-6 w-6  text-yellow-500" /></span>
                    </div>
                    <div>
                        <Link to={`/productdetails/${_id}`}><button className='btn mt-3 btn-sm bg-transparent border border-yellow-600 text-black hover:text-yellow-700'>Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;