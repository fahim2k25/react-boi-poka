import { createBrowserRouter } from "react-router";
import Root from '../pages/root/Root';
import Home from '../pages/home/Home';
import ErrorLad from "../pages/error/ErrorLad";
import About from "../pages/about/About";
import BookDetails from "../pages/bookDetails/BookDetails";

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
        },
        {
            path: "/about",
            Component: About
        },
        {
            path: '/bookdeetz/:bookID',
            loader: () => fetch('./booksData.json'),
            Component: BookDetails
        }

        ]
    },
]);

