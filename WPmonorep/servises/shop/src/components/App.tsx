import React,{useState} from 'react';
import classes from './App.module.scss'
import {Link, Outlet} from "react-router-dom";
import avatarPNG from "@/assets/avatar.png"
import avatarJPG from "@/assets/avatar.jpg"
import Calendar from "@/assets/calendar.svg"
import Image from "@/assets/app-image.svg"
import {shopRoutes} from "@packages/shared/src/routes/shop";


export const App = () => {

    return (
        <div>
            <div>SHOP MODULE</div>
            <Link to={shopRoutes.main}>go to MAIN_SHOP</Link>
            <br/>
            <Link to={shopRoutes.second}>go to SECOND_SHOP</Link>
            <Outlet/>
        </div>
    );
};

