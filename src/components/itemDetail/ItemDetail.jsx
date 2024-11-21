import React from "react";
import items from "../../mockData/items.json";

import { Link, useNavigate, useParams } from "react-router-dom";
import { addItem } from "../../redux/slices/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const getItemDetail = (id) => items.filter((item) => item.id === id)[0];

function ItemDetail() {
  // Alakalı ürünün id'sini URL'den güvenli bir şekilde almak
  const params = useParams();
  const itemId = parseInt(params?.id);
  // Id varsa alakalı objeyi getirmek
  const item = !!itemId && getItemDetail(itemId);
  const { cart } = useSelector((state) => state.cart);
  // Ürün sepete eklendi mi kontrolü
  const isAdded = cart.findIndex((c) => c.id === itemId) > -1;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center flex-wrap margin-[30px] items-start">
      <Link to="/" className="pl-2">
        {" "}
        &#8592; Geri
      </Link>
      <div className="flex justify-center items-center w-full mt-12">
        <div className="h-[500px] flex">
          <img src={item.image} alt={"Item image"} />
        </div>
        <div className="ml-4 max-w-[500px]">
          <div className="text-[#7c7c7c] text-[0.8rem] mt-2 mx-2">
            {item.brand}
          </div>
          <div className="uppercase ml-2 font-semibold">{item.name}</div>
          <div className="text-[1.1rem] m-2">${item.price}</div>

          <select className="m-2 rounded-md w-[130px] h-[35px] cursor-pointer pl-1">
            <option value={"S"}> Boyut seçin (S)</option>
            <option value={"M"}> Boyut seçin (M)</option>
            <option value={"L"}> Boyut seçin (L)</option>
            <option value={"XL"}> Beden seçin (XL)</option>
          </select>
          <button
            className="text-white bg-[#343434] rounded-md w-[150px] h-[35px] cursor-pointer active:bg-white active:text-current active:border active:border-gray-400"
            onClick={() => {
              if (isAdded) {
                navigate("/cart");
              } else {
                dispatch(addItem(item));
              }
            }}
          >
            {/* Ürün sepete eklendiyse sepete yönlendirmek */}
            {isAdded ? <Link to="/cart">Sepete Git</Link> : "Sepete Ekle"}
          </button>
          <p>
            Lorem Ipsum, baskı ve dizgi işlemlerinde kullanılan sahte metindir.
            Lorem Ipsum, sektörün standart sahte metni olmuştur 1500'lü
            yıllardan beri, bilinmeyen bir matbaacının dizgiyi alıp bir tür
            örnek kitabı yapmak için karıştırdı.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
