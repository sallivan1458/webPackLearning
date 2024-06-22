import {createRoot} from "react-dom/client";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import React, {Suspense} from "react";
import {router} from "@/router/Router";

const root = document.getElementById('root');

if (!root) {
    throw new Error('root is missing');
}

const container = createRoot(root);



container.render(<RouterProvider router={router}/>)