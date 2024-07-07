import LinkedInLogo from "../../../assets/misc/linkedin-logo.webp";
import ContactForm from "./ContactForm";
import "../../../styles/main/main-contact.css";

function Contact() {
  return (
    <section id="contact" className="main-contact grid">
      <h2 className="main-contact--header">Contact</h2>
      <h3 className="main-contact--subheader">Get in touch!</h3>
      <div className="main-contact--contact-info-container grid">
        <ContactForm />
        <div className="main-contact--linkedin-container grid">
          <a
            className="main-contact--linkedin-link grid"
            target="_blank"
            href="https://www.linkedin.com/in/satoki-ito-470133241/"
            rel="noreferrer"
          >
            <p className="main-contact--linkedin-text"> Connect with me</p>
            <img
              className="main-contact--linkedin-logo"
              src={LinkedInLogo}
              alt="linkedin logo"
            />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
