import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const Toycard = ({ toy }) => {
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
      {/* row 1 */}
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={photoURL}  className="w-[500px]" />
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
            <button className="btn bg-accent hover:bg-accent2 btn-sm text-white px-4  rounded-xl capitalize rehn-light">
              View Details
            </button>
          </Link>
        </th>
      </tr>
    </tbody>
  );
};

export default Toycard;
