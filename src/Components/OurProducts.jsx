import React from 'react'
import { Link } from 'react-router-dom'
import productsData from '../Data/ProductsData'

const OurProducts = () => {
  return (
    <div className="text-center mb-12">
    <p className="text-yellow-600 text-sm uppercase tracking-widest my-4">Explore our exclusive collection</p>
    <h1 className="font-bold text-4xl my-4">Our Products</h1>
    <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">

    {productsData.map((product, i)=>(
      <Link to={"/productDetail"}>
      <div key={i} className="bg-white rounded-sm shadow-md overflow-hidden relative">
      <span className="absolute top-2 right-2 bg-red-400 text-white text-sm font-semibold p-2 rounded-full">
          {product.tag}
          
        </span>
        <img
          src={product.image}
          alt="Product"
          className="w-full h-80 object-cover"
        />
          <div className="p-4 bg-gray-100">
          <h5 className="text-xl text-start font-semibold mb-1">{product.name}</h5>
          <p className="text-gray-600 text-sm text-start mb-2">{product.description}</p>
          <div className="flex items-center gap-3">
            <span className="text-lg font-bold text-black">{product.salePrice}</span>
            <span className="line-through text-gray-400 text-sm">
              {product.price}
            </span>
          </div>
        </div>
      </div>
      </Link>
      
    ))}
    </div>
    <div className="flex justify-center mt-5">
    <button type="button" class="text-yellow-600 hover:text-white border border-yellow-600 hover:bg-yellow-500 font-medium rounded-sm text-sm px-10 py-2.5 text-center me-2 mb-2">Show more</button>
    </div>
    
  </div>

  )
}

export default OurProducts
