import React, { useContext } from "react";
import ThemeToggle from "../../Components/ThemeToggle";
import { SiTask } from "react-icons/si";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Navbar = () => {

  const { loading, signOutUser } = useContext(AuthContext);
  const navigate = useNavigate();

  if (loading) {
    <div className=" loading-spinner"></div>
  }

    const handleLogOut = () => {
      signOutUser()
        .then(() => {
          navigate("/");
          toast.success("Sign out successful");
        })
        .catch((error) => {
          console.log("ERROR:", error);
          toast.warning("Sign out Failed !")
        });
    };

  return (
    <div>
      <div className="navbar bg-base-100 dark:bg-[#2B2C37] dark:text-white lg:px-8 px-3">
        <div className="flex-1">
          <Link to={"/home"} className=" font-bold text-2xl flex items-center gap-2">
            <SiTask className=" text-3xl" />
            <em>Planova</em>
          </Link>
        </div>
        <div className="flex-none gap-4">
          {/* add task */}
          <div className=" bg-[#635FC7] hidden lg:block text-white px-3 py-2 rounded-xl">
            <Link to={"/home/addTask"}>Add New Task</Link>
          </div>
          {/* theme toggle */}
          <div className="">
            <ThemeToggle></ThemeToggle>
          </div>
          {/* avatar and dropdown */}
          <div className="dropdown dropdown-end hidden lg:block">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 dark:bg-gray-700 rounded-box z-[1] mt-3 w-52 p-4 font-bold shadow"
            >
              {/* <li> */}
                {/* <a className="justify-between">{user.email}</a> */}
              {/* </li> */}
              <li>
                <a onClick={handleLogOut}>Logout</a>
              </li>
            </ul>
          </div>
          {/* menu drawer */}
          <div className="drawer drawer-end lg:hidden">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              {/* Page content here */}
              <label
                htmlFor="my-drawer-4"
                className="drawer-button btn border-none bg-[#635FC7] text-white"
              >
                MENU
              </label>
            </div>
            <div className="drawer-side">
              <label
                htmlFor="my-drawer-4"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul className="menu bg-base-200 dark:bg-[#2B2C37] dark:text-white text-base-content min-h-full w-52 p-4">
                {/* Sidebar content here */}
                <li className="text-2xl font-bold mb-1">Planova</li>
                {/* <li>{user.email}</li> */}
                <div className="divider"></div>
                <Link to={"/home/addTask"}>
                  <a>Add New Task</a>
                </Link>
                <li>
                  <button onClick={handleLogOut}>Logout</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
