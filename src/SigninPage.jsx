import { withFormik } from "formik";
import Input from "./Input";
import React from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import axios from "axios";

function callLoginApi(values) {
    axios
    .post("https://myeasykart.codeyogi.io/login", {
        email: values.email,
        password: values.password,
    })
    .then((response) => {
        console.log(response.data);

    }).catch(() => {

        console.log("invalid Credentials");

    });



}

const schema = Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string().min(6).required().max(12),
})


const initialValues = {
    email: "",
    password: "",

};





function SigninPage({
    handleSubmit, values, errors, touched, handleChange, handleBlur
}) {






    return (
        <section class="bg-gray-50 dark:bg-gray-300">
            <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">

                <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Login Here!
                        </h1>

                        <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6" action="#">
                            <Input
                            value={values.email}
                                touched={touched.email}
                                errors={errors.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                label="Your email"
                                type="email"
                                name="email"
                                id="email"
                                className="bg-gray-50 border text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600
                                                block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                                             dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="name@company.com"
                                required=""



                            />


                            <Input
                                touched={touched.password}
                                errors={errors.password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                label="Password"
                                type="password"
                                name="password"
                                id="password"
                                placeholder="••••••••"
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                required=""

                            />



                            <div class="flex items-start">
                                <div class="flex items-center h-5">
                                    <input id="terms" aria-describedby="terms" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300  dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" />
                                </div>
                                <div class="ml-3 text-sm">
                                    <label for="terms" class="font-light text-gray-500 dark:text-gray-300">I accept the <a class="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
                                </div>
                            </div>
                            <button type="submit" class="w-full text-white border border-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 disabled:bg-gray-600" >Login</button>
                            <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                                Wanna Forget Password? <Link to="/Forget" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Forget Now!</Link>
                            </p>
                        </form>

                    </div>
                </div>
            </div>
        </section>


    );
}

const myHOC = withFormik({
    validationSchema: schema,
    initialValues: initialValues,
    onSubmit: callLoginApi
});

const easyLogin = myHOC(SigninPage);
export default easyLogin;