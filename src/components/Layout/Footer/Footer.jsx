import React from 'react';
import "./Footer.css";
import { Routes, Route, Link } from "react-router-dom";
import { Button } from '../../buttons/Button';
import {List} from '../../list/List';

export const Footer = () => {
  const accountList = ['Личный кабинет', 'Мои заказы', 'Корзина', 'Лист пожеланий', 'Мои скидки'];
  const informList = ['О доставке', 'Об оплате', 'О накопительной скидке', 'Права потребителя', 'Возврат товара', 'Помощь'];
  const buyList = ['О biblio.by', 'Наши магазины', 'Партнерам', 'Блог', 'Реквизиты'];

  return (
    <div>
      <div className="footer-top-wrapper">
        <div className="footer-top container">

          <div className="footer-top-child">
            <div className="footer-top-contact"><div className="footer-top-contact-img"><img src="./img/footer-pictures/contact_us.png"  alt=""/></div><div className="footer-top-contact-text">Контакты</div></div>
           <p>Телефоны:</p>
            <p>+375 29 615 65 88 A1</p>
            <p>+375 29 851 65 88 MTC</p>
            <p>+375 25 692 65 88 Life</p>
           <p> E-mail:biblio@biblio.by</p>
           <p>Skype:biblio.by</p>
            <p>Адрес:</p>
            <p>Интернет-магазин. Для передачи заказа в выбранный вами пункт самовывоза необходимо предварительно оформить заказ на сайте или по телефону.
            Уполномоченный на рассмотрение обращений покупателей: +375 29 615-65-88, biblio.promotion@gmail.com
            Уполномоченные по защите прав потребителей: отдел торговли и услуг администрации Советского района г.Минска, +375 17 318-13-33
            </p>
          </div>

          <div className="footer-top-child">
            <div className="footer-top-account"><div className="footer-top-account-img"><img src="./img/footer-pictures/my_account_footer.png"  alt=""/></div><div className="footer-top-account-text">Мой аккаунт</div></div>
            <List list={accountList} />
          </div>

          <div className="footer-top-child">
            <div className="footer-top-information"><div className="footer-top-information-img"><img src="./img/footer-pictures/information.png"  alt=""/></div><div className="footer-top-information-text">Информация</div></div>
            <List list={informList} />
          </div>

          <div className="footer-top-child">
            <div className="footer-top-buy"><div className="footer-top-buy-img"><img src="./img/footer-pictures/buy_us.png"  alt=""/></div><div className="footer-top-buy-text">О магазине</div></div>
            <List list={buyList} />
          </div>

          <div ><div><img className="footer-top-payment" src="./img/footer-pictures/payment-systems-3.png" alt=""/></div></div>
        </div>
      </div>



      <div className="footer-bottom-wrapper">
        <div className="footer-bottom container">
          <div className="footer-bottom-info">
            <p>
              &copy; 2019–2022 ООО "Библиобай" УНН: 193307845 от 09.09.2019 В
              торг. реестре от 01.04.2020 Регистрационный номер: 478290 Юр.
              адрес: 220113 Минск, ул. Мележа, 1 Способы оплаты товаров:
              банковской картой при получении; наличными при получении; оплата
              банковской картой онлайн Способы доставки товаров: курьером;
              выдача покупателю в пункте самовывоза, почтой по Беларуси Время
              работы: с понедельника по пятницу с 9:00 до 17:30
            </p>
          </div>

          <div className="footer-bottom-input">
            <label>
              <p>Подпишитесь на новинки:</p>
              <input className="" type="e-mail" placeholder="Введите e-mail " />
            </label>
            <Button style="outline" text="Подписаться" />
          </div>

          <div className="footer-bottom-socials">
            <div className="footer-bottom-socials-icon"><a href="#"><img  src="./img/footer-pictures/facebook.png" alt=""/></a></div>
            <div className="footer-bottom-socials-icon"><a href="#"><img  src="./img/footer-pictures/twitter.png" alt=""/></a></div>
            <div className="footer-bottom-socials-icon" ><a href="#"><img src="./img/footer-pictures/instagram.png" alt=""/></a></div>
            <div className="footer-bottom-socials-icon"><a href="#"><img  src="./img/footer-pictures/vk.png" alt=""/></a></div>

          </div>
        </div>
      </div>
    </div>
  );
};
