import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-700 text-white py-8 w-full">
      <div className="container mx-auto flex flex-wrap">
        <div className="w-full md:w-1/4">
          <h4 className="text-lg font-semibold mb-4 p-2">Links</h4>
          <ul className="list-none p-2 m-0">
            <li className="mb-2">Home</li>
            <li className="mb-2">Products</li>
            <li className="mb-2">About Us</li>
            <li className="mb-2">Contact</li>
          </ul>
        </div>

        <div className="w-full md:w-1/4">
          <h4 className="text-lg font-semibold mb-4 p-2">Follow Us</h4>
          <div className="flex space-x-4 p-2">
            <a href="#" className="text-white hover:text-gray-500">
              Facebook
            </a>
            <a href="#" className="text-white hover:text-gray-500">
              Twitter
            </a>
            <a href="#" className="text-white hover:text-gray-500">
              Instagram
            </a>
          </div>
        </div>

        <div className="w-full md:w-1/4">
          <h4 className="text-lg font-semibold mb-4 p-2">Newsletter</h4>
          <p className="p-2">
            Subscribe to our newsletter for updates and promotions.
          </p>
        </div>

        {/* <div className="w-full md:w-1/4 p-2">
          <h4 className="text-lg font-semibold mb-4 p-2">Payment Options</h4>
          <h5 className="">Visa</h5>
          <h5>Master Card</h5>
        </div> */}
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-400 mt-8">
        <div className="container mx-auto py-2 text-sm text-gray-500">
          &copy; 2024 Your Company. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
