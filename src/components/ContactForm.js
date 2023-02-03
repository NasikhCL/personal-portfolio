import React,  { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

export default function ContactForm(){
    const form = useRef()
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const sendEmail = (e) => {
        e.preventDefault();
        if(!name || !email || !subject || !message){
            toast.error("Fill the Form Completely");

        }else{
            emailjs.sendForm('service_d1rolec', 'template_hvuygo7', form.current, 'bd0izejOp-GcIgqPn')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            setName("")
            setEmail("")
            setSubject("")
            setMessage("")
            toast.success("form Submitted successfully!");
        }
      };
    return(
        <div id="contact-section" className="contact-form-container">
            <h2>Contact Me</h2>
            <form ref={form} className="contact-form" onSubmit={sendEmail}>
                <input className="user-name" onChange={(e)=>setName(e.target.value)} value={name} name="user_name" type="text" placeholder="Enter Your Name"/>
                <input name="user_email" type="email" onChange={(e)=>setEmail(e.target.value)} value={email} placeholder="Email"/>
                <input name="subject" type="text" onChange={(e)=>setSubject(e.target.value)} value={subject} placeholder="Subject" />
                <textarea name="message" onChange={(e)=>setMessage(e.target.value)} value={message} cols="30" rows="10" placeholder="Your Message" />
                <button type="submit">Send Message</button>            
            </form>
            <ToastContainer />
        </div>
    )

}