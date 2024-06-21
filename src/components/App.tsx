import React,{useState} from 'react';
import classes from './App.module.scss'
import {Link, Outlet} from "react-router-dom";
import About from "@/pages/about/About";
import avatarPNG from "@/assets/avatar.png"
import avatarJPG from "@/assets/avatar.jpg"
import Calendar from "@/assets/calendar.svg"
import Image from "@/assets/app-image.svg"


export const App = () => {

    function TODO1(){
        TODO2()
    }
    function TODO2(){
        throw new Error()
    }


    // if (__PLATFORM__ === 'desktop') return (<div>IsDesktopPlatform</div>)
    // if (__PLATFORM__ === 'mobile') return (<div>IsMobilePlatform</div>)

    const [count, setCount] = useState(0);
    const increment = () => {
        // setCount(count + 1)
        TODO1()
    };
    return (
        <div data-testid={"App.DataTestId"}>
            <h1 data-testid={"Platform"}>PLATFORM={__PLATFORM__}</h1>
            <h1>PLATFORM={__ENV__}</h1>
            {__ENV__ === 'development' && (<div>PROD</div>)}
            <div>
                <img height={50} src={avatarPNG} alt="avatar"/>
                <img height={50} src={avatarJPG} alt="avatar"/>
                <Image fill={'green'} width={300} height={300}/>
            </div>
            <div>
                <Calendar fill={'red'} height={50} width={50}/>
            </div>
            <Link className={classes.link} to="/about">about</Link>
            <hr/>
            <Link className={classes.link} to="/shop">shop</Link>
            <hr/>

            <p>Hello world {count}</p>
            <button className={classes.button} onClick={increment}><span>+</span>1</button>
            <About/>
            <Outlet/>
        </div>
    );
};

