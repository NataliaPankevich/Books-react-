import React from 'react';
import {Link} from "react-router-dom";

//Это менеджер(умная) компонента. Она получает данные и передает внутрь всем компонентам в виде пропсов.
export const BookPageContainer=()=>{
    return (
        <div>
        <h2>Hello!!</h2>
       
        <Link to="/">Home</Link> 
    </div> 
    )
}