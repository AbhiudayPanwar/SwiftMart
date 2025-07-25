import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="px-6 mt-30 md:px-16 lg:px-24 xl:px-32 pt-8 w-full text-gray-500 bg-white">
        <hr className="border-t border-gray-400 my-4" />
      <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-500/30 pb-6">
        <div className="md:max-w-96">
          <img src="/SwiftMart_logo.png" alt="logo" className="h-15 w-23" />
          <p className="mt-6 text-sm">
            SwiftMart is your one-stop online grocery delivery platform, bringing farm-fresh produce,
             everyday essentials, and household favorites straight to your doorstep.
          </p>
        </div>

        <div className="flex-1 flex items-start md:justify-end gap-20">
          <div>
            <h2 className="font-semibold mb-5 text-gray-800">Company</h2>
            <ul className="text-sm space-y-2">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About us</Link></li>
              <li><Link to="/contact">Contact us</Link></li>
              <li><Link to="/privacy">Privacy policy</Link></li>

            </ul>
          </div>
          <div>
            <h2 className="font-semibold mb-5 text-gray-800">Get in touch</h2>
            <div className="text-sm space-y-2">
              <p>+91-8449175334</p>
              <p>abhiudaypanwar2004@gmail.com</p>
            </div>
          </div>
        </div>
      </div>

      <p className="pt-4 text-center text-sm pb-5 text-bold">
        © {new Date().getFullYear()} SwiftMart. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;

