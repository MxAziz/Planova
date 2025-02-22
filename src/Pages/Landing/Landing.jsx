import React from "react";
import { SiTask } from "react-icons/si";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div
      className="h-screen flex flex-col justify-center items-center text-white bg-black text-center bg-cover bg-center bg-opacity-60"
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/474x/a0/5c/53/a05c534a95aa48c6423f65d34db97996.jpg')",
      }}
      >
          <h1 className="flex items-center gap-2 text-6xl font-bold mb-4">
              <SiTask className=" text-5xl" />
                          <em>Planova</em>
          </h1>
      <h1 className="text-4xl font-bold mb-4">Welcome to Our Platform</h1>
      <p className="text-lg mb-6 max-w-xl">
        Discover new opportunities and take the first step towards success with
        us.
      </p>
      <Link
        to="/login"
        className="px-6 py-3 bg-[#635FC7] hover:bg-blue-700 text-white font-semibold rounded-lg"
      >
        Get Started
      </Link>
    </div>
  );
};

export default Landing;
