import React from 'react'

const Footer = () => {
  return (
   <footer className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
      <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
        <span className="ml-3 text-xl pb-5 font-bold">Funiro</span>
      </a>
      <p className="mt-2 text-sm text-gray-500 py-6">Air plant banjo lyft occupy retro adaptogen indego</p>
    </div>
    <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-500 tracking-widest text-sm mb-3 pb-5">CATEGORIES</h2>
        <nav className="list-none mb-10 font-bold">
          <li className='py-6'>
            <a className="text-gray-600 hover:text-gray-800">Home</a>
          </li>
          <li className='py-6'>
            <a className="text-gray-600 hover:text-gray-800">Shop</a>
          </li>
          <li className='py-6'>
            <a className="text-gray-600 hover:text-gray-800">About</a>
          </li>
          <li className='py-6'>
            <a className="text-gray-600 hover:text-gray-800">Contect</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-500 tracking-widest text-sm mb-3 pb-5">CATEGORIES</h2>
        <nav className="list-none mb-10 font-bold">
          <li className='py-6'>
            <a className="text-gray-600 hover:text-gray-800">Payment Options</a>
          </li>
          <li className='py-6'>
            <a className="text-gray-600 hover:text-gray-800">Returns</a>
          </li>
          <li className='py-6'>
            <a className="text-gray-600 hover:text-gray-800">Privacy Policy</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/2 md:w-1/2 w-full px-4">
  <h2 className="title-font font-medium text-gray-500 tracking-widest text-md mb-3 pb-5">Newsletter</h2>
  <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
    <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
    <input type="email" name="floating_email" id="floating_email" className="py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-gray-900" placeholder="Enter Your Email Adress " required />
    </div>
    <button className="lg:mt-2 xl:mt-0 text-slate-800 text-sm border-0 border-b border-gray-900 bg py-2 font-semibold">SUBSCRIBE</button>
  </div>
</div>

    </div>
  </div>
  <div className="bg-gray-100">
    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <p className="text-gray-500 text-sm text-center sm:text-left">© 2020 Tailblocks —
        <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">@knyttneve</a>
      </p>
      
    </div>
  </div>
</footer>

  )
}

export default Footer
