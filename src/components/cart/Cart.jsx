import React from "react";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Cart() {
  // Store'dan slice'a erişim
  const { cart } = useSelector((state) => state.cart);

  return (
    <div className="max-w-[500px]">
      <h1 className="text-4xl mb-2">Sepet</h1>
      {!cart.length ? (
        <p>Ürün Eklenmedi.Lütfen sepetinize bir şey ekleyin</p>
      ) : (
        <>
          <div className="cart-list">
            {cart.map((item) => (
              <div
                className="border border-[#cdcdcd] text-left rounded-2xl p-2 w-full mb-3"
                key={item.id}
              >
                <div className="text-[1.1rem] m-2">${item.price}</div>
                <div className="uppercase ml-2 font-semibold">{item.name}</div>
                <div className="n">(Beklenen Teslimat Süresi 3 - 6 gün)</div>
              </div>
            ))}
          </div>
          <Link to="/checkout">
            <button className="text-white bg-[#343434] rounded-md w-[150px] h-[35px] cursor-pointer active:bg-white active:text-current active:border active:border-gray-40">
              Sonraki
            </button>
          </Link>
        </>
      )}
    </div>
  );
}

export default Cart;
