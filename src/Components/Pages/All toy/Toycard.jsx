import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const Toycard = ({ toy ,index}) => {
  const {
    _id,
    toyname,
    price,
    selectCategory,
    quantity,
    name,
    photoURL,
  } = toy;
  return (
    <tbody>
      <tr>
        <th>
          {/* Replace the label with the number */}
          <span className="font-bold text-lg">{index + 1}.</span>
        </th>
        <td>
          <div className="avatar">
            <div className="mask mask-squircle w-20 h-20">
              <img src={photoURL} className="" />
            </div>
          </div>
        </td>
        <td className="rehn-medium text-lg">{name}</td>
        <td className="text-para">{toyname}</td>
        <td>{selectCategory}</td>
        <td>{price}</td>
        <td>{quantity}</td>
        <th>
          <Link to={`/alltoys/${_id}`}>
            <button className="btn btn-md bg-accent hover:bg-accent2  text-white  rounded-[1.3rem] capitalize rehn-light">
              View Details
            </button>
          </Link>
        </th>
      </tr>
    </tbody>
  );
};

export default Toycard;
