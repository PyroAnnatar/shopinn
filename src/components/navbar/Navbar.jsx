import React from "react";

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { filterByCategory } from "../../redux/slices/items/itemsSlice";

const Navbar = () => {
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="flex justify-between py-2 px-7">
      <Link
        to="/"
        className="text-2xl font-semibold flex justify-center items-center"
      >
        <h2>LikeMuClothes</h2>
      </Link>
      <ul className="flex justify-between items-center gap-4">
        <Link
          to="category/gender/women"
          // Alakalı kategori ve filtreye yollarken önden filtreleme dispatchlemek
          onClick={() =>
            dispatch(filterByCategory({ category: "gender", filter: "female" }))
          }
        >
          <li>Kadın</li>
        </Link>
        <Link
          to="category/gender/men"
          onClick={() =>
            dispatch(filterByCategory({ category: "gender", filter: "male" }))
          }
        >
          <li>Erkek</li>
        </Link>
        <li>Giyim</li>
        <Link to="category/brands">
          <li>Markalar</li>
        </Link>
        <Link to="/cart">
          <li>
            &#128722;{" "}
            <span className="card-count" style={{ color: "red" }}>
              ({cart.length})
            </span>
          </li>
        </Link>
        <Link to="/orders">
          <li>Siparişler</li>
        </Link>
        <button className="m-2 bg-[rgb(255,101,101)] text-md py-2 px-3 cursor-pointer">
          Merhaba, Namık
        </button>
      </ul>
    </div>
  );
};

export default Navbar;
