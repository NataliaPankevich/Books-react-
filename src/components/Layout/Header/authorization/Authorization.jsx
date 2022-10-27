import './Authorization.css';
import {useState} from 'react';
import validator from 'validator';

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

        <div  className="modal">  
          <span  className="close">&times;</span>
            
            <h2>Регистрация:</h2>
            <form  onSubmit={submitCheckin}>
                <div>
                   <label>Имя пользователя:
                    <input  type="username"  id="username" name="username" value={register.username} onChange={changeInputRegister}/></label>
                      
                </div>
               <div>
                    <label>Email: 
                    <input type="email"  id="email"  name="email" value={register.email} onChange={changeInputRegister} formnovalidate/></label>
               </div>
                <div>
                    <label>Пароль: 
                    <input type="password"  id="password"  name="password"  value={register.password}  onChange={changeInputRegister}/></label>
                </div>   
                <div>
                    <label>Повторите пароль: 
                    <input type="password" id="password2" name="password2" value={register.password2}  onChange={changeInputRegister}/></label>
                </div>
                
                <div><input type="submit" /></div>
            </form>          

        </div>


    );
}