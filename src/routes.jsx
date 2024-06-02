import HomePage from "./Pages/HomePage";
import CinemaPage from "./Pages/CinemaPage";


const routes = [
    {
        path: '/',
        element: <HomePage />
    },
    {
        path: '/cinema',
        element: <CinemaPage />
    },

]

export default routes