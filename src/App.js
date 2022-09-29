import React, {useState} from "react"
import Navbar from './Navbar'
import Footer from './Footer';
import ProductListPage from "./ProductListPage";
import { Routes, Route } from "react-router-dom";
import ProductDetail from "./ProductDetail";
import About from './About';
import SignupPage from "./SignupPage";
import SigninPage from "./SigninPage";
import Skills from "./Skills";
import NotFound from "./NotFound";
import Cart from "./Cart";
import Forget from "./Forget";
import Contact from "./Contact";



function App() {
  const savedDataString = localStorage.getItem("my-cart") || "{}";
  const savedData = JSON.parse(savedDataString);


  const [cart, setCart] = useState(savedData);

  function handleAddToCart(productId, count) {

    const oldCount = cart[productId] || 0;
    const newCart = {...cart, [productId]: oldCount + count}
    setCart(newCart);
    const cartString = JSON.stringify(newCart);
    localStorage.setItem("my-cart", cartString)
  }


 const totalCount =  Object.keys(cart).reduce(function(previous, current){
  return  previous + cart[current];
  }, 0);
  return (


    <div className="bg-slate-200 h-screen overflow-scroll flex flex-col">
      <Navbar productCount={totalCount} />
      <div className="grow">
        <Routes>
          <Route index element={<ProductListPage />}></Route>
          <Route path="/Products/:id" element={<ProductDetail onAddToCart={handleAddToCart} />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Signup" element={<SignupPage />}></Route>
          <Route path="/Signin" element={<SigninPage />}></Route>
          <Route path="/" element={<ProductListPage />}></Route>
          <Route path="*" element={<NotFound />}></Route>
          <Route path="/Cart" element={<Cart />}></Route>
          <Route path="/Skills" element={<Skills />}></Route>
          <Route path="/Forget" element={<Forget/>}></Route>
          <Route path="/Contact" element={<Contact/>}></Route>
        </Routes>
      </div>


      <Footer />
    </div>
  );


}


export default App;