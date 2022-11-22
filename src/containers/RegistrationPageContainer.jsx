import "./RegistrationPageContainer.css";
import React from "react";
import { Link } from "react-router-dom";
import {useState} from 'react';
import validator from 'validator';
import { Input } from "../components/input/Input";

export const RegistrationPageContainer =()=>{

    const [register, setRegister] = useState(() => {
        return {
            username: "",
            email: "",
            password: "",
            password2: "",
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
        if (register.username.length === 0){
            alert("Вы не ввели имя!")
        } else if(!validator.isEmail(register.email)){
            alert("Вы не ввели email!")
        } else if(register.password !== register.password2) {
            alert("Пароли не совпадают")
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
     
            <div  className="registration-page container">
                <div className="registration-page-title">
                    <div>
                        <img src="./img/home-page-pictures/bg_featured.png" alt="" />
                    </div>
                    <div>
                        <p>Создать учётную запись</p>
                    </div>
                </div>              
                                      
                <div className="registration-page-form" >
                    <form  method="post" action="" onSubmit={submitCheckin}>
                    <div>
                        <label><b>Имя пользователя:*</b>
                        <p><input  type="username"  id="username" name="username" value={register.username} onChange={changeInputRegister}/></p></label>
                            
                    </div>
                    <div>
                        <label><b>Email:* </b>
                        <p><input type="email"  id="email"  name="email" value={register.email} onChange={changeInputRegister} formnovalidate/></p></label>
                    </div>
                    <div>
                        <label><b>Пароль:* </b>
                        <p><input type="password"  id="password"  name="password"  value={register.password}  onChange={changeInputRegister}/></p></label>
                    </div>   
                    <div>
                        <label><b>Повторите пароль:*</b> 
                        
                        <p><input type="password" id="password2" name="password2" value={register.password2}  onChange={changeInputRegister}/></p></label>
                        <p>*-обязательные поля</p>
                    </div>
                        
                    <div><Input style="send-review-input" type="submit" /></div>
                </form>
                </div>
                <div><p className="registration-page-policy">Продолжая, Вы соглашаетесь и принимаете условия <a className="registration-page-link" href="#">Политики по персональным данным</a></p></div>
               
                <Link className="registration-page-return-link" to="/page/authorization">...вернуться </Link>
            </div>       

        
    );
    
}