import "./footer.css"

const Footer = () =>{
    return(
        <footer>
            <a href="#" className="footer_logo">JusTerror</a>

            <ul className="permalinks">
                <li><a href="#">Home</a></li>
                <li><a href="#about">about</a></li>
                <li><a href="#experience">experience</a></li>
                <li><a href="#services">services</a></li>
                <li><a href="#testimonials">testimonial</a></li>
                <li><a href="#contact">contact</a></li>
            </ul>

            <div className="footer_socials">
                <a href="https://www.google.com.ua/?hl=uk"> .</a>
                <a href="https://www.google.com.ua/?hl=uk"> .</a>
                <a href="https://www.google.com.ua/?hl=uk"> .</a>
            </div>
        </footer>
    )
}

export default Footer