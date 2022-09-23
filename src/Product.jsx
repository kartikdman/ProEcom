import React from "react";
import { Link } from "react-router-dom";

function Product({ title, category, thumbnail, price, id, rating }) {

    return (
        <div className="bg-white shadow shadow-black max-w-xs border border-black rounded-md m-2">
            <div className="w-full aspect-square">
                <img className="object-cover w-full h-full" src={thumbnail} alt="" />
                </div>
                <div className="m-2" >
                    <div className="text-gray-500">{category}</div>
                    <h1 className="font-semibold">{title}</h1>
                    <div>Ratings: {rating}</div>
                    <div className="">${price}</div>
                </div>
            


            <div className="flex flex-col justify-center">
                <Link className="font-semibold text-white bg-sky-900 rounded-md py-2 px-3 m-6 text-center" to={"/Products/" + id}>View More</Link>
            </div>

        </div>
    )

}

export default Product;