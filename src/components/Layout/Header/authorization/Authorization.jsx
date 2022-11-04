import './Authorization.css';
import {useState} from 'react';
import validator from 'validator';
import { Input } from '../../../input/Input';

export const Authorization=(props)=>{

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
        if(!validator.isEmail(register.email)) {
            alert("Вы не ввели email")
        } else if(register.password !== register.password2) {
            alert("Пароли не совпадают")
        } else if(!validator.isStrongPassword(register.password, {minSymbols: 0})) {
            alert("Пароль должен содержать не менее 8 символов, включающих как минимум 1 большую букву, 1 маленькую букву и цифры...")
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

     

    return(
        <div>
            
          
                <div  className="authorization-modal">           
        
                    <h3>Регистрация:</h3>
                        <form  method="post" action="" onSubmit={submitCheckin}>
                            <div>
                            <label>Имя пользователя:
                                <p><input  type="username"  id="username" name="username" value={register.username} onChange={changeInputRegister}/></p></label>
                                
                            </div>
                        <div>
                                <label>Email: 
                                <p><input type="email"  id="email"  name="email" value={register.email} onChange={changeInputRegister} formnovalidate/></p></label>
                        </div>
                            <div>
                                <label>Пароль: 
                                <p><input type="password"  id="password"  name="password"  value={register.password}  onChange={changeInputRegister}/></p></label>
                            </div>   
                            <div>
                                <label>Повторите пароль: 
                                <p><input type="password" id="password2" name="password2" value={register.password2}  onChange={changeInputRegister}/></p></label>
                            </div>
                            
                            <div><Input type="submit" /></div>
                        </form>
                </div>       
        </div>
            
            




          
            

       


    );
}