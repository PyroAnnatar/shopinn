import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { filterByCategory } from "../../redux/slices/items/itemsSlice";

const BrandsPage = () => {
  // Tüm ürünleri slice'tan çekmek
  const { all } = useSelector((state) => state.items);
  const dispatch = useDispatch();
  // Ürünlerin markalarını tekrarlayan olmayan şekilde almak
  const brands = [...new Set(all.map((item) => item.brand))];

  return (
    <section>
      <h2 className="text-4xl mb-2">Markalar</h2>
      <ul className="grid grid-cols-5 gap-2 w-3/4 place-items-center text-xl">
        {brands.map((brand) => (
          <Link
            key={brand}
            className="shadow-md rounded-lg w-full h-20 flex justify-center items-center p-2"
            to={`/category/brands/${brand}`}
            onClick={() =>
              dispatch(filterByCategory({ category: "brand", filter: brand }))
            }
          >
            <li>{brand}</li>
          </Link>
        ))}
      </ul>
    </section>
  );
};

export default BrandsPage;
