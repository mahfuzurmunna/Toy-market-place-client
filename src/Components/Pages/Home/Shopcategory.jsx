/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { FaStar } from "react-icons/fa";
import { BsArrowUpRight } from "react-icons/bs";
import toast, { Toaster } from "react-hot-toast";
import { AuthContext } from '../../AuthProvider/Authprovider';

const Shopcategory = ({toy}) => {
  const {user} = useContext(AuthContext);
  const { _id, toyname, price, selectCategory, quantity, name, photoURL,selectRating } = toy;
  const hanldeToast = () => {
  alert('you have to login at first')
  }
  return (
    <div className="mx-auto border-2 p-4 mt-4 rounded-3xl text-center shadow-md shadow-bg2">
   
      <img
        src={photoURL}
        className="w-[300px] object-cover h-[325px] rounded-3xl p-2"
        alt=""
      />
      <h2 className="rehn-medium text-3xl text-primary">{toyname}</h2>
      <div className="mb-8 mt-4 space-y-2">
        <p className="text-lg text-para rehn-light">
          Price: <span className="rehn-bold"> ${price}.00</span>
        </p>
        <p className="text-lg text-para  rehn-light pb-4">
          Rating: {selectRating}
          <FaStar className="inline ml-1 text-accent3 mb-1"></FaStar>
        </p>
        <span>
          {user ? (
            <Link to={`/alltoys/${_id}`}>
              <button className="btn-outline">
                View Details
                <BsArrowUpRight className="ml-2 inline"></BsArrowUpRight>
              </button>
            </Link>
          ) : (
            <Link to="/login">
              <button onClick={hanldeToast} className="btn-outline">
                View Details
                <BsArrowUpRight className="ml-2 inline"></BsArrowUpRight>
              </button>
            </Link>
          )}
        </span>
      </div>
    </div>
  );
};

export default Shopcategory;