// eslint-disable-next-line no-unused-vars
import React from "react";
import Banner from "./Banner";
import plane from "../../../assets/plane.png";
import plane2 from "../../../assets/plane2.png";
import Howto from "./Howto";
import puzzle from "../../../assets/puzzle2.png";
import Gallery from "./Gallery";

import Shopcategory from "./Shopcategory";
import { useState, useEffect } from "react";

const Home = () => {
  const [toys, setToys] = useState([]);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    fetch("http://localhost:5000/alltoys")
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  }, []);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const categories = ["Airplane", "Vehicle", "Puzzle"];

  // Filter the toys based on the active tab category
  const filteredToys = toys.filter(
    (toy) => toy.selectCategory === categories[activeTab]
  );

  return (
    <div className="bg-bg relative z-10">
      <Banner />
      <div className="my-container">
        {/* gallery section */}
        <div className="mb-16">
          <h2 className="title text-center ">Our Gallery</h2>
        
          <Gallery />
        </div>

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
              <img
                src={plane}
                className="rounded-[30px] mx-auto lg:mx-0 p-2 w-[80%] lg:w-[90%]"
                alt=""
              />
            </div>
            <div className="lg:w-2/3">
              <h2 className="rehn-bold text-4xl lg:text-7xl mb-8">
                Bigger Toys
              </h2>
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
        {/* category section */}
        <div className="mt-32">
          <h2 className="text-center rehn-bold text-3xl lg:text-6xl">
            Best Sellers
          </h2>
          <p className="rehn-light text-base mt-2 text-center">
            - Quality Products -{" "}
          </p>
          <div className="flex gap-8 items-center justify-center  mt-8">
            {categories.map((category, index) => (
              <span
                key={index}
                className={`cursor-pointer text-xl px-6 ${
                  activeTab === index
                    ? "bg-accent px-4 py-3 rounded-2xl text-white"
                    : "underline"
                }`}
                onClick={() => handleTabClick(index)}
              >
                {category}
              </span>
            ))}
          </div>
          <div className="grid  md:grid-cols-2 lg:grid-cols-3 mt-8 justify-items-center">
            {filteredToys.map((toy) => (
              <Shopcategory key={toy._id} toy={toy} />
            ))}
          </div>
        </div>

        {/* extra section */}
        <div className="bg-[#7F95EC] rounded-3xl relative my-16">
          <div className="flex flex-col justify-center text-center md:text-start lg:justify-between lg:flex-row items-center  gap-12 py-20 px-6 lg:px-12 text-white h-[625px] ">
            <div className="lg:w-[60%] pl-12">
              <h2 className="rehn-bold text-4xl lg:text-6xl mb-8">
                Improve Childs <br /> Brain Growth
              </h2>
              <p className="rehn-light text-xl leading-normal  lg:text-xl lg:leading-relaxed my-4 lg:my-10 lg:text-justify">
                Our members can borrow fully assembled larger items from just
                $10 a month eacch (minimum 2 months) with no packaging to throw
                away.
              </p>
              <button className="btn-white">Find Store</button>
            </div>
            <div>
              <img
                src={puzzle}
                className="rounded-[30px] mx-auto lg:mx-0 ml-4 w-[70%] lg:w-[85%]"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
