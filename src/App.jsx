import React from "react"
import Header from "./components/header/Header"
import Nav from "./components/nav/Nav"
import About from "./components/about/About"
import Expirience from "./components/expirience/Expirience"
import Services from "./components/services/Services"
import Testimonials from "./components/testimonials/Testimonials"
import Contact from "./components/contact/Contact"
import Footer from "./components/footer/Footer"
<about></about>

const App = () =>{
    return (
        <>
            <Header />
            <Nav/>
            <About/>
            <Expirience/>
            <Services/>
            <Testimonials/>
            <Contact/>
            <Footer/>
            
        </>
    )
}

export default App