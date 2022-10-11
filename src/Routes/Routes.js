import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog/Blog";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Statistics from "../components/Statistics/Statistics";
import Topics from "../components/Topics/Topics";
import Main from "../Utilities/Main";

export const router = createBrowserRouter([
    {
        path: '/', element: <Main></Main>, errorElement: <ErrorPage></ErrorPage>,
        children: [
            { path: '/', element: <Topics></Topics> },
            { path: '/topics', element: <Topics></Topics> },
            { path: '/statistics', element: <Statistics></Statistics> },
            { path: '/blog', element: <Blog></Blog> }
        ]
    }
])