import { useEffect, useState } from "react";
import Toycard from "./Toycard";
import Loading from "../Loading/Loading";
import useTitle from "../../../hooks/useTitle";

const Alltoy = () => {
  const [toys, setToys] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchItem, setSearchitem] = useState("");
  useTitle("Kidquest | Alltoy");
  const handleSearch = (event) => {
    const name = event.target.value;
    console.log(name);
    setSearchitem(name);
  };
  useEffect(() => {
    fetch("https://kidquest-toy-marketplace-mahfuzurmunna.vercel.app/alltoys")
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
        setLoading(false);
      });
  }, []);
  console.log(toys);
  return (
    <div className="my-container">
      {loading ? <Loading /> : <></>}
      <div className="overflow-x-auto">
        <input
          onChange={handleSearch}
          type="search"
          name=""
          id=""
          placeholder="Search by toy name "
          className="w-1/5 px-4 py-3 rounded-lg border border-bg2 my-6"
        />
         
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
          {toys
            .filter(
              (toy) =>
                searchItem === "" ||
                toy.toyname.toLowerCase().includes(searchItem.toLowerCase())
            )
            .map((toy, index) => (
              <Toycard toy={toy} index={index} key={toy._id} />
            ))}
         
          {/* foot */}
        </table>
      </div>
    </div>
  );
};

export default Alltoy;
