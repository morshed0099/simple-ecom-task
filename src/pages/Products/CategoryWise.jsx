import React from 'react';
import Card from '../../Component/Card';
import SliderProduct from '../../Component/SliderProduct';

const CategoryWise = ({category }) => {
 
    return (
        <div>

            <SliderProduct
                sliderItems=
                  {  category.map(catgry => <Card
                        product={catgry}
                        key={catgry._id}
                    ></Card>)}
                   
            />

        </div >
    );
};

export default CategoryWise;