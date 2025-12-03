import { Routes, Route } from 'react-router'
import { HomePage } from './pages/HomePage'
import { Checkout } from './pages/Checkout'
import { OrderPage } from './pages/OrderPage'
import './App.css'

function App() {


  return (
    <>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="order" element={<OrderPage />} />
      </Routes>

    </>
  )
}

export default App
