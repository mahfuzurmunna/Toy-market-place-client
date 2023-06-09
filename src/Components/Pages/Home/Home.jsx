// eslint-disable-next-line no-unused-vars
import React from "react";
import Banner from "./Banner";
import plane from "../../../assets/plane.png";
import plane2 from "../../../assets/plane2.png";
import Howto from "./Howto";

const Home = () => {
  return (
    <div className="bg-bg relative z-10">
      <Banner />
      <div className="my-container">
        {/* how to buy section */}
        <Howto />

        {/* bigger toy section */}
        <div className="bg-accent rounded-3xl relative">
          <img
            src={plane2}
            className="rounded-[30px] absolute right-4 w-24 lg:w-56 top-4"
            alt=""
          />
          <div className="flex flex-col justify-center text-center md:text-start lg:justify-start lg:flex-row items-center  gap-2 py-20 px-6 lg:px-16 text-white h-[800px] ">
            <div>
              <img src={plane} className="rounded-[30px] mx-auto lg:mx-0 p-2 w-[80%] lg:w-[90%]" alt="" />
            </div>
            <div className="lg:w-2/3">
              <h2 className="rehn-bold text-4xl lg:text-7xl mb-8">Bigger Toys</h2>
              <p className="rehn-light text-xl leading-normal  lg:text-2xl lg:leading-relaxed my-4 lg:my-10 lg:text-justify">
                Members can rent fully assembled, larger items for just $10 per
                month each (minimum 2 months), eliminating packaging waste and
                the need for batteries. Plus, when your kids are done, they wont
                occupy precious home space.
              </p>
              <button className="btn-white">Go to Store</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
