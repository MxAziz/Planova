import React from "react";
import { SiTask } from "react-icons/si";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div
      className="max-h-screen h-full min-h-screen object-contain flex flex-col justify-center items-center text-white bg-black text-center bg-cover bg-center bg-opacity-60"
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/474x/83/3e/8a/833e8ac0a225943dc249aa8df97d13e3.jpg')",
      }}
    >
      <h1 className="flex items-center gap-2 text-6xl font-bold mb-4">
        <SiTask className=" text-5xl" />
        <em>Planova</em>
      </h1>
      <p className="text-lg mb-6 max-w-xl">
        A simple and efficient task management tool with drag-and-drop support,
        task due date alerts, and an activity log. Stay organized and track your
        progress effortlessly.
      </p>
      <Link
        to="/login"
        className="px-6 py-3 bg-[#635FC7] hover:bg-blue-700 text-white font-semibold rounded-lg"
      >
        Registration Now !
      </Link>
    </div>
  );
};

export default Landing;
