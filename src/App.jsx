import React from 'react'
import Navbar from './Components/Navbar'
import Carousel from './Components/Carousel'
import CatogeryCard from './Components/CatogeryCard'
import Products from './Components/Products'
import Footer from './Components/Footer'
import { Route, Routes } from 'react-router-dom'
import ProductDetail from './Components/ProductDetail'

const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
    <Route path='/' element={<><Carousel/><CatogeryCard/><Products/></>}/>
    <Route path='/productDetail' element={<ProductDetail/>}/>
    </Routes>
      <Footer/>
    </>
  )
}

export default App
