import React, { useContext, useState } from 'react';

import ViewCardDetails from './ViewCardDetails';
import { userAuth } from '../../contextProvider/ContextProvider';
import useCardView from '../../Hooks/useCardView';


const ViewCart = () => {
    const { user } = useContext(userAuth)
    const [card, refetch] = useCardView(user?.email)
    refetch()
    return (
        <div className=' p-4 max-w-[1000px] mx-auto'>
            {
                card.map((crt, index) => <ViewCardDetails
                    key={crt._id}
                    crt={crt}
                ></ViewCardDetails>)

            }
        </div>
    );
};
export default ViewCart;