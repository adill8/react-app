import React from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const productDetail = JSON.parse(localStorage.getItem("products")) || [];

  const detail = productDetail.find((p) => p.id === parseInt(id));

  if (!detail) {
    return <p>Product not found.</p>;
  }
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-stretch items-center justify-center gap-6">
          {/* Image section */}
          <div className="lg:w-1/2 w-full bg-amber-50 flex justify-center items-center">
            <div className="w-full h-full max-h-[500px]">
              <img
                alt="ecommerce"
                src={detail.image}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Product Detail */}
          <div className="lg:w-1/2 w-full lg:pl-10">
            <h1 className="text-gray-900 text-5xl mb-3">{detail.name}</h1>
            <p className="text-gray-500 text-2xl mb-3">{detail.salePrice}</p>

            {/* Rating */}
            <div className="flex items-center mb-4">
              <svg
                className="w-6 h-6 text-yellow-500 fill-current mr-1"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              <svg
                className="w-6 h-6 text-yellow-500 fill-current mr-1"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              <svg
                className="w-6 h-6 text-yellow-500 fill-current mr-1"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              <svg
                className="w-6 h-6 text-yellow-500 fill-current mr-1"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              <svg
                className="w-6 h-6 text-yellow-500 fill-current mr-1"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>

              {/* Divider */}
              <div className="w-px h-7 bg-gray-500 mx-3"></div>

              {/* Customer Reviews */}
              <span className="text-gray-600 ml-2">5 Customer Review</span>
            </div>

            {/* Description */}
            <p className="leading-relaxed mb-4">{detail.description}</p>

            <div className="flex flex-col gap-4 mb-5">
              {/* Size */}
              <div className="mr-4">
                <h3 className="text-sm text-gray-600 mb-3">Size</h3>
                <div className="flex space-x-2">
                  <button className="border px-2 py-1 rounded text-sm bg-yellow-600 text-white">
                    L
                  </button>
                  <button className="border px-2 py-1 rounded text-sm font-semibold bg-amber-50">
                    XL
                  </button>
                  <button className="border px-2 py-1 rounded text-sm font-semibold bg-amber-50">
                    XS
                  </button>
                </div>
              </div>

              {/* Color */}
              <div>
                <h3 className="text-gray-600 text-sm mb-4">Color</h3>
                <div className="flex space-x-2">
                  <span className="w-8 h-8 bg-purple-500 rounded-full border-2 border-gray-300"></span>
                  <span className="w-8 h-8 bg-black rounded-full border-2 border-gray-300"></span>
                  <span className="w-8 h-8 bg-yellow-600 rounded-full border-2 border-gray-300"></span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-5 items-center py-3">
              <div className="flex items-center border border-gray-300 rounded-lg">
                <button className="py-3 px-2 text-xl">-</button>
                <span className="px-6 text-center">1</span>
                <button className="py-3 px-2 text-xl">+</button>
              </div>

              <button className="flex py-3 px-8 border border-gray-700 rounded-lg text-lg">
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
