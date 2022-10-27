import './BookItem.css';
import { Button } from "../buttons/Button";
import { Link } from "react-router-dom";

export const BookItem=(props)=>{


    return (
        <div className="book-item-wrapper">
            <div className="book-item-img">
                <Link to="page/:id" title={props.info.title} ><img src={props.info.image} alt=""/></Link>
            </div>
            <div className="book-item-descr">
                <div className="book-item-descr-title"><Link to="page/:id"><h4>{props.info.title}</h4></Link></div>
                <div><p>{props.info.authors}</p></div>
                <div className="book-item-descr-price"><p>{props.info.price}</p></div>
                <div><Button style = "in-basket-button" text="В корзину"/></div>  
                
            </div>
             
        </div>

    );
}