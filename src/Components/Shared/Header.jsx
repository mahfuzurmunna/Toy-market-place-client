// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from "react";
import logo from "../../assets/logo.png";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/Authprovider";
import { Tooltip } from "react-tooltip";


const Header = () => {
  const { user, logOutUser } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // console.log(user);

  const handleLogout = () => {
    logOutUser()
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  };
  return (
    <div className=" flex items-center justify-between px-4  mx-auto lg:py-4 sm:max-w-xl md:max-w-full lg:w-[1350px] relative z-50 ">
      {/* logo */}
      <Link>
        <div className="flex items-center gap-4 cursor-pointer py-4">
          <img src={logo} alt="" className=" w-[40px] lg:w-[50px]" />
          <h2 className="rehn-bold text-2xl lg:text-4xl">Kidquest</h2>
        </div>
      </Link>

      {/* nav links */}
      <div>
        <ul className="lg:flex text-xl hidden gap-8 ">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "default")}
          >
            <li>Home</li>
          </NavLink>
          <NavLink
            to="/alltoys"
            className={({ isActive }) => (isActive ? "active" : "default")}
          >
            <li>All Toy</li>
          </NavLink>
          {user ? (
            <>
              <NavLink
                to="/mytoys"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                <li>My Toy</li>
              </NavLink>
              <NavLink
                to="/addtoy"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                <li>Add Toy</li>
              </NavLink>
            </>
          ) : (
            <></>
          )}
          <NavLink
            to="/blog"
            className={({ isActive }) => (isActive ? "active" : "default")}
          >
            {" "}
            <li>Blog</li>
          </NavLink>
        </ul>
      </div>
      <Tooltip id="my-tooltip" />
      {/* profile and login */}
      {user ? (
        <div className="hidden lg:flex lg:items-center gap-3">
          <img
            src={user.photoURL}
            className="rounded-full p-1 w-14 h-14 ring-2 ring-primary"
            aria-label={user.displayName}
            
            data-tooltip-id="my-tooltip"
            data-tooltip-content={user.displayName}
          />

          <NavLink>
            <button onClick={handleLogout} className="btn-primary">
              Sign Out
            </button>
          </NavLink>
        </div>
      ) : (
        <div className="hidden lg:inline-block">
          <NavLink to="/login">
            <button className="btn-primary">Sign In</button>
          </NavLink>
        </div>
      )}

      {/* mobile version */}
      <div className="lg:hidden">
        <button
          aria-label="Open Menu"
          title="Open Menu"
          className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
          onClick={() => setIsMenuOpen(true)}
        >
          <svg className="w-5 text-primary" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
            />
            <path
              fill="currentColor"
              d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
            />
            <path
              fill="currentColor"
              d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
            />
          </svg>
        </button>
        {isMenuOpen && (
          <div className="absolute z-10 top-0 left-0 w-full ">
            <div className="p-10 bg-primary border rounded h-[100vh] shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <Link>
                  <div className="flex items-center gap-3 cursor-pointer">
                    <img src={logo} alt="" className="w-[40px]" />
                    <h2 className="rehn-bold text-white md:text-primary text-2xl">
                      Kidquest
                    </h2>
                  </div>
                </Link>
                <div>
                  <button
                    aria-label="Close Menu"
                    title="Close Menu"
                    className="p-2 -mt-2 -mr-2 bg-bg transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <nav className="mt-12">
                <ul className="space-y-4 text-center ">
                  <li>
                    <NavLink
                      to="/"
                      className={({ isActive }) =>
                        isActive ? "active2" : "default2"
                      }
                    >
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/alltoys"
                      className={({ isActive }) =>
                        isActive ? "active2" : "default2"
                      }
                    >
                      All Toy
                    </NavLink>
                  </li>
                  {user ? (
                    <>
                      <li>
                        <NavLink
                          to="/mytoys"
                          className={({ isActive }) =>
                            isActive ? "active2" : "default2"
                          }
                        >
                          My Toy
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/addtoy"
                          className={({ isActive }) =>
                            isActive ? "active2" : "default2"
                          }
                        >
                          Add Toy
                        </NavLink>
                      </li>
                    </>
                  ) : (
                    <></>
                  )}
                  <li>
                    <NavLink
                      to="/blog"
                      className={({ isActive }) =>
                        isActive ? "active2" : "default2"
                      }
                    >
                      {" "}
                      Blog
                    </NavLink>
                  </li>
                  {user ? (
                    <li className="flex flex-col items-center mt-4">
                      <img
                        src={user.photoURL}
                        className="rounded-full p-1 w-14 h-14 ring-2 ring-primary"
                        aria-label={user.displayName}
                        title={user.displayName}
                      />

                      <NavLink>
                        <button
                          onClick={handleLogout}
                          className={`${({ isActive }) =>
                            isActive
                              ? "active2"
                              : "default2"} rounded-3xl text-xl bg-accent text-white px-6 py-3 mt-4`}
                        >
                          Sign Out
                        </button>
                      </NavLink>
                    </li>
                  ) : (
                    <li className="mt-4">
                      <NavLink to="/login">
                        <button className="rounded-3xl text-xl bg-accent text-white px-6 py-3 mt-4">
                          Sign In
                        </button>
                      </NavLink>
                    </li>
                  )}
                </ul>
              </nav>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
