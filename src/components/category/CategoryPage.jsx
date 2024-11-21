import React, { useEffect } from "react";
import Item from "../item/Item";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { filterByCategory } from "../../redux/slices/items/itemsSlice";
import BrandsPage from "../brand/BrandsPage";

// Alakalı kategori ve varsa filtreyi URL'den alıp filtreli bi ürünler listesi gösteren component
const CategoryPage = () => {
  const dispatch = useDispatch();
  // Filtreli ürünler array'ini çekmek
  const { filtered } = useSelector((state) => state.items);
  // URL'den hem kategori hem filtreyi almak
  const { category, filter } = useParams();

  // URL girilerek gidilirse ihtimali için otomatik dispatchleme
  useEffect(() => {
    if (category === "brands" && filter) {
      // Kategori brands ise ve filtre varsa alakalı yapıda dispatch
      dispatch(filterByCategory({ category: "brand", filter }));
    } else {
      // Sözlük severler
      const genderDict = {
        men: "male",
        women: "female",
      };
      dispatch(filterByCategory({ category, filter: genderDict[filter] }));
    }
  }, [category, filter]);

  return (
    <>
      {category === "brands" && !filter ? (
        <BrandsPage />
      ) : (
        <div className="grid grid-cols-4 place-items-start gap-2 px-4">
          {filtered.map((item) => (
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
      )}
    </>
  );
};

export default CategoryPage;
