import React from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="footer" className="bg-black text-white py-14">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <div className="flex flex-col md:flex-row md:space-x-12 items-start mb-8">
          <div className="flex-1 mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">Shobithaa</h3>
            <p className="text-gray-400">
              Full-Stack Developer based in Sri Lanka, specializing in web and software development.
            </p>
          </div>
          <div className="flex-1 text-gray-400 space-y-2">
            <p><strong>Address:</strong> Charles Apartment Kalubowila, Colombo, Sri Lanka</p>
            <p><strong>Phone:</strong> +94 77 293 3466</p>
            <p><strong>Email:</strong> bishosri@gmail.com</p>
          </div>
        </div>

        <div className="border-t border-gray-600 pt-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Shobithaa. All rights reserved.
          </p>
          <div className="flex space-x-4 my-4 md:my-0">
            <a href="https://www.linkedin.com/in/shobithaa-srikanthan-a521b2283/" className="text-gray-400 hover:text-white">
              <FaLinkedin />
            </a>
            <a href="https://github.com/IT21821240" className="text-gray-400 hover:text-white">
              <FaGithub />
            </a>
            {/* <a href="#" className="text-gray-400 hover:text-white">
              <FaTwitter />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaFacebook />
            </a> */}
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">
              Privacy
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
