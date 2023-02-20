import React from "react"
import "./contact.css"

const Contact = () =>{
    return (
        <section id="contact">
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact__container">
                <div className="contact__options">
                   <article className="contact__option">
                    <h4>Email</h4>
                    <h5>rudyuk1996@gmail.com</h5>
                    <a href="mailto:rudyuk1996@gmail.com" target="_blank"> Send a massage</a>
                    </article>
                    <article className="contact__option">
                    <h4>Messenger</h4>
                    <h5>Bohdan Rudyuk</h5>
                    <a href="https://www.google.com/webhp?authuser=1" target="_blank"> Send a massage</a>
                    </article>
                    <article className="contact__option">
                    <h4>Telegram</h4>
                    <h5>+380636713396</h5>
                    <a href="https://api.telegram.com/send?phone+380636713396" target="_blank"> Send a massage</a>
                    </article>
                </div>
                {/*END CONTACTION*/}
                <form action="">
                    <input type="text" name="name" placeholder="Your Full Name" required />
                    <input type="email" name="email" placeholder="Your Email" required />
                    <textarea name="massage"  cols="30" rows="7" placeholder="Your massage" required></textarea>
                    <button type="submit" className="btn btn-primary">Send Massage</button>
                </form>
            </div>

        </section>
    )
}
export default Contact