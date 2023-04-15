import { useQuery } from '@tanstack/react-query';





const useCardView = (user) => {  
   
    const { data: card = [], refetch,error,isError,isLoading } = useQuery({
        queryKey: ['card'],
        queryFn: async () => {
            const res = await fetch(`https://simple-ecom-server.vercel.app/myaddtocard/${user?.phoneNumber}`)
            const data = await res.json()
            return data;
        }
    })
    return [card, refetch,isLoading,isError,error]
};


export default useCardView;