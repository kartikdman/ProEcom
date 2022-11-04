import React from "react";


function Input({ name, label, id, values, touched, errors, className, placeholder, ...rest }) {




    let borderClass = " border-gray-300 focus:border-primary-600"

    if (touched && errors) {
        borderClass = "border-red-500"
    }



    return (
        <div>
            <label htmlfor={id} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{label}</label>
            <div>
                <input
                    value={values}
                    id={id}
                    className={className + "" + borderClass}
                    required=""
                    placeholder={placeholder}
                    {...rest}
                />
                {touched && errors && (<div className="text-red-500">{errors}</div>)}
            </div>
        </div>
    );
}


export default Input;