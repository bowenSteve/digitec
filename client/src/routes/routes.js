import Home from "../Pages/Home/Home"
import About from "../Pages/About/About"
import Projects from "../Pages/Projects/Projects";

const routes = [
    {
        path: '/',
        element: < Home />
    },
    {
        path: '/about',
        element: < About />
    },
    {
        path: '/projects',
        element: <Projects />
    }
]

export default routes;