import React from 'react';

const AllcutomerTable = ({customer}) => {
    const {userName,email,phoneNumber}=customer
    console.log()
    return (
        <>
            <tr>              
                <td>{userName}</td>
                <td>{email}</td>
                <td>{phoneNumber}</td>
            </tr>
        </>
    );
};

export default AllcutomerTable;