import React from 'react';
import {Routes, Route, Link} from "react-router-dom";
import {AuthorizationPage} from '../pages/AuthorizationPage/Authorization';
import {RegistrationPage} from '../pages/RegistrationPage/Registration';
import {HomePage} from '../pages/HomePage/HomePage';
import {BookPage} from '../pages/BookPage/BookPage';
import {Search} from '../pages/SearchPage/Search';
import {Layout} from '../components/Layout/Layout';

export const RoutingBlock=()=>{
    return (
        <div>    
    
          <Routes>
            <Route path="/" element={<Layout/>}>
              <Route index element={<HomePage />}/>
              <Route path="page/:id" element={<BookPage />}/>
              <Route path="page/searchResults" element={<Search/>}/>              
              <Route path="page/authorization" element={<AuthorizationPage />}/>
              <Route path="page/authorization/page/registration" element={<RegistrationPage/>}/>
            </Route>                  
    
          </Routes>
          
        </div>
      );

}