import React, { useContext, useState } from 'react';
import { TrashIcon } from '@heroicons/react/24/solid'
import { toast } from 'react-hot-toast';
import { userAuth } from '../../contextProvider/ContextProvider';


const ViewCardDetails = ({ crd, refetch }) => {
    const { _id, imageThird, productName, price, paid, quantity: qnty } = crd
    const { user } = useContext(userAuth)
    const [prices, setPrice] = useState(price)
    const [totalPrice, setTotalPrice] = useState(price)
    const [quantity, setQuantity] = useState(qnty)


    const handeldecriment = (e) => {
        setQuantity(quantity - 1)
        if (quantity > 0) {
            setPrice((quantity - 1) * price)

        }
    }
    const handelincriment = () => {
        setQuantity(quantity + 1)
        setPrice((quantity + 1) * price)
    }
    const handelbuy = (user, product, prices, quantity) => {
        const buy = {
            buyId: product._id,
            customerEmail: user?.email,
            phoneNumber: user?.phoneNumber,
            prices,
            productName: product.productName,
            quantity,
            customerPhone: user?.phoneNumber
        }
        console.log(buy)
        fetch('https://simple-ecom-server.vercel.app/paid', {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(buy)
        }).then(res => res.json()).then(data => {
            if (data.acknowledged) {
                toast.success('paid successfully')
                refetch()
            }
        })
    }
    const hadelCartDelete = (user, id) => {

        const fidner = { phoneNumber: user?.phoneNumber }
        const yes = window.confirm('are your sure datele ?')
        if (yes) {
            fetch(`https://simple-ecom-server.vercel.app/card/${id}`, {
                method: "DELETE",
                headers: { "content-type": "application/json" },
                body: JSON.stringify(fidner)
            }).then(res => res.json()).then(data => {
                if (data.deletedCount > 0) {
                    toast.success('delete successfully')
                    refetch()
                }
            })
        }
    }

    return (
        <div className='flex justify-between items-center gap-2 mb-4 border  border-light rounded-2xl p-3'>
            <div>
                <img className='md:w-24 md:h-24 w-10 h-10 rounded-2xl' src={imageThird} alt="" />
            </div>
            <div>
                <p>Product Name:</p>
                <p>Price: ${prices}</p>
            </div>
            <div className='flex-col justify-center'>
                <div>
                    <p className='ml-3 mb-3'>Quantity</p>
                </div>
                <div className='flex gap-3'>
                    <button onClick={handeldecriment} className='btn border-none bg-pink-400 btn-sm'>-</button>
                    <p>{quantity}</p>
                    <button onClick={handelincriment} className='btn border-none bg-pink-400 btn-sm'>+</button>
                </div>
            </div>
            <div>
                <div>
                    <button onClick={() => handelbuy(user, crd, prices, quantity)} className='btn mr-[20px] mb-3 btn-success btn-sm'>{paid ? "paid" : "pay"}</button>
                </div>
                <div>
                    <button onClick={() => hadelCartDelete(user, _id)}><TrashIcon className="h-6 w-6 ml-4 text-red-500" /> </button>
                </div>
            </div>
        </div>
    );
};

export default ViewCardDetails;