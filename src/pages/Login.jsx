import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { userAuth } from '../contextProvider/ContextProvider';
import { useState } from 'react';
import useCardView from '../Hooks/useCardView';


const Login = () => {
    const { user, loader, setLoader, setUser } = useContext(userAuth)
    const [lao, setLao] = useState(false)
    console.log(user, loader, '13')
    const isAdmin = true;
    const [card, refetch] = useCardView(user)
    let navigate = useNavigate();
    const location = useLocation()
    const form = location.state?.form?.pathname || '/'

    const hadelLogin = (e) => {
        setLao(true)
        setLoader(true)
        e.preventDefault()
        const form = e.target
        const phoneNumber = form.phone.value;
        const password = form.password.value
        console.log(phoneNumber);
        const user = {
            phoneNumber,
            password
        }
        fetch('https://simple-ecom-server.vercel.app/login', {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(user)
        }).then(res => res.json())
            .then(data => {
                if (data.user) {
                    getToken(data.token)
                    toast.success('login succesfully')
                    setLoader(false)
                    setUser(data.user);
                    refetch()
                    setLao(false)
                }
                if (data.message) {
                    toast.error(data.message)
                    setLoader(false)
                    setLao(false)

                }

            })
    }
    const getToken = (token) => {
        localStorage.setItem('token', token)
        navigate(form, { replace: true });
        setLoader(false)
    }
    return (

        <div className='w-96 mx-auto my-6 border p-6  bg-white border-gray-900  rounded-2xl'>
            <form onSubmit={hadelLogin}>
                <div className='text-3xl font-bold text-center p-4'><h1>Login Form</h1></div>
                <p>ADMIN USER: admin@hotmail.com</p>
                <p>PASS: 123456</p>
                <div className='mb-2 mt-2'>
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
                <div className='mb-2 mt-2'>
                    <lebel>password</lebel>
                </div>
                <div className='mb-2'>
                    <input name='password' type="password" className='input bg-white text-black  input-bordered w-full' />
                </div>
                <div>
                    <p>Are You New <Link to='/signup'><span className='text-green-800 font-bold'>SingUp</span></Link></p>
                </div>
                <div>
                    <button className='btn bg-pink-600 hover:bg-pink-800 border-none w-full'>
                        {
                            lao ? "please wait.." : "Login"
                        }
                    </button>
                </div>
            </form>
        </div>

    );
};

export default Login;