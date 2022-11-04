import React from "react";
import "./SearchPageContainer.css";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { BookItem } from "../components/bookItem/BookItem";
import { Button } from "../components/buttons/Button"; //{booksList.map((item)=><BookItem info={item}/>)}

export const SearchPageContainer = (props) => {

    const [booksList, setBooksList] = useState([]);

    useEffect(() => {
        const url = "https://api.itbook.store/1.0/search/mongodb";
        fetch(url)
          .then((response) => response.json())
          .then((text) => {
            setBooksList([...text.books]);
          });
      }, []);




  return (
    <div className="container">
      <div className="search-page-wrapper">
        <div className="search-page-title">
          <div>
            <img src="../img/home-page-pictures/bg_featured.png" alt="" />
          </div>
          <div>
            <p>Результаты поиска для '{}'</p>
          </div>
        </div>

        <div className="search-page-books">
        {booksList.map((item) => (
            <BookItem info={item} />
          ))}
        </div>
      </div>
    </div>
  );
};
