import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaExclamationTriangle } from "react-icons/fa";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#e0e6f0]">
      <div className="text-center">
        <FaExclamationTriangle className="text-6xl text-red-500 mx-auto mb-4" />
        <h1 className="text-5xl font-bold text-gray-800 mb-4">404</h1>
        <h2 className="text-2xl text-gray-600 mb-6">
          Oops! The page you're looking for doesn't exist.
        </h2>
        <p className="text-gray-500 mb-8">
          It seems like you've lost your way. Let's get you back home!
        </p>
        <Link
          to="/"
          className="btn bg-[#827FD2] text-white hover:bg-[#6661f7]  flex items-center justify-center gap-2"
        >
          <FaHome /> Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
