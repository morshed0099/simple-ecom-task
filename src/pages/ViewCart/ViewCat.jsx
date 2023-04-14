import React, { useContext, useState } from 'react';

import ViewCardDetails from './ViewCardDetails';
import { userAuth } from '../../contextProvider/ContextProvider';
import useCardView from '../../Hooks/useCardView';


const ViewCart = () => {
    const { user } = useContext(userAuth)
    const [card, refetch] = useCardView(user?.phoneNumber)

    if (!user) {
        refetch()
    } else {
        refetch()
    }
    return (
        <div className=' p-4 max-w-[1000px] mx-auto'>
            {

            }
            {card.length > 0 ?
                card.map((crd, index) => <ViewCardDetails
                    key={crd._id}
                    crd={crd}
                ></ViewCardDetails>) : <h1 className='text-pink-800 text-center mt-10 mb-10 text-4xl font-bold'>No Item selectd!</h1>

            }
        </div>
    );
};
export default ViewCart;