/* eslint-disable react/prop-types */
const Toycard = ({ toy }) => {
  const {
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
        <th >
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={photoURL} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
        </td>
        <td className="rehn-medium text-lg">{name}</td>
        <td className="text-para">{toyname}</td>
        <td>{selectCategory}</td>
        <td>{price}</td>
        <td>{quantity}</td>
        <th>
          <button className="btn bg-accent hover:bg-accent2 btn-sm text-white px-4  rounded-xl capitalize rehn-light">
            details
          </button>
        </th>
      </tr>
    </tbody>
  );
};

export default Toycard;
