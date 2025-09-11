import Navbar from "../../Components/Navbar"
import Footer from "../../Components/Footer"
import Hero from "./components/Hero"
import Metrics from "./components/Metrics"
import Projects from "./components/Projects"
import About from "./components/About"

function Home (){
    return (
        <div className="">
            
            <Navbar/>
            <Hero/>
            <Metrics/>
            <Projects/>
            <About/>

            <Footer/>

        </div>
       
    )
}
export default Home;