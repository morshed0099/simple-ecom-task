import React from 'react';
import Button from '../../Component/Button';
import SliderProduct from '../../contextProvider/SliderProduct';
import Card from '../../Component/Card';

const CategoryWise = ({product}) => {
    return (
        <div>    
            <SliderProduct
                sliderItems=
                {
                    product.map(product => <Card
                        product={product}
                        key={product._id}
                    ></Card>)
                }
            >
            </SliderProduct>

        </div>
    );
};

export default CategoryWise;