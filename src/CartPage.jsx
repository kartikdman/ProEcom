import React from "react";
import { useState, useEffect } from "react";
import { getProduct } from "./Api";
import { ImCross } from "react-icons/im"
import Loading from "./Loading";
import CartList from "./CartList";


function CartPage({ cart, updateCart }) {
    const [loading, setLoading] = useState([true])
    const [products, setProduts] = useState([]);




    useEffect(function () {
        setLoading(true);
        const productId = Object.keys(cart)
        const myProductPromises = productId.map(function (id) {
            return getProduct(id);

        });



        Promise.all(myProductPromises).then(function (products) {
            setProduts(products);
            console.log("products inside", products);
            setLoading(false);
        })
    },
        [cart]
    );






    if (loading) {
        return <Loading />;
    }

    return (
        <div className="bg-white   py-16 px-20  max-w-6xl mx-auto rounded-lg shadow-xl shadow-gray-700 ">
            <CartList products={products} cart={cart} updateCart={updateCart} />

        </div>


    );
}



export default CartPage;

