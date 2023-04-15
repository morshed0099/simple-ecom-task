import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useState } from 'react';
import { toast } from 'react-hot-toast';

const AddpRroduct = () => {
    const [loader, setLoader] = useState(false)
    const [file, setFile] = useState();
    const [file1, setFile1] = useState();
    const [file2, setFile2] = useState();
    const [selectCatgory, setSelectCatgoey] = useState([])


    // input image show 
    const handleChange = (e) => {
        setFile(URL.createObjectURL(e.target.files[0]));
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
    const handleChange1 = (e) => {

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
                setFile1(photoURL);

            })
    }
    const handleChange2 = (e) => {
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
                setFile2(photoURL);

            })
    }
    

    // add category fetch 

    const { data: category = [], isLoading, refetch } = useQuery({
        queryKey: ['category'],
        queryFn: async () => {
            const res = await fetch('https://simple-ecom-server.vercel.app/category')
            const data = await res.json()
            return data
        }
    })

    const hadelCategory = (e) => {
        e.preventDefault()
        setSelectCatgoey(e.target.value)
        console.log(e.target.value)


    }

    // add product fetch 
    const handelProductSave = (e) => {
        setLoader(true)
        e.preventDefault()
        const form = e.target
        const productName = form.ProductName.value;
        const price = form.price.value;
        const oldPrice = form.oldPrice.value;
        const description = form.description.value;
        const imgaeOne = file
        const imageTwo = file1
        const imageThird = file2

        const product = {
            productName,
            price,
            oldPrice,
            imgaeOne,
            imageTwo,
            imageThird,
            description,
            category_name:selectCatgory
        }

        fetch('https://simple-ecom-server.vercel.app/product', {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(product)
        }).then(res => res.json()).then(data => {
            if (data.acknowledged) {
                toast.success('product inset succesfully')
                form.reset()
                setLoader(false)

            }
        })





    }
    refetch()
    return (
        <div className='md:mx-8 max-w-[1000px] mx-4 border border-light rounded-2xl p-4'>
            <h2 className='text-3xl font-bold text-center py-4'>Add Product</h2>
            <form onSubmit={handelProductSave}>
                <div className='mb-2'>
                    <lebel>Product Name</lebel>
                </div>
                <div className='mb-2'>
                    <input type="text" required name='ProductName' placeholder='Product Name' className='input input-bordered w-full' />
                </div>
                <div className='mb-2'>
                    <lebel>Product Images</lebel>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    <div>
                        <div className='mb-2 flex-col  lg:flex lg:gap-3 '>
                            <input required name='images1' onChange={handleChange} type="file" placeholder='Product Name' className=' w-full file-input-bordered' />
                            <img alt='' className='w-[100px] h-[100px]' src={file} />
                        </div>
                    </div>
                    <div>
                        <div className='mb-2 flex-col  lg:flex lg:gap-3 '>
                            <input required name='images2' onChange={handleChange1} type="file" placeholder='Product Name' className=' w-full' />
                            <img alt='' className='w-[100px] h-[100px]' src={file1} />
                        </div>
                    </div>
                    <div>
                        <div className='mb-2 flex-col  lg:flex lg:gap-3 '>
                            <input required name='images3' onChange={handleChange2} type="file" placeholder='Product Name' className=' w-full' />
                            <img alt='' className='w-[100px] h-[100px]' src={file2} />
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <select onChange={(e) => hadelCategory(e)} className="w-full my-4 px-4 rounded-2xl py-4">
                            <option disabled selected>Select Category Name</option>
                            {
                                category.map(cat => <option className='text-black' value={cat.category_name}>{cat.category_name}</option>)
                            }

                        </select>
                    </div>

                </div>
                <div className='mb-2'>
                    <label>Price</label>
                </div>
                <div className='mb-2'>
                    <input required name='price' type="number" className='input input-bordered w-full' />
                </div>
                <div className='mb-2'>
                    <label>Old Price</label>
                </div>
                <div className='mb-2'>
                    <input required name='oldPrice' type="number" className='input input-bordered w-full' />
                </div>
                <div className='mb-2'>
                    <lebel>Description</lebel>
                </div>
                <div className='mb-2'>
                    <textarea required name='description' className='w-full textarea textarea-bordered' rows="4"></textarea>
                </div>
                <div>
                    <button className='btn bg-pink-600 hover:bg-pink-800 border-none w-full'>{loader ? "please wait" : "Save"}</button>
                </div>
            </form>
        </div>
    );
};

export default AddpRroduct;