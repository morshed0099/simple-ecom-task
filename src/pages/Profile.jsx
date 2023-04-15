import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import PhoneInput from 'react-phone-input-2';
import { userAuth } from '../contextProvider/ContextProvider';
import { useQuery } from '@tanstack/react-query';

const Profile = () => {
    const { user } = useContext(userAuth)
    const [file, setFile] = useState();

    const { data: profile = [], refetch } = useQuery({
        queryKey: ['profile'],
        queryFn: async () => {
            const res = await fetch(`https://simple-ecom-server.vercel.app/user/${user?.phoneNumber}`)
            const data = await res.json()
            return data;
        }

    })

    // input image show 
    const handleChange = (e) => {
        const image = e.target.files[0]
        const formData = new FormData()
        formData.append('image', image);
        console.log(formData, '34 line')
        const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_KEY}`
        fetch(url, {
            method: "POST",
            body: formData,
        }).then(res => res.json())
            .then(data => {
                const photoURL = data.data.display_url
                setFile(photoURL);

            })
    }

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
            userRoll,
            image: file
        }
        fetch('https://simple-ecom-server.vercel.app/update', {
            method: 'PATCH',
            headers: { "content-type": "application/json" },
            body: JSON.stringify(user)
        }).then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Succesfully signup')
                    from.reset()
                } else {
                    toast.error(data.message)
                }
            })
    }

    return (<div className='w-96 mx-auto border border-light rounded-2xl p-4 my-4'>
        <form onSubmit={(e) => hadeluser(e)}>

            <div className='mb-2'>
                <h2 className='text-3xl font-bold text-center'>update profile not completeing for time dead line //</h2>
            </div>
            <div className='mb-2'>
                <lebel>Name</lebel>
            </div>
            <div className='mb-2'>
                <input defaultValue={profile.userName} required name='userName' type="text" placeholder='enter your name' className='input input-bordered w-full' />
            </div>
            <div className='mb-2'>
                <lebel>Email</lebel>
            </div>
            <div className='mb-2'>
                <input defaultValue={profile.email} required name="email" type="email" placeholder='enter your email' className='input input-bordered w-full' />
            </div>
            <div className='mb-2'>
                <lebel>Phone Number</lebel>
            </div>

            <PhoneInput

                defaultValue={profile.phoneNumber}
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
                <input name="image" onChange={handleChange} handleChange defaultValue={profile.password} required  className='input input-bordered w-full' />
            </div>
            <div className='mb-2'>
                <lebel>Images</lebel>
            </div>
            <div className='mb-2'>
                <input required name="password" type="file" className='input input-bordered w-full' />
            </div>

            <div className='mb-2'>
                <button className='btn bg-pink-600 hover:bg-pink-800 border-none w-full'>
                    Save
                </button>
            </div>
        </form>
    </div>);
};

export default Profile;