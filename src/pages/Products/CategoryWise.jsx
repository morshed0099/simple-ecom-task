import React from 'react';

import Card from '../../Component/Card';
import SliderProduct from '../../Component/SliderProduct';

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