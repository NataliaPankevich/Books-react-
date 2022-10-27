import React from 'react';
import './Button.css';

export const Button =(props)=>{
    let styles = '';

    if(props.style === "search-button"){
        styles="search-button";
    }else if(props.style === "subscribe-button"){
        styles="subscribe-button";
    }else if(props.style === "in-basket-button"){
        styles="in-basket-button"; 
    }else if(props.style === "home-page-text-btn"){
        styles="home-page-text-btn"; 
    }

    return (
        <div>
           <button onClick={props.onClick} className={styles}>{props.text}</button> 
        </div>        
    )
}

