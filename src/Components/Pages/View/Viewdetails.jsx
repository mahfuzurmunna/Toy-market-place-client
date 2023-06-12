// eslint-disable-next-line no-unused-vars
import React from "react";
import { useLoaderData } from "react-router-dom";
import { FaStar } from "react-icons/fa";


const Viewdetails = () => {
  const singleToy = useLoaderData();
  console.log(singleToy);
  const {
    toyname,
    description,
    selectRating,

    quantity,
    name,
    price,
    email,
    photoURL,
  } = singleToy;
  return (
    <div className="my-container">
      <div className="flex gap-16 items-start mb-16">
        <div>
          <img
            src={photoURL}
            className="w-[430px] h-[480px] object-cover ring-2 p-4 ring-bg2 rounded-3xl"
            alt=""
          />
        </div>

        <div className="w-[50%]">
          <h1 className="text-4xl mb-8 rehn-bold">{toyname}</h1>
          <div className="text-xl rehn-light space-y-3">
            <p>
              Seller: <span className="rehn-regular">{name}</span>
            </p>
            <p>
              Email : <span className="rehn-regular">{email}</span>
            </p>
            <p>
              Price:
              <span className="rehn-bold text-accent text-2xl"> ${price} </span>
            </p>
            <p>
              Rating: {selectRating}
              <FaStar className="inline ml-1 text-accent3 mb-1"></FaStar>
            </p>
            <p>
              Avaiable quantity:{" "}
              <span className="rehn-regular text-2xl"> {quantity} </span>
            </p>
            <p className="text-justify leading-normal pt-4 ">
              <span className="underline rehn-medium">Description:</span> <br /> {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Viewdetails;
