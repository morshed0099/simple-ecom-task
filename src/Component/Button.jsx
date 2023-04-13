import React from 'react';

const Button = ({ name, desgin }) => {

    return (
        <div>
            <button className={`btn bg-pink-600 border-none hover:bg-pink-800 ${desgin}`}>{name}</button>
        </div>
    );
};

export default Button;