import { useQuery } from '@tanstack/react-query';
import React from 'react';

const useCardView = (phoneNumber) => {   
    const { data: card = [], refetch } = useQuery({
        queryKey: ['card'],
        queryFn: async () => {
            const res = await fetch(`https://ecom-repliq-server-morshed0099.vercel.app/viewcart/${phoneNumber}`)
            const data = await res.json()
            return data;
        }
    })    
    return[card,refetch]
};

export default useCardView;