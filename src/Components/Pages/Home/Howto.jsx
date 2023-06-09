// eslint-disable-next-line no-unused-vars
import React from "react";
import crane from "../../../assets/crane.png";
import cube from "../../../assets/cube.png";
import swap from "../../../assets/swap.png";
const Howto = () => {
  return (
    <div className="text-center mb-44 mx-16">
      <h2 className="title pb-8">How to Buy?</h2>
      <div className="flex flex-col md:flex-row items-center gap-4 justify-between ">
        <div className="">
          <img src={crane} className="w-3/4 mx-auto" alt="" />
          <h2 className="text-3xl rehn-medium my-4">Choose a Toy</h2>
          <p className="text-xl rehn-light mx-auto ">
            Pick from over 2,000 of the latest  <br /> must have toys
          </p>
        </div>

        <div>
          <img src={cube} className="w-3/4 mx-auto" alt="" />
          <div>
            <h2 className="text-3xl rehn-medium my-4">Make them Play</h2>
            <p className="text-xl rehn-light mx-auto">
              Let the kids discover the toys which <br /> will build confidence
            </p>
          </div>
        </div>
        <div>
          <img src={swap} className="w-3/4 mx-auto" alt="" />
          <h2 className="text-3xl rehn-medium my-4">Swap & Repeat</h2>
          <p className="text-xl rehn-light mx-auto">
            Return any unloved toy and swap <br /> it for something else
          </p>
        </div>
      </div>
    </div>
  );
};

export default Howto;
