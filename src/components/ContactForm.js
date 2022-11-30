import React,  { useRef } from "react";
import emailjs from '@emailjs/browser';


export default function ContactForm(){
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_d1rolec', 'template_hvuygo7', form.current, 'bd0izejOp-GcIgqPn')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      };
    return(
        <div className="contact-form-container">
            <h1>Contact Me</h1>
            <form ref={form} className="contact-form" onSubmit={sendEmail}>
                <input className="user-name" name="user_name" type="text" placeholder="Enter Your Name"/>
                <input name="user_email" type="email" placeholder="Email"/>
                <input name="subject" type="text" placeholder="Subject" />
                <textarea name="message" cols="30" rows="10" placeholder="Your Message" />
                <button type="submit">Send Message</button>            
            </form>
        </div>
    )

}