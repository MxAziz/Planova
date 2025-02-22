import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const JoinEmployee = () => {
  const { signInWithGoogle, createUser, } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  // Regular expression:
  const passwordReg = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{6,}$/;

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log(name, email, password, );

    // update user profile
    const profile = {
      name: name,
      email: email,
    };

    // password validation
    if (!passwordReg.test(password)) {
      toast.error(
        "Password Must have an Uppercase, a Lowercase, one digit and Length must be at least 6 characters"
      );
      return;
    }

    createUser(email, password)
      .then((result) => {
          // console.log(result.user);
          axiosPublic.post("/users", profile).then((res) => {
            if (res.data.insertedId) {
              e.target.reset();
              toast.success("Registration is successful !");
              navigate("/home");
            }
          });

        // updateUserProfile(name)
        //   .then(() => {
        //     axiosPublic.post("/users", profile).then((res) => {
        //       if (res.data.insertedId) {
        //         e.target.reset();
        //         toast.success("user added to the database");
        //         navigate("/home");
        //       }
        //     });
        //   })
        //   .catch((error) => console.log("user profile update error", error));
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        const { displayName, email,  } = result.user;

        // User data to save in MongoDB
        const userData = {
          name: displayName,
          email,
        };

        // Send user data to server
        axiosPublic.post("/users", userData).then((res) => {
          if (res.data.insertedId) {
            toast.success(
              "Sign up with Google is successful and user is saved!"
            );
            navigate("/home");
          } else {
            toast.success(
              "Sign up with Google is successful and user info is not saved!"
            );
            navigate("/home");
          }
        });
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="dark:bg-gray-600 dark:text-white">
      <div className="pt-4 pb-8  w-2/3 mx-auto flex flex-row-reverse">
        {/* image */}
        <figure className="hidden lg:block">
          <img
            className=" h-full w-[450px] shadow-2xl rounded-r-lg rounded-bl-lg"
            src="https://i.pinimg.com/474x/48/0c/b0/480cb009f12cb42fdd99b210562f2cdd.jpg"
            alt=""
          />
        </figure>
        {/* login form */}
        <div className="card bg-base-100 dark:bg-gray-800 dark:text-white w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleSubmit} className="card-body ">
            <div className="flex flex-col items-center">
              <h3 className="text-xl mt-2">Get Your Free Account Now !</h3>
              <button
                onClick={handleGoogleSignIn}
                className="btn mt-3 w-full flex items-center justify-center gap-2 bg-white dark:bg-gray-600 dark:text-white dark:border-none text-gray-800 border border-gray-400 rounded-lg px-4 py-2 "
              >
                <FcGoogle className="size-5" />
                SignUp with Google
              </button>
            </div>
            <div className="divider text-xs hover:underline">
              Or Registration with Email
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text dark:text-gray-100">Full Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                className="input input-bordered dark:bg-gray-600"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text dark:text-gray-100">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
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
              <button className="btn bg-[#635FC7] border-none text-white hover:bg-gray-700">
                SignUp
              </button>
            </div>
            <p className="dark:text-gray-100">
              Already have an account ?{" "}
              <Link className="text-lg font-bold text-[#635FC7]" to={"/login"}>
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default JoinEmployee;
