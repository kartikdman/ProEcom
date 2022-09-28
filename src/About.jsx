import React from "react";
import { HiArrowSmLeft } from 'react-icons/hi'
import { Link } from "react-router-dom";

function About() {
    return (



        <div className="h-screen bg-gray-200  dark:bg-gray-600  rounded-md mt-0 flex flex-wrap items-center  justify-center  ">

            <div className="p-8">
                <Link className="mt-2 text-indigo-600" to="/">
                    <HiArrowSmLeft className="text-5xl rounded-full border-2 border-indigo-600 text-indigo-600 bg-white " />
                    <h1 className=" font-bold">HOME</h1>
                </Link>
            </div>

            <div className="container lg:w-2/6 xl:w-2/7 sm:w-full md:w-2/3    bg-white  shadow-lg    transform   duration-200 easy-in-out">
                <div className=" h-32 overflow-hidden" >
                    <img className="w-full" src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" alt="" />
                </div>
                <div className="flex justify-center px-5  -mt-12">
                    <img className="h-32 w-32 bg-white p-2 rounded-full   " src="https://media.discordapp.net/attachments/999601406514298951/1022092348072665098/IMG_20220622_112829_674_30_1_63.jpg" alt="" />

                </div>
                <div className=" ">
                    <div className="text-center px-14">
                        <h2 className="text-gray-800 text-3xl font-bold">Kartik Dhiman</h2>
                        <a className="text-gray-400 mt-2 hover:text-blue-500" href="https://www.linkedin.com/in/kartikdman/" target="BLANK()">👉kartikdman👈</a>
                        <p className="mt-2 text-gray-600 text-sm">Kartik Dhiman was born in 2005 in Roorkee Uttarakhand. He Was Completed Diploma in information Technology after 10th From Dehradun Uttarakhand. <br />🎯 Currently Learning 6 Months Software Development Training From @Codeyogi.
                            Codeyogi is Indian's Frist ED-Tech Startup That Provides quality education to underprivileged Students.
                        </p>
                    </div>
                    <hr className="mt-6" />
                    <div className="flex  bg-gray-50 ">
                        <div className="text-center w-1/2 p-4 hover:bg-gray-100 cursor-pointer">
                            <p><span className="font-semibold">2.5 k </span> Followers</p>
                        </div>
                        <div className="border"></div>
                        <div className="text-center w-1/2 p-4 hover:bg-gray-100 cursor-pointer">
                            <p> <span className="font-semibold">2.0 k </span> Following</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    );
}

export default About;