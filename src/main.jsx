import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Root from "./pages/Root/Root.jsx"
import About from "./pages/About/About.jsx"
import Footer from "./components/Footer/Footer.jsx"
import Home from "./pages/Home/Home.jsx"
import Contact from "./pages/Contact/Contact.jsx"
import Meals from "./pages/Meals/Meals.jsx"
import ShowMealDetails from "./pages/ShowMealDetails/ShowMealDetails.jsx"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/about",
                element: <About></About>,
            },
            {
                path: "/meals",
                loader: () => fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood#"),
                element: <Meals></Meals>,
            },
            {
                path: "/meals/:mealId",
                loader: ({ params }) => fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.mealId}`),
                element: <ShowMealDetails></ShowMealDetails>,
            },
            {
                path: "/contact",
                element: <Contact></Contact>,
            },
            {
                path: "/footer",
                element: <Footer></Footer>,
            },
        ],
    },
])

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router}></RouterProvider>
    </React.StrictMode>
)
