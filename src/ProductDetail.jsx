import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getProductData } from "./Api";
import Loading from "./Loading";
import { HiArrowSmLeft, HiArrowSmRight } from 'react-icons/hi'
import NotFound from "./NotFound";




function ProductDetail({ onAddToCart }) {


    const id = +(useParams().id);
    const [product, setProduct] = useState();
    const [loading, setLoading] = useState(true);
    const [count, setCount] = useState(1);

    useEffect(function () {
        const p = getProductData(id);
        p.then(function (response) {
            setProduct(response.data);
            setLoading(false);



        }).catch(function () {
            setLoading(false);
        });

    },
        [id]
    );

    function handleCountChange(event) {
        setCount(+event.target.value)
    }

    function handleButtonClick() {
        onAddToCart(id, count);
    }


    if (loading) {
        return <Loading />;
    }

    if (!product) {
        return <NotFound />;
    }


    return (


        <div class="  mx-8 p-8">
            <Link className="mt-2 text-indigo-600" to="/">
                <HiArrowSmLeft className="text-5xl rounded-full border-2 border-indigo-600 text-indigo-600 bg-white" />
                <h1 className=" font-bold">HOME</h1>
            </Link>
            <div className="py-5 px-12 mx-60  my-8 flex  bg-white shadow-md shadow-black rounded-md mt-18">
                <div className="">
                    <img class="w-h-auto rounded-md" src={product.thumbnail} />
                </div>

                <div>
                    <div class="ml-10">
                        <h1 class="font-bold ">{product.title}</h1>
                        <div>{product.category}</div>
                        <h3 class="mt-2">

                            ${product.price}
                        </h3>
                        <p class="mt-2 text-gray-700"> {product.description}</p>
                        <div class="mt-4 ">
                            <div className="flex ">
                                <input value={count} onChange={handleCountChange} className=" text-gray-700 w-12 text-center py-1 m-2 rounded-md border border-gray-700" type="number" />
                                <button onClick={handleButtonClick} className="bg-indigo-500  hover:bg-gray-700 text-white font-bold px-2 py-1 rounded-md shadow-md shadow-slate-400 ">ADD TO CART</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-between py-5 mb-8">
                <div>
                    {id > 1 &&
                        (<Link className="mt-2 text-indigo-600" to={"/products/" + (id - 1)}>
                            <HiArrowSmLeft className="text-5xl rounded-full border-2 border-indigo-600 text-indigo-600 bg-white" />
                            <h1 className=" font-bold">Previous</h1>
                        </Link>)
                    }
                </div>
                <div>
                    <Link className="mt-2 text-indigo-600" to={"/products/" + (id + 1)}>
                        <HiArrowSmRight className="text-5xl rounded-full border-2 border-indigo-600 text-indigo-600 bg-white" />
                        <h1 className=" font-bold">Next</h1>
                    </Link>
                </div>

            </div>
        </div>




    );

}


export default ProductDetail;