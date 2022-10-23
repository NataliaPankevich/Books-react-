import React from 'react';
import './Button.css';

export const Button =(props)=>{
    let styles = '';

    if(props.style === "outline"){
        styles="outline";
    }else if(props.style === ""){
        styles="outline";
    }

    return (
        <div>
           <button className={styles}>{props.text}</button> 
        </div>        
    )
}

