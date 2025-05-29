import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';

const AddProduct = () => {
  const [addProduct, setAddProduct] = useState([]);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [salePrice, setSalePrice] = useState("");
  const [tag, setTag] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !description || !image || !price || !salePrice) {
      alert('Please fill all required fields');
      return;
    }
    
    const newProduct ={
      id: Date.now(),
      name,
      description,
      image,
      price,
      salePrice,
      tag
    };

    const data = JSON.parse(localStorage.getItem('products')) || [];

    const updateProducts = [...data, newProduct];
    localStorage.setItem('products', JSON.stringify(updateProducts));
    setAddProduct(updateProducts);

    setName('');
    setDescription('');
    setImage('');
    setPrice('');
    setSalePrice('');
    setTag('');
    alert("Product Add Sucessfully!");
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white/80 p-6 rounded-2xl shadow-2xl border border-green-100 backdrop-blur-md">
    <h2 className="text-3xl font-bold text-center text-green-700 mb-6 drop-shadow-md">Add New Product</h2>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Product Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full px-4 py-3 mb-4 rounded-xl border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 transition"
        required
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full px-4 py-3 mb-4 rounded-xl border border-gray-300 shadow-sm resize-none focus:outline-none focus:ring-2 focus:ring-green-400 transition"
        required
      />
      <input
        type="text"
        placeholder="Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        className="w-full px-4 py-3 mb-4 rounded-xl border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 transition"
        required
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        className="w-full px-4 py-3 mb-4 rounded-xl border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 transition"
        required
      />
      <input
        type="number"
        placeholder="Sale Price"
        value={salePrice}
        onChange={(e) => setSalePrice(e.target.value)}
        className="w-full px-4 py-3 mb-4 rounded-xl border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 transition"
      />
      <input
        type="text"
        placeholder="Tag (optional)"
        value={tag}
        onChange={(e) => setTag(e.target.value)}
        className="w-full px-4 py-3 mb-6 rounded-xl border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 transition"
      />
    <button
  type="submit"
  className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-3 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02] flex justify-center"
>
  <FaPlus size={22} />
</button>
    </form>
  </div>
  
  );
};


export default AddProduct;
