import React from 'react';

const AllproductTable = ({ product }) => {
    const { productName, imgaeOne, price } = product
    return (
        <>
            <tr>
                <td>
                    <img className='h-10 w-10' src={imgaeOne} alt="" />
                </td>
                <td>{productName}</td>
                <td>{price}</td>
                <td>
                    <button className='btn btn-sm btn-success mr-3'>UPDATE</button>
                    <button className='btn btn-sm btn-success'>Delete</button>
                </td>
            </tr>
        </>
    );
};

export default AllproductTable;