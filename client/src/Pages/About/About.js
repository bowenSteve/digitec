import Navbar from "../../Components/Navbar"
import Footer from "../../Components/Footer"
import AboutHero from "./components/AboutHero"

import AboutCompany from "./components/AboutCompany"
import TeamSection from "./components/TeamSection"
import ValuesSection from "./components/ValuesSection"





function About (){
    return (
        <div className="">
            
            <Navbar/>
            <AboutHero/>
            <AboutCompany/>
            <TeamSection/>
            <ValuesSection/>
           
            

            <Footer/>

        </div>
       
    )
}
export default About;