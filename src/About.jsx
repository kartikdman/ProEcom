import React from "react";
import {Link} from "react-router-dom"
import CartProduct from "./CartProduct";
import TotalCart from "./TotalCart";

function CartPage(){
    return(<div className="container mx-auto mt-1">
    <div className="flex flex-col shadow-md my-4 items-center">
      <div className="w-4/5 bg-white px-10 py-6">
        <div>
        <div className="flex justify-between p-4 bg-gray-200 rounded-lg">
          <h1 className="font-semibold text-2xl">Shopping Cart</h1>
          <h2 className="font-semibold text-2xl">3 Items</h2>
        </div>
        <div className="flex mt-7 mb-5  border-b py-2">
          <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">Product Details</h3>
          <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 ">Quantity</h3>
          <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">Price</h3>
          <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">Total</h3>
        </div>
       <CartProduct/>

      </div>
     <TotalCart/>
     </div>
    </div>
  </div>);
}
export default CartPage;