import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import productsData from "../Data/ProductsData";
import { FaEdit } from "react-icons/fa";
import OurProducts from "./OurProducts";

const EditProduct = () => {
  const { id } = useParams();
  const [updateProduct, setUpdateProduct] = useState(()=>{
    JSON.parse(localStorage.getItem("products")) || productsData
  });

  const productEdit = updateProduct.find((p) => p.id === Number(id));

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [salePrice, setSalePrice] = useState("");
  const [tag, setTag] = useState("");

  useEffect(() => {

    if (productEdit) {
      setName(productEdit.name);
      setDescription(productEdit.description);
      setImage(productEdit.image);
      setPrice(productEdit.price);
      setSalePrice(productEdit.salePrice);
      setTag(productEdit.tag);
    }
  }, [productEdit]);

  const navigate = useNavigate();

  const handleUpdate = (e) => {
    e.preventDefault();

    if (!name || !description || !image || !price || !salePrice) {
      alert("Please fill all required fields");
      return;
    }
    const updated = {
      id: Number(id),
      name,
      description,
      image,
      price,
      salePrice,
      tag,
    };

    const updatedList = updateProduct.map((p) => (p.id === Number(id) ? updated : p));

    localStorage.setItem("products", JSON.stringify(updatedList));

    setUpdateProduct(updatedList);
    alert("Product Update successfully");
    navigate("/ourProducts");
  };

  if (!productEdit) {
    return <p>Product not found.</p>;
  }
  return (
    <div className="max-w-md mx-auto mt-10 bg-white/80 p-6 rounded-2xl shadow-2xl border border-blue-100 backdrop-blur-md">
      <h2 className="text-3xl font-bold text-center text-blue-700 mb-6 drop-shadow-md">
        Edit Product
      </h2>
      <form onSubmit={handleUpdate}>
        <input
          type="text"
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-3 mb-4 rounded-xl border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          required
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full px-4 py-3 mb-4 rounded-xl border border-gray-300 shadow-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          required
        />
        <input
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="w-full px-4 py-3 mb-4 rounded-xl border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          required
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full px-4 py-3 mb-4 rounded-xl border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          required
        />
        
        <input
          type="number"
          placeholder="Sale Price"
          value={salePrice}
          onChange={(e) => setSalePrice(e.target.value)}
          className="w-full px-4 py-3 mb-4 rounded-xl border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        />
        <input
          type="text"
          placeholder="Tag (optional)"
          value={tag}
          onChange={(e) => setTag(e.target.value)}
          className="w-full px-4 py-3 mb-6 rounded-xl border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        />
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-3 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02] flex justify-center"
        >
          <FaEdit size={22} />
        </button>
      </form>
    </div>
  );
};

export default EditProduct;
