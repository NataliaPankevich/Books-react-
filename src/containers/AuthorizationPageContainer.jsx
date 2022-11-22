import "./AuthorizationPageContainer.css";
import React from "react";
import { Link } from "react-router-dom";
import {useState} from 'react';
import validator from 'validator';
import { Input } from "../components/input/Input";

export const AuthorizationPageContainer =()=>{
    const [register, setRegister] = useState(() => {
        return {
            email: "",
            password: "",           
        }
    })


    const changeInputRegister = event => {
        event.persist()
        setRegister(prev => {
            return {
                ...prev,
                [event.target.name]: event.target.value,
            }
        })
    }
          
    const submitCheckin = event => {
        event.preventDefault();
        if (!validator.isEmail(register.email)){
            alert("Вы не ввели email!")
        } else if(!validator.isStrongPassword(register.password, {minSymbols: 0})) {
            alert("Пароль должен содержать не менее 8 символов, включающих как минимум 1 большую букву, 1 маленькую букву и цифры...")

        }/*else {
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
    
        <div  className="authorization-page-wrapper container">
                <div className="authorization-page-title">
                    <div>
                        <img src="./img/home-page-pictures/bg_featured.png" alt="" />
                    </div>
                    <div>
                        <p>Страница авторизации</p>
                    </div>
                </div>   


                <div className="authorization-page">

                    <div className="authorization-page-new-users">
                        <h3>НОВЫЕ КЛИЕНТЫ</h3>
                        <p>Создав учётную запись на нашем сайте, вы будете
                             тратить меньше времени на оформление заказа, сможете хранить 
                             несколько адресов доставки, отслеживать состояние заказов, 
                             а также многое другое.</p>
                        <Link to="page/registration"className="authorization-to-registration">Создать учетную запись</Link>
                    </div>

                    <div className="authorization-page-users">
                        <h3>ЗАРЕГИСТРИРОВАННЫЕ КЛИЕНТЫ</h3>
                        <p>Если у вас есть учётная запись на нашем сайте, пожалуйста, авторизируйтесь.</p>

                        
                        <form  method="post" action="" onSubmit={submitCheckin}>
                        
                            <div className="">
                                <label><b>Email:*</b> 
                                <p><input type="email"  id="email"  name="email" value={register.email} onChange={changeInputRegister} formnovalidate/></p></label>
                            </div>


                            <div className="">
                                <label><b>Пароль:*</b>
                                <p><input type="password"  id="password"  name="password"  value={register.password}  onChange={changeInputRegister}/></p></label>
                            </div>  

                            <p>*-обязательные поля</p>
                            
                            <div className="authorization-page-users-btn"><Input style="authorization-input" type="submit" value="Войти"/></div>

                        </form>
                    </div>


                </div>        

                
            </div>       


    );
    
}
