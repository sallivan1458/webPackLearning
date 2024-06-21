import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { useState } from 'react';
import classes from './App.module.scss';
import { Link, Outlet } from "react-router-dom";
import About from "@/pages/about/About";
import avatarPNG from "@/assets/avatar.png";
import avatarJPG from "@/assets/avatar.jpg";
import Calendar from "@/assets/calendar.svg";
export var App = function () {
    function TODOsmt(a) {
        console.log(a);
    }
    TODOsmt('fff');
    // if (__PLATFORM__ === 'desktop') return (<div>IsDesktopPlatform</div>)
    // if (__PLATFORM__ === 'mobile') return (<div>IsMobilePlatform</div>)
    var _a = useState(0), count = _a[0], setCount = _a[1];
    var increment = function () { return setCount(count + 1); };
    return (_jsxs("div", { children: [_jsxs("h1", { children: ["PLATFORM=", __PLATFORM__] }), _jsxs("h1", { children: ["PLATFORM=", __ENV__] }), __ENV__ === 'development' && (_jsx("div", { children: "PROD" })), _jsxs("div", { children: [_jsx("img", { height: 50, src: avatarPNG, alt: "avatar" }), _jsx("img", { height: 50, src: avatarJPG, alt: "avatar" })] }), _jsx("div", { children: _jsx(Calendar, { fill: 'red', height: 50, width: 50 }) }), _jsx(Link, { className: classes.link, to: "/about", children: "about" }), _jsx("hr", {}), _jsx(Link, { className: classes.link, to: "/shop", children: "shop" }), _jsx("hr", {}), _jsxs("p", { children: ["Hello world ", count] }), _jsxs("button", { className: classes.button, onClick: increment, children: [_jsx("span", { children: "+" }), "1"] }), _jsx(About, {}), _jsx(Outlet, {})] }));
};
