import React from "react";
import Item from "../item/Item";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function ItemList() {
  // Tüm ürünleri çekip göstermek
  const { all } = useSelector((state) => state.items);

  return (
    <div className="grid grid-cols-4 place-items-start gap-2 px-4">
      {all.map((item) => (
        <Link to={`/item/${item.id}`} key={item.id}>
          <Item
            name={item.name}
            rating={item.rating}
            price={item.price}
            saleDiscount={item.saleDiscount}
            image={item.image}
            brand={item.brand}
          />
        </Link>
      ))}
    </div>
  );
}

export default ItemList;
