import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { Input } from '../../input/Input';
import { MenuItem } from './MenuItem';
import { Button } from '../../buttons/Button';
import { Authorization } from './authorization/Authorization';
import {useState} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHeart, faComments} from '@fortawesome/free-regular-svg-icons';




export const Header = () => {

    const[hidden, setHidden]=useState(true);   

  return (
    <div>
      <div className="header-top-wrapper">
        <div id="top" className="header-top container">
          <div className="header-top-info">
            <span> A1:+375 29 615 65 88</span>
            <span>МТС: +375 29 851 65 88 </span>
            <span> Life: +375 25 692 65 88</span>
          </div>

          <div className="header-top-buttons">
            <div className="header-top-authorization-btn"><Link  onClick={()=>setHidden(!hidden)} to=""><img  src="./img/header-pictures/login.png" alt=""/></Link></div>
            {hidden ?  null : <Authorization/>}
            <div className="header-top-basket-btn"><Link to=""><img  src="./img/header-pictures/topcart_icon.png" alt=""/></Link></div>
            <div className="header-top-order-btn"><Link to=""><img  src="./img/header-pictures/checkout.png" alt=""/></Link></div>            
          </div>
        </div>
      </div>

      <div className="header-grid-container container">
        <div className="header-logo">
          <Link to="/"><img className="header-logo-img" src="./img/logo/logo.png" alt=""/></Link>
        </div>

        <div className="header-search-input">
          <Input style="search-input" type="text" placeholder="Поиск"/>
        </div>

        <div className="header-search-button">
          <Link to="page/searchResults" ><Button style="search-button" text={<img  className="search-button-img" src="./img/header-pictures/search_icon.png" alt=""/>} /></Link>
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

        <div className="header-menu-like"><FontAwesomeIcon icon={faHeart} size="2x"/></div>
        <div className="header-menu-question"><FontAwesomeIcon icon={faComments} size="2x"/></div>
      </div>
    </div>
  );
};
