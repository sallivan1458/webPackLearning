import {createBrowserRouter} from "react-router-dom";
import {App} from "@/components/App";
import React, {Suspense} from "react";
import {LazyShop} from "@/pages/shop/Shop.lazy";


const routes = [
    {
        path: "/shop",
        element: <App/>,
        children:[
            {
                path:'/shop/main',
                element:<Suspense fallback={'Loading...'}><LazyShop/></Suspense>
            },
            {
                path:'/shop/second',
                element:<Suspense fallback={'Loading...'}><div>second</div></Suspense>
            },
        ]
    },
]


export const router = createBrowserRouter(routes);

export default routes;