import React from 'react'

function Footer() {

    return (
        <div className="">
            <footer class="relative bg-blueGray-200  pt-8 pb-8 bg-slate-800">
                <div class="container mx-auto px-4">
                    <div class="flex flex-wrap text-left lg:text-left">
                        <div class="w-full lg:w-6/12 px-4">
                            <img className="w-48 h-16" src="https://media.discordapp.net/attachments/999601406514298951/1020757093067800596/IMG_20220917_233341.jpg" />
                            <h5 class="text-lg mt-0 my-2 text-white">
                                We Are Here To Make Awesome Product Everyday😎
                            </h5>
                            <div class="mt-6 lg:mb-0 mb-6">
                                <button class="bg-gray-500 text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                                    <i class="fab fa-twitter"></i></button><button class="bg-gray-500 text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                                    <i class="fab fa-facebook-square"></i></button><button class="bg-gray-500 text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                                    <i class="fab fa-dribbble"></i></button><button class="bg-gray-500 text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                                    <i class="fab fa-github"></i>
                                </button>
                            </div>
                        </div>
                        <div class="w-full lg:w-6/12 px-4">
                            <div class="flex flex-wrap items-top mb-6">
                                <div class="w-full lg:w-4/12 px-4 ml-auto">
                                    <span class="block uppercase text-white text-sm font-semibold mb-2">Useful Links</span>
                                    <ul class="list-unstyled">
                                        <li>
                                            <a class="text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="#">About Us</a>
                                        </li>
                                        <li>
                                            <a class="text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="#">Blog</a>
                                        </li>
                                        <li>
                                            <a class="text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://www.github.com/kartikdman" target="_blank">Github</a>
                                        </li>
                                        <li>
                                            <a class="text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="#">Free Products</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h class="my-6 border-blueGray-300" />
                    <div class="flex flex-wrap items-center md:justify-between justify-center">
                        <div class="w-full md:w-4/12 px-4 mx-auto text-center">
                            <div class="text-sm text-white font-semibold py-1">
                                Copyright © <span id="get-current-year">2022</span><a href="https://www.creative-tim.com/product/notus-js" class="text-blueGray-500 hover:text-gray-800" target="_blank" /> Kartik Dhiman |
                                <a href="https://www.creative-tim.com?ref=njs-profile" class="text-blueGray-500 hover:text-blueGray-800">All Rights Reserved.</a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>


    );
}

export default Footer;