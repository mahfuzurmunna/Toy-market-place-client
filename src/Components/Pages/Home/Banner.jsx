// eslint-disable-next-line no-unused-vars
import React from 'react';
import bird from "../../../assets/bird.png"
import { FaFacebook, FaInstagram,  FaTwitter,  } from "react-icons/fa";

const Banner = () => {
  return (
    <div>
      <div className="bg-bg-nav2 bg-cover  lg:w-full h-[720px] lg:h-[980px] relative bottom-32 -z-30">
        <div className="my-container">
          <div className="   py-36 lg:w-[70%] text-center lg:text-left">
            <div>
              <img
                src={bird}
                className="w-[50px] relative top-4 left-[190px] lg:left-[300px] lg:top-6"
                alt=""
              />
              <h1 className="rehn-bold text-4xl leading-tight lg:text-6xl text-primary lg:leading-tight capitalize">
                Experience pure joy of discovering a shiny, new collection of
                toys!
              </h1>
            </div>
            <p className="text-para text-xl lg:text-2xl rehn-light leading-normal mt-8 mb-6 lg:mb-10 mx-auto md:mx-0 w-3/4">
              We deliver boxes of fantastic, hand-picked, age-appropriate toys,
              books, and puzzles, straight to your door.
            </p>

            <div className="relative z-10">
              <button className="btn-secondary cursor-pointer mt-4 lg:mt-8">
                Get Your Toys
              </button>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-4 lg:gap-8 mt-8 lg:mt-36">
              <p className="text-xl">Find Us On:</p>
              <FaFacebook className="text-2xl text-primary hover:text-accent2" />
              <FaTwitter className="text-2xl text-primary hover:text-accent2" />
              <FaInstagram className="text-2xl text-primary hover:text-accent2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;