import React from 'react'
import Navbar from './Components/Navbar'
import Carousel from './Components/Carousel'
import CatogeryCard from './Components/CatogeryCard'
import Products from './Components/Products'
import Footer from './Components/Footer'
import { Route, Routes } from 'react-router-dom'
import ProductDetail from './Components/ProductDetail'
import ContectUs from './Components/ContectUs'
import OurProducts from './Components/OurProducts'
import AboutUs from './Components/AboutUs'
import EditProduct from './Components/EditProduct'
import AddProduct from './Components/AddProduct'

const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
    <Route path='/' element={<><Carousel/><CatogeryCard/><Products/></>}/>
    <Route path='/productDetail/:id' element={<ProductDetail/>}/>
    <Route path='/contect' element={<ContectUs/>}/>
    <Route path='/ourProducts' element={<OurProducts/>}/>
    <Route path='/aboutUs' element={<AboutUs/>}/>
    <Route path='/edit/:id' element= {<EditProduct/>}/>
    <Route path='/addProduct' element = {<AddProduct/>}/>
    </Routes>
      <Footer/>
    </>
  )
}

export default App
