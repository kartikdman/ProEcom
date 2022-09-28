import React from "react";


function CartProduct() {
    return (<div className="container mx-auto mt-10 border-b">
         <div className="flex items-center hover:bg-gray-100 -mx-8 px-8 py-5">
                    <div className="flex w-2/5">
                        <div className="w-28">
                            <img className="h-28" src="https://drive.google.com/uc?id=18KkAVkGFvaGNqPy2DIvTqmUH_nk39o3z" alt="" />
                        </div>
                        <div className="flex flex-col justify-between ml-8 ">
                            <div className="space-y-2 flex flex-col">
                            <span className="font-bold text-md">Iphone 6S</span>
                            <span className="text-red-500 text-md">Apple</span>
                            </div>
                            <a href="#" className=" font-semibold hover:text-red-500 text-gray-500 text-sm">Remove</a>
                        </div>
                    </div>
                    <div className="flex justify-center w-1/5">
                        <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512"><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                        </svg>

                        <input className="mx-2 border text-center w-8" type="text" value="1" />

                        <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
                            <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                        </svg>
                    </div>
                    <span className="text-center w-1/5 font-semibold text-sm">$400.00</span>
                    <span className="text-center w-1/5 font-semibold text-sm">$400.00</span>
                </div>
    </div>);
}
export default CartProduct;