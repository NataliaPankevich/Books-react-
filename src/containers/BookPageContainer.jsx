import "./BookPageContainer.css";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/buttons/Button";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { Input } from "../components/input/Input";

//Это менеджер(умная) компонента. Она получает данные и передает внутрь всем компонентам в виде пропсов.
export const BookPageContainer = (props) => {
  const [bookInfo, setBookInfo] = useState({
    title: "",
    subtitle: "",
    authors: "",
    publisher: "",
    isbn13: "",
    pages: "",
    year: "",
    rating: "",
    image: "",
    pdf: "",
    price: "",
    desc: "",
  });

  useEffect(() => {
    const url = "https://api.itbook.store/1.0/books/9781617294136";
    fetch(url)
      .then((response) => response.json())
      .then((text) =>
        setBookInfo({
          ...bookInfo,
          title: text.title,
          subtitle: text.subtitle,
          authors: text.authors,
          publisher: text.publisher,
          isbn13: text.isbn13,
          pages: text.pages,
          year: text.year,
          rating: text.rating,
          image: text.image,
          pdf: text.pdf,
          price: text.price,
          desc: text.desc,
        })
      );
  });

  const [hiddenDescription, setHiddenDescription] = useState(true);
  const [hiddenReviews, setHiddenReviews] = useState(false);

  const [userName, setUserName] = useState("");
  const [reviewDate, setReviewDate] = useState("");
  const [review, setReview] = useState("");
  const [list, setList] = useState(() => {
    // getting stored value
    const saved = localStorage.getItem("list");
    const initialValue = JSON.parse(saved);
    return initialValue || [];
  });

  const [name, setName] = useState(() => {
    // getting stored value
    const saved = localStorage.getItem("name");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });

  useEffect(() => {
    // storing input name
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  const add = (event) => {
    event.preventDefault();
    setList([
      ...list,
      { userName: userName, reviewDate: reviewDate, review: review },
    ]);
    setUserName("");
    setReviewDate("");
    setReview("");
  };

  return (
    <div className="book-page-wrapper container">
      <div className="book-page-breadcrumbs-wrapper">
        <ul className="book-page-breadcrumbs">
          <li>
            <Link to="/">Главная</Link>
          </li>
          <li>
            <span>{bookInfo.title}</span>
          </li>         
        </ul>
      </div>

      <div className="book-description">
        <div className="book-description-img">
          <img src={bookInfo.image} alt="" />
        </div>

        <div className="book-description-info">
          <h2 className="book-description-color-text">{bookInfo.title}</h2>
          <h3 className="book-description-color-text">{bookInfo.subtitle}</h3>
          <p >Автор(-ы): <span className="book-description-color-text">{bookInfo.authors}</span></p>
          <p>По году издания: {bookInfo.year}</p>
          <p>Тип обложки:</p>
          <p>Издательство: {bookInfo.publisher}</p>
          <p>Количество страниц: {bookInfo.pages}</p>
          <p>Рейтинг: {bookInfo.rating}</p>
          <p>EAN: {bookInfo.isbn13}</p>
          <p>Изготовитель: </p>
          <p>Импортер: </p>

          <div className="book-price">
            <p>{bookInfo.price}</p>
          </div>
          <Button style="in-basket-button" text="Добавить в корзину" />
        </div>
      </div>

      <div>
        <div className="book-page-tab">
          <Button
            className="active"
            onClick={() => {
              setHiddenDescription(!hiddenDescription);
              setHiddenReviews(!hiddenReviews);
            }}
            text="ОПИСАНИЕ ТОВАРА"
            style="in-basket-button"
          />
          <Button
            className="active"
            onClick={() => {
              setHiddenReviews(!hiddenReviews);
              setHiddenDescription(!hiddenDescription);
            }}
            text="ОТЗЫВЫ "
            style="in-basket-button"
          />
        </div>

        {hiddenDescription ? (
          <div className="book-description-text">
            <p>{bookInfo.desc}</p>
          </div>
        ) : null}

        {hiddenReviews ? (
          <div className="book-description-reviews">
            <div className="book-description-reviews-form">
              <form onSubmit={add}>
                <h2>Напишите ваш отзыв</h2>
                <div>
                  <label>
                    <h3>Псевдоним пользователя:</h3>
                    <input
                      value={userName}
                      onChange={(event) => setUserName(event.target.value)}
                    />
                  </label>
                </div>

                <div>
                  <label>
                    <h3>Дата:</h3>
                    <input
                      value={reviewDate}
                      onChange={(event) => setReviewDate(event.target.value)}
                    />
                  </label>
                </div>
                <div>
                  <label>
                    <h3>Отзыв:</h3>
                    <textarea
                      value={review}
                      onChange={(event) => setReview(event.target.value)}
                    />
                  </label>
                </div>

                <Input style="send-review-input" type="submit" value="Отправить" />
              </form>
            </div>

            <div className="book-description-reviews-posts">
              {list.map((item) => {
                return (
                  <div
                    className="book-description-reviews-post"
                    key={item.userName + item.reviewDate}
                  >
                    <p>
                      <h3>
                        <FontAwesomeIcon
                          className="book-description-reviews-post-icon"
                          icon={faPenToSquare}
                        />{" "}
                        Отзыв пользователя: <i>{item.userName}</i>
                      </h3>
                    </p>
                    <p>{item.review}</p>
                    <p>{item.reviewDate}</p>
                  </div>
                );
              })}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};
