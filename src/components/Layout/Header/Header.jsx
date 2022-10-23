import React from 'react';
import "./Header.css";
import { Routes, Route, Link } from "react-router-dom";
import { MenuItem } from "./MenuItem";
import { Button } from "../../buttons/Button";

export const Header = () => {
  return (
    <div>
      <div className="header-top-wrapper">
        <div className="header-top container">
          <div>
            <span> <img  src="./img/header-pictures/skype-icon.png" alt=""/>A1:+375 29 615 65 88</span>
            <span>МТС: +375 29 851 65 88 </span>
            <span> Life: +375 25 692 65 88</span>
          </div>

          <div >
            <Link to=""><img  src="./img/header-pictures/login.png" alt=""/></Link>
            <Link to=""><img  src="./img/header-pictures/topcart_icon.png" alt=""/></Link>
            <Link to=""><img  src="./img/header-pictures/checkout.png" alt=""/></Link>            
          </div>
        </div>
      </div>

      <div className="header-grid-container container">
        <div className="header-logo">
          <img className="header-logo-img" src="./img/logo/logo.png" alt=""/>
        </div>

        <div className="header-search-input">
          <input className="header-input" placeholder="Поиск"></input>
        </div>

        <div className="header-search-button">
        <Button style="outline" text={<img  className="search-button-img" src="./img/header-pictures/search_icon.png" alt=""/>} />
        </div>

        <div className="header-menu-item1">
          <MenuItem src="./img/header-pictures/books_icon.png" name="Книги"/>
        </div>

        <div className="header-menu-item2">
          <MenuItem src="./img/header-pictures/custom_menu_pai.png" name="Творчество"/>
        </div>

        <div className="header-menu-item3">
          <MenuItem src="./img/header-pictures/custom_menu_horse.png" name="Детям"/>
        </div>

        <div className="header-menu-item4">
          <MenuItem src="./img/header-pictures/custom_menu_canc.png" name="Канцтовары"/>
        </div>

        <div className="header-menu-item5">
          <MenuItem src="./img/header-pictures/products_icon.png" name="Другие товары"/>
        </div>

        <div className="header-menu-item6">
          <MenuItem src="./img/header-pictures/actions_icon.png" name="Акции" />
        </div>

        <div className="header-menu-item7">
          <MenuItem src="./img/header-pictures/delivery_icon.png" name="Доставка"/>
        </div>

        <div className="header-menu-like"><img src="./img/header-pictures/hearts.webp" alt=""/></div>
        <div className="header-menu-question"><button >?</button></div>
      </div>
    </div>
  );
};
