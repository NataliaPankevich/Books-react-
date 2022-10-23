import React from 'react';
import {Link} from "react-router-dom";

//Это менеджер(умная) компонента. Она получает данные и передает внутрь всем компонентам в виде пропсов.
export const HomeContainer=()=>{
    return (
        <div>
        <h2>Hello!!</h2>       
        <Link to="/page/:id">BookPage</Link> 
    </div> 
    )
}