import React, { useEffect, useState } from "react";
import CartRow from "./CartRow";





function CartList({ products, cart, updateCart }) {
    const [localCart, setLocalCart] = useState(cart);

    useEffect(function () {
        setLocalCart(cart);

    },
        [cart]
    );
   



    function handleQuantityChange(productId, newValue) {
        const newLocalCart = { ...localCart, [productId]: newValue };
        setLocalCart(newLocalCart);
    }


    function handleUpdateCartClick() {
        updateCart(localCart)
    }



    function handleRemove(productId) {

        console.log(
            "product to be remove ", productId);

        const newCart = { ...cart };
        console.log("before", cart);

        delete newCart[productId]
        updateCart(newCart);


    };




    return (
        <div>
            <div className="flex space-x-4 px-4 py-2 border border-gray-300 bg-gray-100 shadow-xl  my-2 text-bold text-lg ">
                <span className="ml-28 grow">Product</span>
                <span className="w-20">Price</span>
                <span className="w-32">Quantity</span>
                <span className="w-20">Subtotal</span>
            </div>
            {products.map((p) =>
                <CartRow
                    key={p.id}
                    product={p}
                    quantity={localCart[p.id]}
                    onQuantityChange={handleQuantityChange}
                    onRemove={handleRemove}
                />
            )}
            <div className="px-4 py-2  border-gray-300 flex justify-end ">
                <button className="bg-indigo-700 border rounded-md px-2 py-1 text-white" onClick={handleUpdateCartClick} >Update Cart</button>
            </div>



        </div>




    );
}



export default CartList;