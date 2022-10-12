import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog/Blog";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Home from "../components/Home/Home";
import QuizContainer from "../components/QuizContainer/QuizContainer";
import Statistics from "../components/Statistics/Statistics";
import Topics from "../components/Topics/Topics";
import Main from "../Utilities/Main";

export const router = createBrowserRouter([
    {
        path: '/', element: <Main></Main>, errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/home', element: <Home></Home>,
                loader: () => fetch('https://openapi.programming-hero.com/api/quiz')
            },
            {
                path: '/topics', element: <Topics></Topics>,
                loader: () => fetch('https://openapi.programming-hero.com/api/quiz')

            },
            {
                path: '/statistics', element: <Statistics></Statistics>,
                loader: () => fetch('https://openapi.programming-hero.com/api/quiz')
            },
            { path: '/blog', element: <Blog></Blog> },
            {
                path: '/quiz/:Id', element: <QuizContainer></QuizContainer>,
                loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.Id}`)
            }
        ]
    }
])