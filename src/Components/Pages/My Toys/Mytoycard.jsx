/* eslint-disable react/prop-types */


import { Link } from "react-router-dom";


const Mytoycard = ({ toy, handleDelete }) => {
  const { _id, toyname, price, selectCategory, quantity, name, photoURL } = toy;







  return (
    <tbody>
      {/* row 1 */}
      <tr>
        <th>
          <button
            onClick={() => handleDelete(_id)}
            className="btn btn-sm bg-primary text-white btn-circle"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </th>
        <td>
          <div className="avatar">
            <div className="mask mask-squircle w-20 h-20">
              {photoURL && (
                <img src={photoURL} alt="Avatar Tailwind CSS Component" />
              )}
            </div>
          </div>
        </td>
        <td className="rehn-medium text-lg">{name}</td>
        <td className="text-para">{toyname}</td>
        <td>{selectCategory}</td>
        <td>{price}</td>
        <td>{quantity}</td>
        <th>
          <Link to={`/updatetoys/${_id}`}>
            <button className="btn bg-accent mr-4 hover:bg-accent2 btn-sm text-white px-4  rounded-xl capitalize rehn-light">
              Update
            </button>
          </Link>
        </th>
      </tr>
    </tbody>
  );
};

export default Mytoycard;
