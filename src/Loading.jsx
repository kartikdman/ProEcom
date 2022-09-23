import React from "react";
import {AiOutlineLoading3Quarters} from 'react-icons/ai'


function Loading() {

    return (
        <div className=" gap flex justify-center bg-white rounded-md shadow-md mx-48  my-32 py-32">
            <div>
                 <AiOutlineLoading3Quarters className="text-5xl text-red-500  font-bold animate-spin" />
            </div>
        </div>
    );
}


export default Loading;