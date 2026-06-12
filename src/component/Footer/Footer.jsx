import React from 'react';
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id='Footer' className="bg-[#465497] text-white py-10 px-6 md:px-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Left Content */}
        <div className="text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold">Contact</h1>
          <p className="text-sm md:text-lg mt-2">Feel free to reach out</p>
        </div>

        {/* Contact Links */}
        <ul className="space-y-4 text-sm md:text-base">
          <li className="flex items-center gap-3">
            <MdOutlineEmail size={24} />
            <a href="mailto:ms63675656@gmail.com" className="hover:underline">
              ms63675656@gmail.com
            </a>
          </li>
          <li className="flex items-center gap-3">
            <CiLinkedin size={24} />
            <a
              href="https://www.linkedin.com/in/manish-solanki-4a4894298/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              manishrajput
            </a>
          </li>
          <li className="flex items-center gap-3">
            <FaGithub size={24} />
            <a
              href="https://github.com/manishrajput-67"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              manishrajput-67
            </a>
          </li>
          <li className="flex items-center gap-3">
            <FaInstagram size={24} />
            <a
              href="https://github.com/manishrajput-67"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              manish__rajput_69 
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
