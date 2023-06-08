// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
   const currentYear = new Date().getFullYear();
  return (
    <div className=" bg-bg">
      <div className="my-container">
        <div className="text-center">
          {/* logo */}
          <Link>
            <div className="flex items-center gap-4 cursor-pointer py-4 justify-center">
              <img src={logo} alt="" className=" w-[40px] lg:w-[40px]" />
              <h2 className="rehn-bold text-2xl lg:text-4xl">Kidquest</h2>
            </div>
          </Link>
          <h2 className="text-4xl lg:text-6xl rehn-bold my-4">
            Subscribe Newsletter
          </h2>

          {/* input text */}
          <div className="my-10">
            <input
              type="text"
              placeholder="Enter your Email"
              className="placeholder:rehn-light placeholder:text-gray-400 rounded-3xl w-50% md:w-[23%] px-7 py-4 lg:mr-4 mb-6"
            />
            <button className="bg-accent3 rehn-medium px-6 py-4 md:px-10 md:py-4 rounded-3xl text-para text-xl ">
              Subscribe
            </button>
          </div>
        </div>

        {/* footer info */}
        <div className="grid grid-cols-2 lg:grid-cols-4 items-center mt-16 justify-items-center text-center md:text-left ">
          <div className="">
            <h2 className="mb-7 text-2xl rehn-bold">Browse Social Media</h2>
            <div className="space-y-4 text-xl mb-8 md:mb-0 cursor-pointer hidden md:block ">
              <div className="flex items-center justify-center md:justify-start   gap-4">
                <span>
                  {" "}
                  <FaFacebook className="text-2xl text-primary hover:text-accent2 " />
                </span>
                <p>Facebook</p>
              </div>
              <div className="flex items-center justify-center md:justify-start  gap-4">
                <span>
                  {" "}
                  <FaTwitter className="text-2xl text-primary hover:text-accent2" />
                </span>
                <p> Twitter</p>
              </div>
              <div className="flex items-center justify-center md:justify-start   gap-4">
                <FaInstagram className="text-2xl text-primary hover:text-accent2" />
                <p> Instagram</p>
              </div>
            </div>
          </div>
          <div className=" mb-8 md:mb-0 ">
            <h2 className="mb-7 text-2xl rehn-bold">Ground Rule</h2>
            <div className="space-y-4 hidden md:block text-xl cursor-pointer">
              <p>Terms & Conditions</p>

              <p> Privacy Policy</p>

              <p>Shipping & Delivery</p>
            </div>
          </div>
          <div className=" mb-8 md:mb-0 ">
            <h2 className="mb-7 text-2xl rehn-bold">About Us</h2>
            <div className="space-y-4 hidden md:block  text-xl cursor-pointer">
              <p>How it Works</p>

              <p> Reviews</p>

              <p>Blog</p>
            </div>
          </div>
          <div className=" mb-8 md:mb-0">
            <h2 className="mb-7 text-2xl rehn-bold">Support</h2>
            <div className="space-y-4 hidden md:block  text-xl cursor-pointer">
              <p>Contact Us</p>

              <p> FAQs</p>

              <p>Address</p>
            </div>
          </div>
        </div>

        <p className="text-sm mx-auto text-center  rehn-light rounded-full mt-12 ">
          &copy; {currentYear} All rights reserved to PH TEAM.
        </p>
      </div>
    </div>
  );
};

export default Footer;
