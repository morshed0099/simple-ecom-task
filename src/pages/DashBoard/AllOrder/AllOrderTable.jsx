import React from 'react';

const AllOrderTable = ({ product }) => {
    console.log(product);
    const { phoneNumber, prices, quantity, productName } = product
    return (
        <>
            <tr>
                <td>{productName}</td>
                <td>{phoneNumber}</td>
                <td>{quantity}</td>
                <td>{prices}</td>
            </tr>
        </>
    );
};

export default AllOrderTable;