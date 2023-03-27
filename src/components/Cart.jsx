import { useSelector, useDispatch } from "react-redux";
import { removeItems } from "../utils/cartSlice";

const Cart = () => {
  document.title = 'FoodBox - Cart'
  const items = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(removeItems());
  };
  return (
    <div className="cart_container">
      <div className="cart_heading">
        Cart
        <button className="clear_all" onClick={handleClearCart}>
          Clear
        </button>
      </div>
      <div className="cart_items">
        {items.map((element) => {
          return (
            <div className="cart_item_card">
              <div className="item_name">{element.name}</div>
              <div className="item_amount">₹ {element.price / 100}</div>
            </div>
          );
        })}
      </div>
      <div className="to_pay">
        <div className="pay_label">To Pay</div>

        <div className="final_amount">
          ₹{" "}
          {items ? (
            items.reduce(function (tot, element) {
              return tot + element.price / 100;
            }, 0)
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
