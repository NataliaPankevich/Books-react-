import React from "react";
import "./SearchPageContainer.css";
import { useState, useEffect, useContext} from "react";
import { BookItem } from "../components/bookItem/BookItem";
import { Context2} from "../components/context/Context";


export const SearchPageContainer = (props) => {
  
  const [inputValue, setInputValue] = useContext(Context2);

    const [booksList, setBooksList] = useState([]);

     

    useEffect(() => {
       let url = new URL(`https://api.itbook.store/1.0/search/${inputValue}`);
        fetch(url)
        .then((res) => {
          if (res.status >= 200 && res.status < 300) {
            return res;
          } else {
            let error = new Error(res.statusText);
            error.response = res;
            throw error
          }
        })
        /*.then((res) => {
          if (res.headers['content-type'] !== 'application/json') {
            let error = new Error('Некорректный ответ от сервера');
            error.response = res;
            throw error
          }
          return res;
        })*/
        .then((res) => res.json())
        .then((text) => {
          setBooksList([...text.books]);
        })
        .catch((e) => {
          console.log('Error: ' + e.message);
          console.log(e.response);
        });
      }, [inputValue]);




  return (
    <div className="container">
      <div className="search-page-wrapper">
        <div className="search-page-title">
          <div>
            <img src="../img/home-page-pictures/bg_featured.png" alt="" />
          </div>
          <div>
            <p>Результаты поиска для "{inputValue}":</p>
          </div>
        </div>

        <div className="search-page-books">
        {booksList.map((item) => (
            <BookItem key={item.isbn13} info={item} />
          ))}
        </div>
      </div>
    </div>
  );
};
