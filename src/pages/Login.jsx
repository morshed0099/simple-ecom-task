import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { userAuth } from '../contextProvider/ContextProvider';
import { useState } from 'react';


const Login = () => {
    const [loader, setLoader] = useState(false)
    const { setUser } = useContext(userAuth)
    let navigate = useNavigate();
    const location = useLocation()
    const form = location.state?.form?.pathname || '/'

    const hadelLogin = (e) => {
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
        fetch('http://localhost:5000/login', {
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
                }
                if (data.message) {
                    toast.error(data.message)
                    setLoader(false)
                }

            })
    }
    const getToken = (token) => {
        localStorage.setItem('token', token)
        navigate(form, { replace: true });
    }
    return (

        <div className='w-96 mx-auto my-6 border p-4 dark:bg-gray-900 bg-white border-gray-900 dark:border-white rounded-2xl'>
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
                            loader ? "please wait.." : "Login"
                        }
                    </button>
                </div>
            </form>
        </div>

    );
};

export default Login;