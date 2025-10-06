import Home from "../Pages/Home/Home"
import About from "../Pages/About/About"
import Contact from "../Pages/Contact/Contact"
import Projects from "../Pages/Projects/Projects"
import Services from "../Pages/Services/Services"
import ServiceDetail from "../Pages/Services/Sub-Services/ServiceDetail"
import Solutions from "../Pages/Solutions/Solutions"
import SolutionDetail from "../Pages/Solutions/Sub-Solutions/SolutionDetail"
import Industries from "../Pages/Industries/Industries"
import Resources from "../Pages/Resources/Resources"
import TermsOfUse from "../Pages/Legal/TermsOfUse"
import PrivacyPolicy from "../Pages/Legal/PrivacyPolicy"
import CookiePolicy from "../Pages/Legal/CookiePolicy"

const routes = [
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/about',
        element: <About />
    },
    {
        path: '/contact',
        element: <Contact />
    },
    {
        path: '/projects',
        element: <Projects />
    },
    {
        path: '/services',
        element: <Services />
    },
    {
        path: '/services/:slug',
        element: <ServiceDetail />
    },
    {
        path: '/solutions',
        element: <Solutions />
    },
    {
        path: '/solutions/:slug',
        element: <SolutionDetail />
    },
    {
        path: '/industries',
        element: <Industries />
    },
    {
        path: '/resources',
        element: <Resources />
    },
    {
        path: '/terms-of-use',
        element: <TermsOfUse />
    },
    {
        path: '/privacy-policy',
        element: <PrivacyPolicy />
    },
    {
        path: '/cookie-policy',
        element: <CookiePolicy />
    }
]

export default routes;

