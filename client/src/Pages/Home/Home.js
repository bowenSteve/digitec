import Navbar from "../../Components/Navbar"
import Footer from "../../Components/Footer"
import Hero from "./components/Hero"
import Metrics from "./components/Metrics"
import Projects from "./components/Projects"
import About from "./components/About"
import Services from "./components/Services"
import WhyUs from "./components/WhyUs"

function Home (){
    return (
        <div className="">
            
            <Navbar/>
            <Hero/>
            <Metrics/>
            <Projects/>
            <About/>
            <Services/>
            <WhyUs/>

            <Footer/>

        </div>
       
    )
}
export default Home;