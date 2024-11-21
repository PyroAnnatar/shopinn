import React, { useState } from "react";

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addOrder } from "../../redux/slices/orderList/orderListSlice";
import { clearCart } from "../../redux/slices/cart/cartSlice";

const Checkout = () => {
  // Store'dan slice'lara erişim
  const { cart } = useSelector((state) => state.cart);
  const { orderList } = useSelector((state) => state.orderList);
  const dispatch = useDispatch();
  const { discount, extraFees, tax } = { discount: 20, extraFees: 99, tax: 5 };
  const subTotal = Math.floor(cart?.reduce((sum, curr) => sum + curr.price, 0));
  const total = Math.floor(subTotal + 99 + 5 - (subTotal + 99 + 5) * 0.2);
  const [isOrdered, setIsOrdered] = useState(false);
  const handlePay = () => {
    // Siparişi ve alakalı bilgileri ekleyen dispatch ve sonrasında sepeti temizleyen dispatch
    dispatch(
      addOrder({
        orderId: orderList.length + 1,
        buyerId: 1,
        items: [...cart],
        price: total,
        address: "7.Sokak",
        deliveryDate: "28/12/2023",
        isDelivered: false,
      })
    );
    dispatch(clearCart());
    setIsOrdered(true);
  };

  return (
    <div className="mt-5 rounded-2xl p-5 max-w-[500px]">
      {isOrdered ? (
        <h3 className="text-2xl font-semibold">
          Tebrikler 🚀 Sipariş başarıyla verildi.{" "}
          <Link to="/" className="text-[rgb(255,0,57)] underline">
            Daha fazla alışveriş yapın
          </Link>
        </h3>
      ) : (
        <>
          <div>
            <div className="m-2 py-1 px-4 border border-[#cdcdcd] rounded-2xl block text-left">
              <h4>Sipariş İncelemesi</h4>
              <span className="my-1 mx-4">
                {cart?.length} sepetteki ürünler
              </span>
            </div>
            <div className="m-2 py-1 px-4 border border-[#cdcdcd] rounded-2xl block text-left">
              <h4>Kuponlar</h4>
              <span className="my-1 mx-4">Mevcut değil</span>
            </div>
            <div className="m-2 py-1 px-4 border border-[#cdcdcd] rounded-2xl block text-left">
              <h4>Ödeme Özeti</h4>
              <div className="flex justify-between m-2">
                <span className="my-1 mx-4">Ara Toplam</span>
                <span className="my-1 mx-4">${subTotal}</span>
              </div>
              <div className="flex justify-between m-2">
                <span className="my-1 mx-4">İndirim</span>
                <span className="my-1 mx-4">{discount}%</span>
              </div>
              <div className="flex justify-between m-2">
                <span className="my-1 mx-4">Ekstra Ücret</span>
                <span className="my-1 mx-4">${extraFees}</span>
              </div>
              <div className="flex justify-between m-2">
                <span className="my-1 mx-4">Vergi</span>
                <span className="my-1 mx-4">${tax}</span>
              </div>
            </div>
            <div className="m-2 py-1 px-4 border border-[#cdcdcd] rounded-2xl block text-left">
              <h4>Toplam</h4>
              <span className="my-1 mx-4">${total}</span>
            </div>
          </div>
          <button
            className="text-white bg-[#343434] rounded-md w-[150px] h-[35px] cursor-pointer active:bg-white active:text-current active:border active:border-gray-40"
            onClick={handlePay}
          >
            ${total} ödeyin
          </button>
        </>
      )}
    </div>
  );
};

export default Checkout;
