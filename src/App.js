import React from "react";
import './App.css';
import {
  RoutingBlock
} from './routing/RoutingBlock';
import {
  useState,
  useEffect,  
} from "react";
import { Context } from "./components/context/Context";
import { Context2} from "./components/context/Context";
import { Context3} from "./components/context/Context";



function App() {
  const [booksList, setBooksList] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isbn13, setIsbn13] = useState("");

 
  useEffect(() => {
    const url = "https://api.itbook.store/1.0/new";
    fetch(url)
      /*.then((res) => {
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
      .then(res => res.json())
      .then((text) => {
        setBooksList([...text.books]);
      })
      /*.catch((e) => {
        console.log('Error: ' + e.message);
        console.log(e.response);
      })*/;

  }, []);
    



  return ( 
    <div className = "App" >
      <Context.Provider   value={[booksList, setBooksList]} >
        <Context2.Provider   value={[inputValue, setInputValue]} >
          <Context3.Provider   value={[isbn13, setIsbn13]} >             

              <RoutingBlock/>

               
            </Context3.Provider>
        </Context2.Provider>  
      </Context.Provider>     
   
    </div>
  );
}

export default App;