import React from 'react';

import AllcutomerTable from './AllcutomerTable';
import { useQuery } from '@tanstack/react-query';



const AllCustomers = () => {

    const { data: customers = [], refetch, isLoading } = useQuery({
        queryKey: ['customers'],
        queryFn: async () => {
            const res = await fetch('http://localhost:3000/allusers')
            const data = await res.json()
            return data
        }
    })
    console.log(customers);

    return (
        <div className='mx-8 max-w-[1000px]'>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">

                    <thead>
                        <tr>

                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone Number</th>
                        </tr>
                    </thead>
                    <tbody>


                        {
                            customers.map(customer => <AllcutomerTable
                                key={customer._id}
                                customer={customer}
                            ></AllcutomerTable>
                            )
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllCustomers;