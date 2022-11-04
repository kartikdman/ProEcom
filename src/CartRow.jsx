import React from "react";
import { ImCross } from "react-icons/im";



function CartRow({ product, quantity, onQuantityChange, onRemove }) {
      function handleChange(event){
        onQuantityChange(product.id,+event.target.value);

      }
       function handleCrossClick(){
        onRemove(product.id );

       }

    return (<div className=" flex flex-row items-center space-x-4 px-4 py-2 border border-gray-300 shadow-xl shadow-gray-500 text-lg text-bold " >
        <button onClick={handleCrossClick} className="w-10 h-10 flex items-center">
            <ImCross />
        </button>
        <div className="w-10 h-10 ">
            <img className="object-cover w-full h-full" src={product.thumbnail} />
        </div>
        <h3 className="grow">{product.title}</h3>
        <span className="w-20">${product.price}</span>
        <div className="w-32 ">
            <input
                type="number"
                className="w-12 p-1  border border-gray-300  rounded-md   "
                value={quantity}
                onChange={handleChange} />
        </div>
        <span className="w-20 "> ${product.price * quantity}</span>


    </div>




    );
}






export default CartRow;