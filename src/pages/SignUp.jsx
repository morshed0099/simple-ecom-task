import React from 'react';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import PhoneInput from 'react-phone-input-2';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
    const [loader, setLoader] = useState(false)
    const navigate = useNavigate()

    const handelSingup = (e) => {
        setLoader(true)
        e.preventDefault()
        const form = e.target
        const userName = form.userName.value;
        const email = form.email.value;
        const phoneNumber = form.phone.value;
        const password = form.password.value;

        const user = {
            userName,
            email,
            phoneNumber,
            password,
            userRoll: "customer"
        }
        fetch('https://simple-ecom-server.vercel.app/user', {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(user),
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Succesfully signup')
                    form.reset()
                    setLoader(false)
                    navigate('/login')
                } else {
                    toast.error(data.message)
                    setLoader(false)
                }
            })

    }
    return (
        <div className='w-96 bg-white mx-auto border placeholder-black border-black rounded-2xl p-6 my-6'>
            <form onSubmit={handelSingup}>

                <div className='mb-2'>
                    <h2 className='text-3xl font-bold text-center'>SignUp Form</h2>
                </div>
                <div className='mb-2'>
                    <lebel >Name</lebel>
                </div>
                <div className='mb-2'>
                    <input name='userName' type="text" placeholder='Enter Your Name' className='input placeholder-gray-500 bg-white text-black input-bordered w-full' />
                </div>
                <div className='mb-2'>
                    <lebel>Email</lebel>
                </div>
                <div className='mb-2'>
                    <input name="email" type="email" placeholder='Enter Your Email' className='input placeholder-gray-500 bg-white text-black input-bordered w-full' />
                </div>
                <div className='mb-2'>
                    <lebel>Phone Number</lebel>
                </div>

                <PhoneInput
                    inputStyle={{ color: "black" }}
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
                    <input name="password" type="password" className='input bg-white text-black input-bordered w-full' />
                </div>
                <div>
                    <p>You have an Alredy Accaunt ? <Link to='/login'><span className='font-bold text-green-800'>Login</span></Link></p>
                </div>
                <div className='mb-2'>
                    <button className='btn bg-pink-600 hover:bg-pink-800 border-none w-full'>
                        {
                            loader ? "please wait" : "SignUp"
                        }
                    </button>
                </div>
            </form>
        </div>
    );
};

export default SignUp;