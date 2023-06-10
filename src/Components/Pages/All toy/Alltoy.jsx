import { useEffect, useState } from "react";
import Toycard from "./Toycard";



const Alltoy = () => {
  const [toys, setToys] = useState([]);

  useEffect(()=> {
    fetch('http://localhost:5000/alltoys').then(res => res.json()).then(data => {
      setToys(data);
    })
  },[])
  console.log(toys);
  return (
    <div className="my-container">
      <div className="overflow-x-auto">
        <table className="table border border-bg2">
          {/* head */}
          <thead >
            <tr className="rehn-normal text-primary text-base underline">
              <th>
              
              </th>
              <th>Image</th>
              <th className="pr-16">Seller Name</th>
              <th>Toy Name</th>
              <th>Sub Category</th>
              <th>Price</th>
              <th>Available Quantity</th>
            </tr>
          </thead>
          {toys.map((toy) => (
            <Toycard toy={toy} key={toy._id}></Toycard>
          ))}
          {/* foot */}
        </table>
      </div>
    </div>
  );
};

export default Alltoy;