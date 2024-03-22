import { useState } from 'react'
import emailjs from '@emailjs/browser'

import EmailImg from '../../../assets/svgs/email.svg'
import '../../../styles/main/main-contact.css'

const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;


function Contact() {
    const [toSend, setToSend] = useState({
        from_name: '',
        message: '',
        from_email: '',
    });
    
    const onSubmit = (e) => {
        e.preventDefault();
       
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
        .then(() => {
            alert('Message Sent Successfully')
        }, (error) => {
            console.log(error.text);
            alert('Something went wrong!')
        });
       
        setToSend({
            from_name: '',
            message: '',
            from_email: '',
        })
        };
    
    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    };

    return (
        <section id='contact' className='main-contact grid'>
            <h2 className='main-contact--header'>Contact</h2>
            <h3 className='main-contact--subheader'>Get in touch. Let&apos;s connect!</h3>
            {/* <div className='main-contact--contact-info-container grid'>
                <img className='main-contact--email-img' src={EmailImg} alt="email img" />
                <p className='main-contact--email'>satokiito@gmail.com</p>
            </div> */}
            <form onSubmit={onSubmit}>
                <input
                    type='text'
                    name='from_name'
                    placeholder='Your name'
                    value={toSend.from_name}
                    onChange={handleChange}
                />
                <input
                    type='text'
                    name='message'
                    placeholder='Your message'
                    value={toSend.message}
                    onChange={handleChange}
                />
                <input
                    type='text'
                    name='from_email'
                    placeholder='Your email'
                    value={toSend.from_email}
                    onChange={handleChange}
                />
                <button type='submit'>Submit</button>
            </form>
        </section>
    )
}

export default Contact