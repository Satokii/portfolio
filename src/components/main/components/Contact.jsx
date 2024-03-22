import { useState } from 'react'
import { send } from '@emailjs/browser'

import EmailImg from '../../../assets/svgs/email.svg'
import '../../../styles/main/main-contact.css'

function Contact() {
    const [toSend, setToSend] = useState({
        from_name: '',
        to_name: '',
        message: '',
        reply_to: '',
      });
    
      const onSubmit = (e) => {
        e.preventDefault();
        send(
          'SERVICE ID',
          'TEMPLATE ID',
          toSend,
          'User ID'
        )
          .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
          })
          .catch((err) => {
            console.log('FAILED...', err);
          });
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
                {/* <input
                    type='text'
                    name='to_name'
                    placeholder='to name'
                    value={toSend.to_name}
                    onChange={handleChange}
                /> */}
                <input
                    type='text'
                    name='message'
                    placeholder='Your message'
                    value={toSend.message}
                    onChange={handleChange}
                />
                <input
                    type='text'
                    name='reply_to'
                    placeholder='Your email'
                    value={toSend.reply_to}
                    onChange={handleChange}
                />
                <button type='submit'>Submit</button>
            </form>
        </section>
    )
}

export default Contact