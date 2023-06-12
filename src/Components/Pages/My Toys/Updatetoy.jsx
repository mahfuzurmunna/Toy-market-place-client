// eslint-disable-next-line no-unused-vars

import { useEffect, useState } from "react";

import toast, { Toaster } from "react-hot-toast";

import { useParams } from "react-router-dom";

const Updatetoy = () => {

  const [toy, setToy] = useState({});

  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:5000/alltoys/${id}`)
      .then((res) => res.json())
      .then((data) => setToy(data));
  }, [toy]);

  const {  photoURL, price, description, quantity,toyname } = toy;

  const handleUpdate = (event) => {
    event.preventDefault();

    const form = event.target;
  

    const price = parseInt(form.price.value);
    const quantity = form.quantity.value;
    const description = form.description.value;
  

    const toyData = {
  
      price,
      quantity,
      description,
    
    };


    fetch(`http://localhost:5000/alltoys/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(toyData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        form.reset();
        if (data.modifiedCount > 0) {
          toast.success("Toy updated Successfully", {
            style: {
              backgroundColor: "#3C6345",
              border: "3px solid #ffffff",
              borderRadius: "30px",
              padding: "16px",
              color: "#ffffff",
              fontSize: "20px",
            },
            iconTheme: {
              primary: "#FDC153",
              secondary: "#FFFAEE",
            },
          });
        }
      });
  };

  // toast

  return (
    <div className="my-container rounded-xl mb-12 ">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-12 ">
        <div className="border-2 border-accent w-full lg:w-[90%] py-12 lg:pt-4 lg:pb-8 px-6 lg:px-12 rounded-3xl">
          <h2 className="text-4xl rehn-bold my-6">
            Update Your Toy :{" "}
            <span>
              <small>{toyname}</small>
            </span>
          </h2>
          <p className="mb-4">
            You can update your toy details here. For more update you can click
            submit button
          </p>
          <form onSubmit={() => handleUpdate(event)} action="">
            {/* Price and Rating */}
            <div className="flex gap-6">
              <div className="w-[50%]">
                <label htmlFor="">Price</label> <br />
                <input
                  type="number"
                  name="price"
                  defaultValue={price}
                  placeholder="Enter price"
                  className=" mt-2 mb-4 border-2 border-x-accent-contentfocus w-full px-4 py-3 rounded-3xl  outline-accent2"
                  required
                />
              </div>
              <div className="w-[50%]">
                <label htmlFor="">Quantity</label> <br />
                <input
                  type="number"
                  defaultValue={quantity}
                  name="quantity"
                  placeholder="Enter quantity"
                  className=" mt-2 mb-4 border-2 border-x-accent-contentfocus w-full px-4 py-3 rounded-3xl  outline-accent2"
                  required
                />
              </div>
            </div>

            {/* detail description */}
            <label htmlFor="">Description</label>
            <textarea
              name="description"
              defaultValue={description}
              rows="5"
              placeholder="Enter Details"
              className=" mt-2 mb-4 border-2 border-x-accent-contentfocus w-full px-4 py-3 rounded-3xl  outline-accent2"
            ></textarea>
            <input
              type="submit"
              className=" transition duration-200  shadow-md  md:mb-0  px-4 py-2 md:px-12 md:py-3 m-2 text-xl rounded-3xl border-transparent border-2 text-white  bg-accent mb-8 w-full cursor-pointer"
              value="Update Item"
            />
            <Toaster />
          </form>
        </div>
        <div className="">
          <img
            src={photoURL}
            className="w-[65%] mx-auto lg:w-full rounded-3xl"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Updatetoy;
