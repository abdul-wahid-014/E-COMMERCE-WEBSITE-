import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './components/Home'
import Product from './components/Product'
import ContactUs from './components/ContactUs'
import Coorporate from './components/Coorporate'
import Cart from './components/Cart' 
import Recipes from './components/Recipes' 
import ProductDetail from './components/ProductDetail' 
import Login from './components/Login'
import Signup from './components/Signup'
import { auth } from './config/firebase'
import {onAuthStateChanged } from "firebase/auth";
import ExtraSignUp from './components/ExtraSignUp'


const App = () => {
  let [user,setUser] = useState();
  console.log(user)
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        console.log('done')
        setUser(user)
        // ...
      } else {
        // User is signed out
        // ...
        console.log('no user')
        setUser(null)

      }
    });
    
  },[])
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/recipes' element={<Recipes/>}/>
        <Route path='/contactUs' element={<ContactUs/>}/>
        <Route path='/coorporate' element={<Coorporate/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/extradatasignup' element={<ExtraSignUp/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/product/productdetail/:id' element={<ProductDetail/>}/>
        <Route/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
