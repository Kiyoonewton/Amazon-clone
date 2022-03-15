import React from "react";
import "./Header.css";
import logo from "./images/Amazon.png";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUserNull } from "./Store/ind";
// import { useStatevalue } from "./StateProvider";
function Header() {
  const basket = useSelector((state) => state.total.basket);
  const username = useSelector((state) => state.total.username);
  const dispatch = useDispatch();
  const Logout = () => {
    dispatch(setUserNull());
  };
  return (
    <div className="header">
      <Link to="/">
        <img className="header__logo" src={logo} />
      </Link>

      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <Link to={!username && "/login"}>
          <div onClick={Logout} className="header__option">
            <span className="header__optionLineOne">
              {username ? `Hello ${username}` : `Hello Guest`}
            </span>
            <span className="header__optionLineTwo">
              {!username ? `Sign In` : `Sign Out`}
            </span>
          </div>
        </Link>
        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">Order</span>
        </div>
        {/* <span className="header__optionLineTwo2">Orders</span> */}
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
