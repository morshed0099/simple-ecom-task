import { useQuery } from '@tanstack/react-query';


const useCardView = (phoneNumber) => {    
    const { data: card = [], refetch } = useQuery({
        queryKey: ['card'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/myaddtocard/${phoneNumber}`)
            const data = await res.json()
            return data;
        }
    })    
    return[card,refetch]
};

export default useCardView;