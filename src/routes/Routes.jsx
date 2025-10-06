import React, { Component } from 'react';
import { createBrowserRouter } from "react-router";

import Root from '../pages/root/Root';
import Home from '../pages/home/Home';

const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: {
            index: true,
            path: '/',
            Component: Home,
        }
    },
]);

export default router;