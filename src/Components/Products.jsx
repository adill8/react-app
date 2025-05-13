import React from "react";

const Products = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="font-bold text-center my-5 text-3xl">Our Products</h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
        {/* Card 1 */}
        <div className="bg-white rounded-sm shadow-md overflow-hidden relative">
          <span className="absolute top-2 right-2 bg-red-400 text-white text-sm font-semibold p-1 rounded-full">
            -30%
          </span>

          <img
            src="https://images.unsplash.com/photo-1640749750974-3400dd94ede2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c3R5bGlzaCUyMGNhZmUlMjBjaGFpcnxlbnwwfHwwfHx8MA%3D%3D"
            alt="Product"
            className="w-full h-96 object-cover"
          />

          <div className="p-4 bg-gray-100">
            <h5 className="text-xl font-semibold mb-1">Syltherine</h5>
            <p className="text-gray-600 text-sm mb-2">Stylish cafe chair</p>
            <div className="flex items-center gap-3">
              <span className="text-lg font-bold text-black">Rp 2.500.000</span>
              <span className="line-through text-gray-400 text-sm">
                Rp 3.500.000
              </span>
            </div>
          </div>
        </div>

         {/* Card 2 */}
         <div className="bg-white rounded-sm shadow-md overflow-hidden relative">
          <img
            src="https://plus.unsplash.com/premium_photo-1682402663301-7ca06756825a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c3R5bGlzaCUyMGNhZmUlMjBjaGFpcnxlbnwwfHwwfHx8MA%3D%3D"
            alt="Product"
            className="w-full h-96 object-cover"
          />

          <div className="p-4 bg-gray-100">
            <h5 className="text-xl font-semibold mb-1">Leviosa</h5>
            <p className="text-gray-600 text-sm mb-2">Stylish cafe chair</p>
            <div className="flex items-center gap-3">
              <span className="text-lg font-bold text-black">Rp 2.500.000</span>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-sm shadow-md overflow-hidden relative">
          <img
            src="https://images.unsplash.com/photo-1655149555309-2c8be470d09e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bHV4cnklMjBiaWclMjBzb2ZhfGVufDB8fDB8fHww"
            alt="Product"
            className="w-full h-96 object-cover"
          />
          <span className="absolute top-2 right-2 text-white bg-red-400 rounded-full text-sm  font-semibold p-1">-50%</span>

          <div className="p-4 bg-gray-100">
            <h5 className="text-xl font-semibold mb-1">Lolito</h5>
            <p className="text-gray-600 text-sm mb-2">Luxury Big sofa</p>
            <div className="flex items-center gap-3">
              <span className="text-lg font-bold text-black">Rp 7.000.000</span>
              <span className="line-through text-gray-400 text-sm">Rp 14.000.000</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
