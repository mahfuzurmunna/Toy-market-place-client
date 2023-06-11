import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/Authprovider";
import Mytoycard from "./Mytoycard";
import Loading from "../Loading/Loading";

const Mytoys = () => {
  const { user, } = useContext(AuthContext);
  const [toys, setToys] = useState([]);
  const [price, setPrice] = useState(1);
  const [loading, setLoading] = useState(true);
  console.log(user.email);
  console.log(loading);

  const handlePriceChange = (event) => {
    let value = parseInt(event.target.value);
    setPrice(value);
    console.log(event.target.value);
  };

  const url = `http://localhost:5000/alltoys/${user?.email}&${price}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setToys(data);
      });
  }, [url]);

  console.log(toys);
  return (
    <div className="my-container">
      {loading ? <Loading /> : <></>}
      <div className="overflow-x-auto">
        <select
          onChange={handlePriceChange}
          defaultValue={"DEFAULT"}
          className="select selcet-bordered text-base rounded-xl border border-bg2 my-5"
        >
          <option value="DEFAULT" disabled>
            Sort by Price
          </option>
          <option value="1">Low to High </option>
          <option value="-1"> High to Low</option>
        </select>

        <table className="table border border-bg2">
          {/* head */}
          <thead>
            <tr className="rehn-normal text-primary text-base underline">
              <th></th>
              <th>Image</th>
              <th className="pr-16">Seller Name</th>
              <th>Toy Name</th>
              <th>Sub Category</th>
              <th>Price</th>
              <th>Available Quantity</th>
            </tr>
          </thead>
          {toys.map((toy) => (
            <Mytoycard toy={toy} key={toy._id}></Mytoycard>
          ))}
          {/* foot */}
        </table>
      </div>
    </div>
  );
};

export default Mytoys;
