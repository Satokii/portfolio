import EmailImg from '../../../assets/svgs/email.svg'
import '../../../styles/main/main-contact.css'

function Contact() {

    return (
        <section id='contact' className='main-contact grid'>
            <h2 className='main-contact--header'>Contact</h2>
            <h3 className='main-contact--subheader'>Get in touch. Let&apos;s connect!</h3>
            <div className='main-contact--contact-info-container grid'>
                <img className='main-contact--email-img' src={EmailImg} alt="email img" />
                <p className='main-contact--email'>satokiito@gmail.com</p>
            </div>
        </section>
    )
}

export default Contact