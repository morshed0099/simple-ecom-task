import React from 'react';

const AllOrderTable = ({ product }) => {
    const { customerEmail, prices, quantity, productName } = product
    return (
        <>
            <tr>
                <td>{productName}</td>
                <td>{customerEmail}</td>
                <td>{quantity}</td>
                <td>{prices}</td>
            </tr>
        </>
    );
};

export default AllOrderTable;