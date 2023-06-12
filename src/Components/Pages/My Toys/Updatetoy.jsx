// eslint-disable-next-line no-unused-vars

import { useContext, useEffect, useState } from "react";
import add from "../../../assets/add.png";
import toast, { Toaster } from "react-hot-toast";
import { AuthContext } from "../../AuthProvider/Authprovider";
import { useParams } from "react-router-dom";

const Updatetoy = () => {
  const [category, setCategory] = useState("");
  const [rating, setRating] = useState("");
  const { user } = useContext(AuthContext);
  const [toy, setToy] = useState({});

  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:5000/alltoys/${id}`)
      .then((res) => res.json())
      .then((data) => setToy(data));
  }, [id]);

  const {
    toyname,
    email,
    selectCategory,
    price,
    description,
    quantity,
    name,
    photoURL,
  } = toy;

  const handleCategory = (event) => {
    setCategory(event.target.value);
  };
  const handleRating = (event) => {
    setRating(event.target.value);
  };

  const handleAddtoy = (event) => {
    event.preventDefault();

    const form = event.target;
    const toyname = form.toyname.value;
    const name = form.name.value;
    const email = user?.email || form.email.value;
    const selectCategory = category;
    const selectRating = rating;
    const price = parseInt(form.price.value);
    const quantity = form.quantity.value;
    const description = form.description.value;
    const photoURL = form.photourl.value;

    const toyData = {
      toyname,
      name,
      email,
      selectCategory,
      selectRating,
      price,
      quantity,
      description,
      photoURL,
    };

    console.log(toyData);

    fetch("http://localhost:5000/alltoys", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(toyData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        form.reset();
        if (data.insertedId) {
          toast.success("Toy successfully Added", {
            style: {
              backgroundColor: "#FDC153",
              border: "3px solid #ffffff",
              borderRadius: "30px",
              padding: "16px",
              color: "#ffffff",
              fontSize: "20px",
            },
            iconTheme: {
              primary: "#713200",
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
          <h2 className="text-4xl rehn-bold my-6">Update Your Toy</h2>
          <p className="mb-4">
            You can update your toy details here. For more update you can click
            submit button
          </p>
          <form onSubmit={handleAddtoy} action="">
            {/* toy name and seller */}
            <div className="flex gap-6">
              <div className="w-[50%]">
                <label htmlFor="">Toy Name</label> <br />
                <input
                  type="text"
                  name="toyname"
                  defaultValue={toyname}
                  placeholder="Enter toy name"
                  className=" mt-2 mb-4 border-2 border-x-accent-contentfocus w-full px-4 py-3 rounded-3xl outline-accent2"
                  required
                />
              </div>
              <div className="w-1/2">
                <label htmlFor="">Seller Name</label> <br />
                <input
                  type="text"
                  name="name"
                  defaultValue={name}
                  placeholder="Enter name"
                  className=" mt-2 mb-4 border-2 border-x-accent-contentfocus w-full px-4 py-3 rounded-3xl  outline-accent2"
                  required
                />
              </div>
            </div>

            {/* seller email and sub-category */}
            <div className="flex gap-6">
              <div className="w-[50%]">
                <label htmlFor="">Seller Email</label> <br />
                <input
                  type="email"
                  name="email"
                  defaultValue={email}
                  placeholder="Enter email"
                  className=" mt-2 mb-4 border-2 border-x-accent-contentfocus w-full px-4 py-3 rounded-3xl  outline-accent2"
                  required
                />
              </div>
              <div className="w-1/2">
                <label htmlFor="">Category</label> <br />
                <select
                  type="text"
                  name="category"
                  defaultValue={selectCategory}
                  onChange={handleCategory}
                  className=" mt-2 mb-4 border-2 border-x-accent-contentfocus w-full px-4 py-3 rounded-3xl  outline-accent2"
                >
                  <option
                    className="text-sm text-gray-400"
                    disabled
                    selected
                    required
                  >
                    Select Category
                  </option>

                  <option value="Airplane" className="text-lg">
                    Airplane
                  </option>
                  <option value="Vehicle" className="text-lg">
                    Vehicle
                  </option>
                  <option value="Puzzle" className="text-lg">
                    Puzzle
                  </option>
                </select>
              </div>
            </div>

            {/* Price and Rating */}
            <div className="flex gap-6">
              <div className="w-[50%]">
                <label htmlFor="">Price</label> <br />
                <input
                  type="text"
                  name="price"
                  defaultValue={price}
                  placeholder="Enter price"
                  className=" mt-2 mb-4 border-2 border-x-accent-contentfocus w-full px-4 py-3 rounded-3xl  outline-accent2"
                  required
                />
              </div>
              <div className="w-1/2">
                <label htmlFor="">Rating</label> <br />
                <select
                  type="text"
                  name="rating"
                  defaultValue={rating}
                  onChange={handleRating}
                  placeholder="Enter Rating"
                  className=" mt-2 mb-4 border-2 border-x-accent-contentfocus w-full px-4 py-3 rounded-3xl  outline-accent2"
                  required
                >
                  <option className="text-sm" disabled>
                    ratings
                  </option>
                  <option value="1" className="text-lg">
                    1 Star
                  </option>
                  <option value="2" className="text-lg">
                    2 Star
                  </option>
                  <option value="3" className="text-lg">
                    3 Star
                  </option>
                  <option value="4" className="text-lg">
                    4 Star
                  </option>
                  <option value="5" className="text-lg">
                    5 Star
                  </option>
                </select>
              </div>
            </div>

            {/* url and quantity */}
            <div className="flex gap-6">
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
              <div className="w-1/2">
                <label htmlFor="">Photo Url</label> <br />
                <input
                  type="text"
                  name="photourl"
                  defaultValue={photoURL}
                  placeholder="Enter photo url"
                  className=" mt-2 mb-4 border-2 border-x-accent-contentfocus w-full px-4 py-3 rounded-3xl  outline-accent2"
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
              value="Submit"
              // onClick={notify}
            />
            <Toaster />
          </form>
        </div>
        <div className="">
          <img
            src={add}
            className="w-[65%] mx-auto lg:w-full rounded-3xl"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Updatetoy;
