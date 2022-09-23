import React from 'react'
import Pagination from './Pagination';
import Product from './Product';



function ProductList({ Products }) {
    return(
        <div className="md:grid grid-cols-3 gap-2 space-y-2 mt-8">
            {Products.map(function (item) {
                return (
                    <Product key={item.title}{...item} />

                );
            })}
            <div className="flex bg-red-500 item-center m-3">
            <Pagination/>
            </div>
         
        </div>
    );


}
export default ProductList;