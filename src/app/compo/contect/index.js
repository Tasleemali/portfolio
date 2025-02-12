import { X } from "lucide-react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebook, FaTwitter, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <div id="contect" className="bg-gray-900 text-white py-10 px-6 md:px-20">
      <h2 className="text-3xl font-bold text-center mb-6">Contact Me</h2>
      
      <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6">
        
        {/* Email */}
        <div className="flex items-center bg-gray-800 px-4 py-2 rounded-md">
          <FaEnvelope className="text-red-400 mr-3" />
          <span> <a href="mailto:tasleemali2508@gmail.com">tasleemali0701@gmail.com</a> </span>
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
          <span>Mumbai,India</span>
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="flex justify-center space-x-6 mt-6 text-xl pb-5">
        <FaFacebook className="hover:text-blue-500 cursor-pointer" />
        <X className="hover:text-white cursor-pointer" />
        <FaLinkedin className="hover:text-blue-400 cursor-pointer" />
        <FaWhatsapp className="hover:text-green-400 cursor-pointer" />
      </div>
<hr/>
      <div className="text-center pt-10">
      <p className="text-sm">  © 2025 tasleemali0701@gmail.com. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Contact;