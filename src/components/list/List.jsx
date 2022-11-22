import './List.css'
import React from 'react';
import {Link } from "react-router-dom";


export const List=(props)=>{

        const list = props.list;
        const listItems = list.map((item, index)=><Link className="listItem" to=""><li key={index}>{item}</li></Link>)
    return (
       
        <ul >
            {listItems}
        </ul>
            
     
    )
}