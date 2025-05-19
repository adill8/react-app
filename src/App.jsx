import React from 'react'
import Navbar from './Components/Navbar'
import Carousel from './Components/Carousel'
import CatogeryCard from './Components/CatogeryCard'
import Products from './Components/Products'
import Footer from './Components/Footer'

const App = () => {
  return (
    <div>
    <Navbar/>
    <Carousel/>
    <CatogeryCard/>
      <Products/>
      <Footer/>
    </div>
  )
}

export default App
