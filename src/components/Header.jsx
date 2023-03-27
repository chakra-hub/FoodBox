import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const [user, setUser] = useState(false);
  const [search, setSearch] = useState('');
  const cartItems = useSelector((store) => store.cart.items);
  
  return (
    <div className="header">
      <Link to="/">
        <div className="logo" data-testid="logo_text">FoodBox</div>
      </Link>
      <ul className="nav_itmes">
        <li className="nav_item">
          <Link to="/search">Search</Link>
        </li>
        <li className="nav_item">
          <Link to="/offers">Offers</Link>
        </li>
        {user ? (
          <li
            onClick={() => {
              setUser(false);
            }}
            className="nav_item"
          >
            <Link to="/">LogOut</Link>
          </li>
        ) : (
          <li
            onClick={() => {
              setUser(true);
            }}
            className="nav_item"
          >
            <Link to="/signin">Sign In</Link>
          </li>
        )}

        <li className="nav_item">
          <Link to="/help">Help</Link>
        </li>
        <Link to="/cart">
          <li className="nav_item">
            <Link to="/cart">
              Cart {cartItems.length == 0 ? <></> : <>[ {cartItems.length} ]</>}{" "}
            </Link>
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Header;
