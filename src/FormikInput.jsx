import { useField } from "formik";
import Input from "./Input";
import React from "react";


function FormikInput({ name,  ...rest }) {

    const field = useField(name);
    console.log(field, name)

    const [data, meta] = field;

    const { value, onBlur, onChange } = data;

    const  { error, touched , } = meta;

    

    return (
      <Input 
      
      value={value} 
      onBlur={onBlur} 
      onChange={onChange} 
      touched={touched}
       error={error}
       {...rest}
       />

    );
}
export default FormikInput;