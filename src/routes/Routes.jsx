import { createBrowserRouter } from "react-router";
import Root from '../pages/root/Root';
import Home from '../pages/home/Home';
import ErrorLad from "../pages/error/ErrorLad";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        errorElement: <ErrorLad></ErrorLad>,
        children: [{
            index: true,
            loader: () => fetch('./booksData.json'),
            path: "/",
            Component: Home,
        }]
    },
]);

