import "./expirience.css"

const Expirience = () =>{
    return(
        <section id="experience">
            <h5> What Skills I Have</h5>
            <h2>My Experience</h2>
            <div className="container experience__container">
                <div className="experience__frontend">
                    <h3>Frontend Development</h3>
                    <div className="experience__content">
                        <article className="experience__details">
                            <h4>HTML</h4>
                            <small className="text-light">Experienced</small>
                        </article>
                        <article className="experience__details">
                            <h4>CSS</h4>
                            <small className="text-light">Experienced</small>
                        </article>
                        <article className="experience__details">
                            <h4>JavaScript</h4>
                            <small className="text-light">Basic</small>
                        </article>
                        <article className="experience__details">
                            <h4>React</h4>
                            <small className="text-light">Basic</small>
                        </article>
                        <article className="experience__details">
                            <h4>Tailwind</h4>
                            <small className="text-light">Experienced</small>
                        </article>
                        <article className="experience__details">
                            <h4>Figma</h4>
                            <small className="text-light">Experienced</small>
                        </article>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Expirience