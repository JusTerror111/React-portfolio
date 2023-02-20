import "./header.css"
import CTA from "./CTA"
import ME from "../../assets/Me.jpg"
import HeaderSocial from "./HeaderSocial"

const Header = () =>{
    return(
        <header>
            <div className="container header__container">
                <h5>Hello I'm</h5>
                <h1>Bohdan Rudiuk</h1>
                <h5 className="text-light"> Junior Frontend Developer</h5>
                <CTA/>
                <HeaderSocial/>
                
                <div className="me">
                    <img src={ME} alt="me" />
                </div>

                <a href="#contact"className="scrol__down">Scrol Down</a>
            </div>
        </header>
    )
}

export default Header