import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/Authprovider";


const Mytoys = () => {
  const {user} = useContext(AuthContext);
 const [toys, setToys ] = useState([]);
//  console.log(user);
  const url = `http://localhost:5000/alltoys?email=${user?.email}`;

  useEffect(() => {
    fetch(url).then(res => res.json()).then(data => setToys(data))
    console.log(toys)
  },[url])
  return (
    <div>
      
    </div>
  );
};

export default Mytoys;