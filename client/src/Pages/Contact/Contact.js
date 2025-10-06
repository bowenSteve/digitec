import React from 'react'
import Navbar from "../../Components/Navbar"
import Footer from "../../Components/Footer"
import ContactHero from './components/ContactHero'
import ContactForm from './components/ContactForm'

function Contact() {
  return (
    <div>
        <Navbar/>
        <ContactHero/>
        <ContactForm/>
        <Footer/>
    </div>
  )
}

export default Contact
