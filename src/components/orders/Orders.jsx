import { useSelector } from "react-redux";

function Orders() {
  const { orderList } = useSelector((state) => state.orderList);
  return (
    <div className="cart-list">
      {orderList.map((order) => (
        <div className="checkout-container" key={order.orderId}>
          <h3>#ID-62Z-{order.orderId}</h3>
          {order.items.map((item) => (
            <div className="cart-item" key={item.id}>
              <div className="text-[1.1rem] m-2">${item.price}</div>
              <div className="uppercase ml-2 font-semibold">{item.name}</div>
              <div>(Teslimatta nakit ödeme beklentisi 3 - 6 gün)</div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Orders;
