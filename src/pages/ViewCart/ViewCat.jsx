import React, { useContext} from 'react';

import ViewCardDetails from './ViewCardDetails';
import { userAuth } from '../../contextProvider/ContextProvider';
import useCardView from '../../Hooks/useCardView';
import { useQuery } from '@tanstack/react-query';
import { RiseLoader } from 'react-spinners';


const ViewCart = () => {
    
    const { user } = useContext(userAuth)
    const [card, refetch, isLoading, isError, error] = useCardView(user)
    const { data: products = [] } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            await refetch();
            const res = await fetch('https://simple-ecom-server.vercel.app/products')
            const data = await res.json()
            refetch();
            return data
        }
    })

    if(card.length === 0){
        refetch();
    }

    if (isLoading) {
        refetch()
        return <div className='flex justify-center items-center'><RiseLoader color='green'  /></div>
    }
    if (isError) {
        refetch();
        return <div className='flex justify-center items-center'><RiseLoader color='green'  /></div>
    }
    if (error) {
        refetch();
        return <div className='flex justify-center items-center'><RiseLoader color='green'  /></div>
    }

    return (
        <div className=' p-4 max-w-[1000px] mx-auto'>
            {

            }
            {card.length > 0 ?
                card.map((crd, index) => <ViewCardDetails
                    key={crd._id}
                    crd={crd}
                    refetch={refetch}
                ></ViewCardDetails>) : <h1 className='text-pink-800 text-center mt-10 mb-10 text-4xl font-bold'>No Item selectd!</h1>

            }
        </div>
    );
};
export default ViewCart;