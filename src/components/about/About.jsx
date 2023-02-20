import "./About.css"
import ME from "../../assets/Me.jpg"

const About = () =>{
    return (
    <section id="about">
        <h5>Get To Know</h5>
        <h2>About Me</h2>

        <div className="container about__container">
            <div className="about__me">
                <div className="about__me-image">
                    <img src={ME} alt="About Image" />
                </div>
            </div>
            <div className="about__content">
                <div className="about__cards">
                    <article className="about__card">
                        <h5>Experience</h5>
                        <small>0+ Years Working</small>
                    </article>
                    <article className="about__card">
                        <h5>Studying</h5>
                        <small>1+ Years Study</small>
                    </article>
                    <article className="about__card">
                        <h5>Projects</h5>
                        <small>Wanted to Start</small>
                    </article>
                </div>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut et qui exercitationem vel eum, laudantium architecto amet vitae modi labore voluptas tempore recusandae perferendis voluptatem nesciunt sunt consequuntur enim. Magni.</p>
                <a href="#contact" className="btn btn-primary">Let's Talk</a>
            </div>
        </div>
    </section>
    )
}

export default About