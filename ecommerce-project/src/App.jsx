import { Routes, Route } from 'react-router'
import { useState,useEffect } from 'react'
import axios from "axios";
import { HomePage } from './pages/HomePage'
import { Checkout } from './pages/Checkout'
import { OrderPage } from './pages/OrderPage'
import { TrackingPage } from './pages/TrackingPage'
import './App.css'


function App() {
      const [cart,setCart]=useState([]);

    useEffect(()=>{

        async function getCartItems(){
            let response=await axios.get('api/cart-items?expand=product')
            setCart(response.data)
        }

        getCartItems();

    },[])
    

  return (

   
    <>
      <Routes>
        <Route index element={<HomePage cart={cart}/>} />
        <Route path="/checkout" element={<Checkout cart={cart} />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="/tracking" element={<TrackingPage />} />
      </Routes>

    </>
  )
}

export default App
