import React,{useState} from 'react';
import {Link, Outlet} from "react-router-dom";
import {adminRoutes} from '@packages/shared/src/routes/admin'
import {shopRoutes} from '@packages/shared/src/routes/shop'


export const App = () => {

    return (
        <div>
            <div>Page</div>
            <Link to={adminRoutes.about}>ABOUT</Link>
            <br/>
            <Link to={shopRoutes.shop}>SHOP</Link>
            <Outlet/>
        </div>
    );
};

