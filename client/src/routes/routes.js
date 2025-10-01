import Home from "../Pages/Home/Home"
import About from "../Pages/About/About"
import Contact from "../Pages/Contact/Contact"
import Projects from "../Pages/Projects/Projects"
import Services from "../Pages/Services/Services"
import Solutions from "../Pages/Solutions/Solutions"


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
        path: '/contact',
        element: < Contact />
    },
    {
        path: '/projects',
        element: < Projects/>
    },
    {
        path: '/services',
        element: < Services/>
    },
    {

        path: '/solutions',
        element: < Solutions/>
    }
]


export default routes;
