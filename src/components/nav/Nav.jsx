import "./nav.css"
import {useState} from "react"

const Nav = () =>{
    const [activeNav, setActiveNav] = useState("#")
    return(
        <nav>
            <a href="#"onClick={()=> setActiveNav("#")} className = {activeNav ==="#" ? "active": ""}>Home</a>
            <a href="#about" onClick={()=> setActiveNav("#about")} className = {activeNav === "#about" ? "active": ""}>about</a>
            <a href="#experience" onClick={()=> setActiveNav("#expirience")} className = {activeNav === "#expirience" ? "active": ""}>experience</a>
            <a href="#services"onClick={()=> setActiveNav("#services")} className = {activeNav === "#servoces" ? "active": ""}>services</a>
            <a href="#contact"onClick={()=> setActiveNav("#contact")} className = {activeNav === "#contact" ? "active": ""}>contact</a>
        </nav>
    )
}

export default Nav