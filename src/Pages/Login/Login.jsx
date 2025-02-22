import React, { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../Provider/AuthProvider";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const Login = () => {
  const { signInUser, signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();


  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);

    signInUser(email, password)
      .then((result) => {
        form.reset();
        navigate("/home");
        toast.success("Login is successful");
      })
      .catch((error) => {
        toast.error("Invalid Email or Password");
      });
  };

  // google signin method.
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        // console.log(result.user);
        const userInfo = {
          email: result.user?.email,
          name: result.user?.displayName,
        };
        axiosPublic.post("/users", userInfo).then((res) => {
          // console.log(res.data);
        });
        navigate("/home");
        toast.success("Google Sign-in successful!");
      })
      .catch((error) => {
        // console.log("auth related error", error);
        toast.error("Google Sign-in failed!");
      });
  };

  return (
    <div className="dark:bg-gray-600 min-h-screen flex justify-center items-center">
      <div className="pt-[10px] pb-16 w-2/3 mx-auto flex">
        {/* image */}
        <figure className="hidden lg:block">
          <img
            className=" h-[510px] w-[450px]  shadow-2xl"
            src="https://i.pinimg.com/474x/f3/66/5b/f3665b237e555624706d52a829ced06e.jpg"
            alt=""
          />
        </figure>
        {/* login form */}
        <div className="card bg-base-100 dark:bg-gray-800 dark:text-white w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleLogin} className="card-body ">
            <div className="flex flex-col items-center">
              <h3 className="text-xl mt-2">Welcome Back !</h3>
              <button
                onClick={handleGoogleSignIn}
                className="btn mt-3 w-full flex items-center justify-center gap-2 bg-white dark:bg-gray-600 dark:border-none dark:text-white text-gray-800 border border-gray-400 rounded-lg px-4 py-2 "
              >
                <FcGoogle className="size-5" />
                Login in with Google
              </button>
            </div>
            <div className="divider text-xs hover:underline">
              Or Login with Email
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text dark:text-gray-100">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered dark:bg-gray-600"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text dark:text-gray-100">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered dark:bg-gray-600"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-[#635FC7] text-white dark:border-none hover:bg-gray-700">
                Login
              </button>
            </div>
            <div>
              <p>
                New to this website?{" "}
                <Link
                  className="text-lg font-bold text-[#635FC7]"
                  to={"/registration"}
                >
                  Resister
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
