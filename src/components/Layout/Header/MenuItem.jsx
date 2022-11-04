import React from 'react';
import './MenuItem.css';
import {Routes, Route, Link} from "react-router-dom";

export const MenuItem=(props)=>{
    return(

        <div className="menu-item-wrapper">
            <div className="menu-item-img"><img src={props.src} alt=""/></div>
            <Link className="menu-item-link" to="">{props.name}</Link>
        </div>

    );
}