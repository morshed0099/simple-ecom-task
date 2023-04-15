import React, { useState } from 'react';
import { toast } from 'react-hot-toast';

import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'


const AddCutomer = () => {
    const hadeluser = (e) => {
        e.preventDefault()
        const from = e.target;
        const userName = from.userName.value;
        const email = from.email.value;
        const phoneNumber = from.phone.value;
        const password = from.password.value;
        const userRoll = 'customer';
              
        const user = {
            userName,
            email,
            phoneNumber,
            password,
            userRoll
        }
        fetch('https://simple-ecom-server.vercel.app/user', {
            method: 'POST',
            headers: { "content-type": "application/json" },
            body: JSON.stringify(user)
        }).then(res => res.json())
            .then(data =>{
                if (data.acknowledged) {
                    toast.success('Succesfully signup')
                    from.reset()              
                } else {
                    toast.error(data.message)                   
                }
            })
    }

    return (
        <div className='w-96 mx-auto border border-light rounded-2xl p-4 my-4'>
            <form onSubmit={(e)=>hadeluser(e)}>

                <div className='mb-2'>
                    <h2 className='text-3xl font-bold text-center'>Add Customer</h2>
                </div>
                <div className='mb-2'>
                    <lebel>Name</lebel>
                </div>
                <div className='mb-2'>
                    <input required name='userName' type="text" placeholder='enter your name' className='input input-bordered w-full' />
                </div>
                <div className='mb-2'>
                    <lebel>Email</lebel>
                </div>
                <div className='mb-2'>
                    <input required name="email" type="email" placeholder='enter your email' className='input input-bordered w-full' />
                </div>
                <div className='mb-2'>
                    <lebel>Phone Number</lebel>
                </div>

                <PhoneInput
                    country={'bd'}
                    inputProps={{
                        name: 'phone',
                        required: true,
                        autoFocus: true,
                        placeholder: '1991394353',

                    }}
                />
                <div className='mb-2'>
                    <lebel>Password</lebel>
                </div>
                <div className='mb-2'>
                    <input required name="password" type="password" className='input input-bordered w-full' />
                </div>

                <div className='mb-2'>
                    <button  className='btn bg-pink-600 hover:bg-pink-800 border-none w-full'>
                        Save
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddCutomer;