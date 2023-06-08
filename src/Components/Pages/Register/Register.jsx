// eslint-disable-next-line no-unused-vars

import logo from "../../../assets/logo.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import puzzle from "../../../assets/plane.png";
import { AuthContext } from "../../AuthProvider/Authprovider";
import { useContext, useState } from "react";

const Register = () => {
  const { registerUser, googleLogin } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const location = useLocation();
  const from = location.state?.from.pathname || "/";
  let navigate = useNavigate();

  // handle register function
  const handleRegister = (event) => {
    event.preventDefault();
    setSuccess("");
    setError("");

    const form = event.target;

    const email = form.email.value;
    const password = form.password.value;
    const name = form.name.value;
    const photourl = form.photourl.value;

    console.log(email, password, name, photourl);

    if (!/(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)) {
      setError("Password must contain 8 letter, 1 Capital and 1 Number");
      console.log(error);
      return;
    }

    if ((name, email, password)) {
      registerUser(email, password)
        .then((res) => {
          const loggedUser = res.user;
          console.log(loggedUser);
          form.reset();
          setSuccess("You have registered Successfully");
          return navigate(from, { replace: true });
        })
        .catch((error) => {
          console.log(error);
          setError(error.message);
        });
    }
  };

  //  google authentication
  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;
        console.log(user);

        return navigate(from, { replace: true });
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <div className="my-container">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
        <div className="">
          <img
            src={puzzle}
            className="w-[60%] mx-auto lg:w-full rounded-3xl"
            alt=""
          />
        </div>
        <div className="border-2 w-full lg:w-[60%] py-12 lg:py-12 px-6 lg:px-14 rounded-3xl">
          <Link>
            <div className="flex items-center gap-4 cursor-pointer ">
              <img src={logo} alt="" className=" w-[30px] lg:w-[35px]" />
            </div>
          </Link>
          <h2 className="text-4xl rehn-bold my-6">Register Please</h2>
          <form onSubmit={handleRegister} action="">
            <label htmlFor="">Name</label> <br />
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              className=" mt-2 mb-4 border-2 border-x-accent-contentfocus w-[90%] px-4 py-3 rounded-3xl"
              required
            />
            <br />
            <label htmlFor="">Email</label> <br />
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              className=" mt-2 mb-4 border-2 border-x-accent-contentfocus w-[90%] px-4 py-3 rounded-3xl"
              required
            />
            <br />
            <label htmlFor="">Password</label> <br />
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              className="mt-2 mb-4 border-2 border-x-accent-contentfocus w-[90%] px-4 py-3 rounded-3xl"
              required
            />
            <br />
            <label htmlFor="">Photo URL</label> <br />
            <input
              type="text"
              name="photourl"
              placeholder="Enter photo url"
              className="mt-2 mb-4 border-2 border-x-accent-contentfocus w-[90%] px-4 py-3 rounded-3xl"
            />
            {/* <!-- Remember me checkbox --> */}
            <div className="mb-[0.125rem]  min-h-[1.5rem] pl-[1.5rem] w-[90%] flex justify-between ">
              <div>
                {" "}
                <input
                  className="checkbox inline"
                  type="checkbox"
                  value=""
                  id="exampleCheck2"
                />
                <span className="inline font-semibold pl-[0.15rem] hover:cursor-pointer">
                  Remember me
                </span>
              </div>
            </div>
            <p className="text-lg rehn-medium mt-2 text-red-700"> {error}</p>
            <p className="text-lg rehn-medium  mt-2 text-green-700">
            {" "}
              {success}
            </p>
            <input
              type="submit"
              className=" transition duration-200  shadow-md  md:mb-0  px-4 py-2 md:px-12 md:py-3 m-2 text-xl rounded-3xl border-transparent border-2 text-white  bg-accent my-6 w-[90%] cursor-pointer"
              value="Register"
            />
          </form>
          <p className="text-para mt-4">
            Got an account already, huh?
            <Link to="/login" className="text-xl ml-1 underline text-accent2">
              Login
            </Link>
          </p>
          <button
            onClick={handleGoogleLogin}
            className="w-[90%] border-2 rounded-3xl py-3 flex items-center justify-center cursor-pointer my-8 gap-4 lg:text-xl"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 128 128"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M44.5899 4.20998C31.8008 8.64667 20.7714 17.0676 13.1219 28.236C5.47233 39.4044 1.60586 52.7314 2.09037 66.2596C2.57488 79.7879 7.38483 92.8042 15.8137 103.397C24.2426 113.989 35.8461 121.6 48.9199 125.11C59.5192 127.845 70.624 127.965 81.2799 125.46C90.9331 123.292 99.8578 118.654 107.18 112C114.801 104.863 120.332 95.7848 123.18 85.74C126.274 74.8165 126.825 63.3294 124.79 52.16H65.2699V76.85H99.7399C99.051 80.7879 97.5748 84.5463 95.3994 87.9003C93.2241 91.2543 90.3945 94.135 87.0799 96.37C82.8713 99.1553 78.1262 101.029 73.1499 101.87C68.1594 102.798 63.0405 102.798 58.0499 101.87C52.9915 100.825 48.2063 98.7376 43.9999 95.74C37.2414 90.9559 32.1667 84.1592 29.4999 76.32C26.7888 68.3338 26.7888 59.6762 29.4999 51.69C31.3982 46.0921 34.5363 40.9953 38.6799 36.78C43.4219 31.8675 49.4253 28.3559 56.0315 26.6307C62.6377 24.9055 69.5915 25.0333 76.1299 27C81.2379 28.5672 85.9089 31.3068 89.7699 35C93.6566 31.1333 97.5366 27.2566 101.41 23.37C103.41 21.28 105.59 19.29 107.56 17.15C101.665 11.6652 94.7465 7.39702 87.1999 4.58998C73.457 -0.40012 58.4197 -0.534225 44.5899 4.20998Z"
                fill="white"
              />
              <path
                d="M44.5898 4.20996C58.4184 -0.537472 73.4557 -0.406898 87.1998 4.57996C94.7477 7.40607 101.663 11.6948 107.55 17.2C105.55 19.34 103.44 21.34 101.4 23.42C97.5198 27.2933 93.6431 31.1533 89.7698 35C85.9087 31.3067 81.2378 28.5672 76.1298 27C69.5935 25.0264 62.64 24.8912 56.032 26.6094C49.424 28.3275 43.4169 31.8326 38.6698 36.74C34.5261 40.9553 31.388 46.0521 29.4898 51.65L8.75977 35.6C16.1798 20.8856 29.0273 9.6302 44.5898 4.20996Z"
                fill="#E33629"
              />
              <path
                d="M3.25999 51.5001C4.37339 45.9778 6.22325 40.63 8.75999 35.6001L29.49 51.6901C26.7789 59.6763 26.7789 68.3339 29.49 76.3201C22.5833 81.6534 15.6733 87.0134 8.75999 92.4001C2.4115 79.7633 0.475318 65.3651 3.25999 51.5001Z"
                fill="#F8BD00"
              />
              <path
                d="M65.2701 52.1499H124.79C126.825 63.3193 126.274 74.8064 123.18 85.7299C120.332 95.7747 114.801 104.853 107.18 111.99C100.49 106.77 93.7701 101.59 87.0801 96.3699C90.3968 94.1327 93.2278 91.2488 95.4032 87.8912C97.5786 84.5336 99.0537 80.7713 99.7401 76.8299H65.2701C65.2601 68.6099 65.2701 60.3799 65.2701 52.1499Z"
                fill="#587DBD"
              />
              <path
                d="M8.75 92.3998C15.6633 87.0665 22.5733 81.7065 29.48 76.3198C32.1521 84.1618 37.234 90.9588 44 95.7398C48.2195 98.7235 53.015 100.794 58.08 101.82C63.0705 102.748 68.1895 102.748 73.18 101.82C78.1563 100.979 82.9014 99.1052 87.11 96.3198C93.8 101.54 100.52 106.72 107.21 111.94C99.8889 118.597 90.9642 123.239 81.31 125.41C70.6541 127.915 59.5492 127.795 48.95 125.06C40.567 122.822 32.7368 118.876 25.95 113.47C18.7673 107.766 12.9003 100.579 8.75 92.3998Z"
                fill="#319F43"
              />
            </svg>
            LOGIN WITH GOOGLE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
