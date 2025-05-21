import React from 'react';

const AboutUs = () => {
  return (
    <section className="text-gray-700 body-font">
      <div className="container px-5 py-24 mx-auto">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Us</h1>
          <p className="max-w-2xl mx-auto text-gray-600">
            We’re passionate about delivering excellent service and creating experiences that matter. Learn more about our journey and what drives us.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="flex flex-col md:flex-row items-center gap-10">
          
          {/* Image Section */}
          <div className="md:w-1/2 w-full">
            <img
              className="rounded-2xl shadow-lg"
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
              alt="About us"
            />
          </div>

          {/* Text Section */}
          <div className="md:w-1/2 w-full">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Who We Are</h2>
            <p className="mb-4 text-gray-700 leading-relaxed">
              We are a team of professionals dedicated to delivering top-quality services and solutions. From day one, our mission has been to create value and build trust with our clients.
            </p>
            <p className="text-gray-700 leading-relaxed">
              With years of experience and a passion for innovation, we continuously strive to exceed expectations. Whether it's a product, a service, or a partnership — we put our heart into it.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutUs;
