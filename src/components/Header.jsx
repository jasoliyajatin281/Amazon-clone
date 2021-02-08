import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <img
        className="header__logo"
        alt=""
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
      />
      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchcon" />
      </div>
      <div className="header__nav">
        <div className="header__option">
          <span className="header__opetionLineOne">Hello Jatin</span>
          <span className="header__optionLineTwo">SIgn In</span>
        </div>
        <div className="header__option">
          <span className="header__opetionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>
        <div className="header__option">
          <span className="header__opetionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
        <div className="header__optionBasket">
          <ShoppingBasketIcon />
          <span className="header__optionLineTwo header__basketCount">0</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
