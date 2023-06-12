import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/Authprovider";
import Mytoycard from "./Mytoycard";
import Loading from "../Loading/Loading";
import toast, { Toaster } from "react-hot-toast";


import Swal from "sweetalert2";

const Mytoys = () => {
  const { user } = useContext(AuthContext);
  const [toys, setToys] = useState([]);
  const [price, setPrice] = useState(1);
  const [loading, setLoading] = useState(true);
  console.log(user.email);
  // console.log(loading);
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/alltoys/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
       
            if(data.deletedCount >0 ){
               toast.success("Toy Item Deleted", {
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
             const remaining = toys.filter (toy => toy._id !== id);
             setToys(remaining);
            }
          });
    
      }
    });
  };

  const handlePriceChange = (event) => {
    let value = parseInt(event.target.value);
    setPrice(value);
    console.log(event.target.value);
  };

  const url = `http://localhost:5000/alltoy/${user?.email}&${price}`;
  useEffect(() => {
   if(user?.email){
     fetch(url)
       .then((res) => res.json())
       .then((data) => {
         setLoading(false);
         setToys(data);
       });
   }
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
            <Mytoycard
              toy={toy}
              key={toy._id}
              handleDelete={handleDelete}
            ></Mytoycard>
          ))}
          {/* foot */}
          <Toaster />
        </table>
      </div>
    </div>
  );
};

export default Mytoys;
