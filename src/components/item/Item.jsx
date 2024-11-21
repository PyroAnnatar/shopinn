import React from "react";

function Item({ name, rating, price, image, brand }) {
  return (
    <div className="inline-block cursor-pointer rounded-lg border border-[#e7e7e7]">
      <img src={image} alt={"Item image"} className="w-full h-auto" />
      <div className="text-[#7c7c7c] text-[0.8rem] mt-2 ml-2">{brand}</div>
      <div className="uppercase ml-2 font-semibold">{name}</div>
      <div className="flex w-full justify-between">
        <div className="text-[1.1rem] m-2">${price}</div>
        <div className="m-2">{rating}&#9733;</div>
      </div>
    </div>
  );
}

export default Item;
