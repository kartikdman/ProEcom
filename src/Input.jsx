import React from "react";

 
function Input({label, id, values, onChange, onBlur, name, placeholder, type, touched, errors, className}){
    return(
        <div>
                                <label htnlfor={id} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{label}</label>
                                <div>
                                    <input
                                        value={values}
                                        onChange={onChange}
                                        onBlur={onBlur}
                                        type={type}
                                        name={name}
                                        id={id}
                                        className={className}
                                        placeholder={placeholder}
                                        required=""
                                    />
                                    {touched && errors && (<div className="text-red-500">{errors}</div>)}
                                </div>
                            </div>
    );
}


export default Input;