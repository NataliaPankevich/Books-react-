import './BookPageContainer.css'; 
import React from 'react';
import {Link} from "react-router-dom";
import { Button } from "../components/buttons/Button";
import{useState, useEffect} from 'react';

//Это менеджер(умная) компонента. Она получает данные и передает внутрь всем компонентам в виде пропсов.
export const BookPageContainer=(props)=>{

    const[bookInfo, setBookInfo] = useState({
        title:'',
        subtitle:'',
        authors:'',
        publisher:'',
        isbn13:'',
        pages:'',
        year:'',
        rating:'',
        image:'',
        pdf:'',
        price:'',
        desc:'',

    });

    useEffect(()=>{
        const url = 'https://api.itbook.store/1.0/books/9781617294136';
        fetch(url)
        .then(response => response.json())
        .then(text => setBookInfo({...bookInfo,
            title:text.title, 
            subtitle:text.subtitle, 
            authors:text.authors,
            publisher:text.publisher,
            isbn13:text.isbn13,
            pages:text.pages,
            year:text.year,
            rating:text.rating,
            image:text.image,
            pdf:text.pdf,
            price:text.price,
            desc:text.desc,
 }));
    }

    )

    return (
        <div className="book-page-wrapper container">
            <div className="book-page-pagination">

            </div>

            <div className="book-description">
                <div className="book-description-img">
                  <img src={bookInfo.image} alt=""/>  
                </div>            
            
                <div className="book-description-info">
                    <h2>{bookInfo.title}</h2>
                    <h3>{bookInfo.subtitle}</h3>
                    <p>Автор(-ы):  {bookInfo.authors}</p>
                    <p>По году издания:  {bookInfo.year}</p>
                    <p>Тип обложки:</p>
                    <p>Издательство: {bookInfo.publisher}</p>
                    <p>Количество страниц: {bookInfo.pages}</p>
                    <p>Рейтинг: {bookInfo.rating}</p>
                    <p>EAN: {bookInfo.isbn13}</p>
                    <p>Изготовитель: </p>
                    <p>Импортер: </p>

                    <div className="book-price"><p>{bookInfo.price}</p></div>
                    <Button style="in-basket-button" text="Добавить в корзину"/> 
                </div>
            
                

                 
            </div>

            <div className="book-description-text">
                <h2>Описание товара</h2>
                <p>{bookInfo.desc}</p>
            </div>        
            
        </div> 
    )
}