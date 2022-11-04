import React from "react";
import "./Footer.css";
import { Button } from "../../buttons/Button";
import { List } from "../../list/List";
import { Input } from '../../input/Input';
import validator from "validator";
import {useState} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faVk,
} from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
  const accountList = [
    "Личный кабинет",
    "Мои заказы",
    "Корзина",
    "Лист пожеланий",
    "Мои скидки",
  ];
  const informList = [
    "О доставке",
    "Об оплате",
    "О накопительной скидке",
    "Права потребителя",
    "Возврат товара",
    "Помощь",
  ];
  const buyList = [
    "О biblio.by",
    "Наши магазины",
    "Партнерам",
    "Блог",
    "Реквизиты",
  ];


  const[email, setEmail]=useState('');
  
  const changeEmail= event => {
    event.persist()
    setEmail(event.target.value)
}
   

  const submitEmail = event => {
    event.preventDefault();
    if(!validator.isEmail(email)) {
        alert("Вы не ввели email")
    } /*else {
        axios.post(DOMEN_SERVER + "/auth/registration/", {
            username: register.username,
            email: register.email,
            password: register.password,
        }).then(res => {
            if (res.data === true) {
                window.location.href = DOMEN_SITE + "/auth"
            } else {
                alert("There is already a user with this email")
            }
        }).catch(() => {
            alert("An error occurred on the server")
        })
    }*/
}




  return (
    <div>
      <div className="footer-top-upButton"><a href="#top">Наверх</a></div>
      <div className="footer-top-socials-wrapper">
        <p><b>Следите за акциями и новостями</b></p>
          <div className="footer-top-socials">
             <div className="footer-top-socials-icon">
              <a href="https://www.facebook.com/" target="_blank">
                <FontAwesomeIcon icon={faFacebook} size="3x" />
              </a>
            </div>
            <div className="footer-top-socials-icon">
              <a href="https://twitter.com/" target="_blank">
                <FontAwesomeIcon icon={faTwitter} size="3x" />
              </a>
            </div>
            <div className="footer-top-socials-icon">
              <a href="https://www.instagram.com/" target="_blank">
                <FontAwesomeIcon icon={faInstagram} size="3x" />
              </a>
            </div>
            <div className="footer-top-socials-icon">
              <a href="https://vk.com/" target="_blank">
                <FontAwesomeIcon icon={faVk} size="3x" />
              </a>
            </div>
          </div>
           
          
      </div>
      <div className="footer-top-wrapper">
        <div className="footer-top container">
          <div className="footer-top-child">
            <div className="footer-top-contact">
              <div className="footer-top-contact-img">
                <img src="./img/footer-pictures/contact_us.png" alt="" />
              </div>
              <div className="footer-top-contact-text">Контакты</div>
            </div>
            <p><b>Телефоны:</b></p>
            <p>+375 29 615 65 88 A1</p>
            <p>+375 29 851 65 88 MTC</p>
            <p>+375 25 692 65 88 Life</p>
            <p> <b>E-mail:</b>biblio@biblio.by</p>
            <p><b>Skype:</b>biblio.by</p>
            <p><b>Адрес:</b> интернет-магазин.</p>
            <p className="footer-top-contact-text-details">
               Для передачи заказа в выбранный вами пункт
              самовывоза необходимо предварительно оформить заказ на сайте или
              по телефону. Уполномоченный на рассмотрение обращений покупателей:
              +375 29 615-65-88, biblio.promotion@gmail.com Уполномоченные по
              защите прав потребителей: отдел торговли и услуг администрации
              Советского района г.Минска, +375 17 318-13-33
            </p>
          </div>

          <div className="footer-top-child none">
            <div className="footer-top-account">
              <div className="footer-top-account-img">
                <img src="./img/footer-pictures/my_account_footer.png" alt="" />
              </div>
              <div className="footer-top-account-text">Мой аккаунт</div>
            </div>
            <List list={accountList} />
          </div>

          <div className="footer-top-child none">
            <div className="footer-top-information">
              <div className="footer-top-information-img">
                <img src="./img/footer-pictures/information.png" alt="" />
              </div>
              <div className="footer-top-information-text">Информация</div>
            </div>
            <List list={informList} />
          </div>

          <div className="footer-top-child none">
            <div className="footer-top-buy">
              <div className="footer-top-buy-img">
                <img src="./img/footer-pictures/buy_us.png" alt="" />
              </div>
              <div className="footer-top-buy-text">О магазине</div>
            </div>
            <List list={buyList} />
          </div>

          <div>
            <div>
              <img
                className="footer-top-payment"
                src="./img/footer-pictures/payment-systems-3.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom-wrapper">
        <div className="footer-bottom container">
          <div className="footer-bottom-info">
            <p><b>&copy; 2019–2022 ООО "Библиобай"</b> </p>
            <p>УНН: 193307845 от 09.09.2019 В торг. реестре от 01.04.2020 Регистрационный номер: 478290 Юр.
              адрес: 220113 Минск, ул. Мележа, 1 </p>
              <p><b>Способы оплаты товаров:</b> банковской картой при получении; наличными при получении; оплата
              банковской картой онлайн.</p> <p><b>Способы доставки товаров:</b> курьером;
              выдача покупателю в пункте самовывоза, почтой по Беларуси Время
              работы: с понедельника по пятницу с 9:00 до 17:30</p>
            
          </div>

          <div className="footer-bottom-input">
            <form onSubmit={submitEmail}>
              <label>
                <p>Подпишитесь на новинки:</p>
                <Input
                  onChange={changeEmail}
                  style="email-input" 
                  type="e-mail"
                  placeholder="Введите e-mail "
                  formNoValidate
                />
              </label>
              <Input style="subscribe-input" type="submit" value="Подписаться" />
            </form>
          </div>

          <div className="footer-bottom-socials">
            <div className="footer-bottom-socials-icon">
              <a href="https://www.facebook.com/" target="_blank">
                <FontAwesomeIcon icon={faFacebook} size="3x" />
              </a>
            </div>
            <div className="footer-bottom-socials-icon">
              <a href="https://twitter.com/" target="_blank">
                <FontAwesomeIcon icon={faTwitter} size="3x" />
              </a>
            </div>
            <div className="footer-bottom-socials-icon">
              <a href="https://www.instagram.com/" target="_blank">
                <FontAwesomeIcon icon={faInstagram} size="3x" />
              </a>
            </div>
            <div className="footer-bottom-socials-icon">
              <a href="https://vk.com/" target="_blank">
                <FontAwesomeIcon icon={faVk} size="3x" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
