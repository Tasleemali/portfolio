'use client';

import { X } from "lucide-react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaFacebook,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";

export default function Contact() {
  return (
    <div
      id="contact"
      className="bg-black text-white px-5 w-full"
    >
      <div className="w-full py-10 flex flex-col md:flex-row items-center md:items-start gap-8">
        <div className="w-full text-center md:text-left max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl  text-center font-bold mb-2">
            Contact <span className="text-emerald-400">Me</span>
          </h2>
          <h3 className="text-xl sm:text-2xl font-semibold text-center text-blue-400 mb-4">
            Let's <span className="text-gray-100">Connect!</span>
          </h3>

          {/* Contact Info Blocks */}
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6 mb-5">
        
        {/* Email */}
        <div className="flex items-center bg-gray-800 px-4 py-2 rounded-md">
          <FaEnvelope className="text-red-400 mr-3" />
          <span> <a href="mailto:tasleemali0701@gmail.com">tasleemali0701@gmail.com</a> </span>
        </div>

        {/* Phone */}
        <div className="flex items-center bg-gray-800 px-4 py-2 rounded-md">
          <FaPhone className="text-green-600 mr-3" />
          <span> <a href="tel:9867142960">9867142960</a></span>
        </div>
      </div>

      {/* Location */}
      <div className="flex justify-center mt-4">
        <div className="flex items-center bg-gray-800 px-4 py-2 rounded-md">
          <FaMapMarkerAlt className="text-red-700 mr-3" />
          <span>Mumbai, India</span>
        </div>
      </div>

         
            {/* Social Media Icons */}
      <div className="flex justify-center space-x-6 mt-6 text-xl pb-5">
        <FaFacebook className="hover:text-blue-500 cursor-pointer" />
        <X className="hover:text-white cursor-pointer" />
        <FaLinkedin className="hover:text-blue-400 cursor-pointer" />
        <FaWhatsapp className="hover:text-green-400 cursor-pointer" />
      </div>


          <hr className="border-gray-700 mb-4" />

          {/* Footer */}
          <p className="text-sm text-gray-400 text-center sm:text-left">
            © 2025 tasleemali0701@gmail.com. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
