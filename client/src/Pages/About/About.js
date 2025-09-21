import Navbar from "../../Components/Navbar"
import Footer from "../../Components/Footer"
import AboutHero from "./components/AboutHero"

import AboutCompany from "./components/AboutCompany"




function About (){
    return (
        <div className="">
            
            <Navbar/>
            <AboutHero/>
            <AboutCompany/>
            

            <Footer/>

        </div>
       
    )
}
export default About;