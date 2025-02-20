import React from "react";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className=" md:flex justify-between items-center  border-t border-gray-700 px-4 lg:px-8 py-6">
      <p className="">
        Copyright © {new Date().getFullYear()} Planova - All rights
        reserved
      </p>
      <div className="flex gap-4 mt-4 lg:mt-0">
        <a href="#">
          <FaFacebookF />
        </a>
        <a href="#">
          <FaTwitter />
        </a>
        <a href="#">
          <FaLinkedinIn />
        </a>
        <a href="#">
          <FaGithub />
        </a>
      </div>
    </div>
  );
};

export default Footer;
