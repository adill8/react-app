import React from 'react';
import { FaClock, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

const ContactUs = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        
      {/* Heading */}
<div className="mb-20 text-center">
  <h1 className="title-font font-bold text-4xl text-gray-900">Contact Us</h1>
  <p className="mt-4 text-gray-700 max-w-xl mx-auto">
    Have questions or want to get in touch? Fill out the form below or use the contact details to reach us directly. We're here to help!
  </p>
</div>

        
        {/* Centered Flex Container */}
        <div className="flex flex-col md:flex-row justify-center items-start gap-10 mx-auto max-w-4xl">
          
    {/* Left: Contact Info with Icons & Inline Details */}
<div className="w-full md:w-1/2 text-left space-y-6">

{/* Address */}
<div className="flex items-start gap-4">
  <FaMapMarkerAlt className="text-black font-bold text-2xl mt-1" />
  <div>
    <h3 className="text-lg font-semibold text-gray-900">Address</h3>
    <p className="text-gray-700">
      236 5th SE Avenue,<br />
      New York NY10000,<br />
      United States
    </p>
  </div>
</div>

{/* Phone */}
<div className="flex items-start gap-4">
  <FaPhoneAlt className="text-black font-bold text-2xl mt-1" />
  <div>
    <h3 className="text-lg font-semibold text-gray-900">Phone</h3>
    <p className="text-gray-700">Mobile: +(84) 546-6789</p>
    <p className="text-gray-700">Hotline: +(84) 456-6789</p>
  </div>
</div>

{/* Working Hours */}
<div className="flex items-start gap-4">
  <FaClock className="text-black font-bold text-2xl mt-1" />
  <div>
    <h3 className="text-lg font-semibold text-gray-900">Working Time</h3>
    <p className="text-gray-700">Monday-Friday: 9:00 - 22:00</p>
    <p className="text-gray-700">Saturday-Sunday: 9:00 - 21:00</p>
  </div>
</div>

</div>



          
          {/* Right: Form (no bg color now) */}
          <div className="w-full md:w-1/2 rounded-lg p-0 text-left">
            
            {/* Name */}
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600 mb-3 block">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="abc"
                className="w-full bg-white rounded-lg border border-gray-300 text-base text-gray-700 py-5 px-3"
              />
            </div>

            {/* Email */}
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-gray-600 mb-3 block">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="abc@gmail.com"
                className="w-full bg-white rounded-lg border border-gray-300 text-base text-gray-700 py-5 px-3"
              />
            </div>

            {/* Subject */}
            <div className="relative mb-4">
              <label htmlFor="subject" className="leading-7 text-sm text-gray-600 mb-3 block">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Optional"
                className="w-full bg-white rounded-lg border border-gray-300 text-base text-gray-700 py-5 px-3"
              />
            </div>

            {/* Message */}
            <div className="relative mb-4">
              <label htmlFor="message" className="leading-7 text-sm text-gray-600 mb-3 block">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Write your message here..."
                className="w-full bg-white rounded-lg border border-gray-300 text-base text-gray-700 py-5 px-3"
              ></textarea>
            </div>

            {/* Button */}
            <button className="text-white bg-yellow-600 border-0 py-2 px-8 hover:bg-yellow-700 rounded-lg text-lg">Send</button>
            <p className="text-xs text-gray-500 mt-3">We'll get back to you soon.</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactUs;
