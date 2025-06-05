import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = () => {
  return (

    <div className='max-w-7xl mx-auto px-4 mt-10'>
    {/* Heading */}
    <div className='text-center mb-6'>
      <h1 className='font-bold text-3xl'>Browse the Range</h1>
      <p className='text-gray-600 text-lg mt-2'>Choose a Category</p>
    </div>

    
    
    <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-5">
    
      {/* Card 1 */}
      <Link to={""}>
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <img src="/images/Mask Group.png" alt="..." className="w-full object-cover" />
        <p className='text-center font-bold my-7 text-2xl'>Dining</p>
      </div>
      </Link>

      {/* Card 2 */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <img src="/images/Image-living room.png" alt="..." className="w-full object-cover" />
        <p className='text-center font-bold my-7 text-2xl'>Living</p>
      </div>

      {/* Card 3 */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <img src="/images/Mask Group1.png" alt="..." className="w-full object-cover" />
        <p className='text-center font-bold my-7 text-2xl'>Bedroom</p>
      </div>
    </div>
    </div>
  );
};

export default CategoryCard;
