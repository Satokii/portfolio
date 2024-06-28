import HTMLLogo from '../../../assets/tech-stack-logos/html-logo.jpg'
import CSSLogo from '../../../assets/tech-stack-logos/css-logo.jpg'
import JSLogo from '../../../assets/tech-stack-logos/js-logo.png'
import ReactLogo from '../../../assets/tech-stack-logos/react-logo.png'
import GitLogo from '../../../assets/tech-stack-logos/git-logo.webp'
import ExpressLogo from '../../../assets/tech-stack-logos/express-logo.png'
import PostgreSQLLogo from '../../../assets/tech-stack-logos/postgreSQL-logo.jpg'
import PrismaLogo from '../../../assets/tech-stack-logos/prisma-logo.webp'

import { useState } from 'react'
import '../../../styles/main/main-about-me.css'

function MainAboutMe() {

    const INITIAL_STATE = {
        name: '',
        className: ''
    }

    const [showTechStackText, setShowTechStackText] = useState(INITIAL_STATE)

    function removeText() {
        setShowTechStackText(INITIAL_STATE)
    }

    function toggleText(e) {
        const { name, className } = e.target
        setShowTechStackText({name: name, className: className})
    }

    return (
        <section id='about-me' className='main-about-me grid'>
            <h2 className='main-about-me-header'>About Me</h2>
            <p className='main-about-me-text grid'>Hi, my name is Satoki. <br />I am a junior full-stack developer based in the UK with a passion for developing functional and well-designed applications in our ever expanding world of technology. As a recent graduate of the full-time, six-month-long Boolean UK Software Development course, I have continued to develop my skills through a range of personal projects. I always strive to improve and use my problem-solving mindset to deliver calculated solutions, continuing to hone my skills every day. <br /><br /> Prior to becoming a full-stack developer, I accumulated over 5 years of experience in the financial sector, having worked at both a bank and a financial advisory firm. These roles immersed me in fast-paced, dynamic environments in which I continuously challenged myself to learn and progress. This commitment to continuous growth is a value I uphold every day. <br /><br /> I have experience working with the following technologies (click or hover images):</p>
            <div onMouseOut={removeText} className='tech-stack-logos grid'>
                <img className='js-logo' name='JavaScript' onMouseOver={toggleText}  src={JSLogo} alt="js logo" />
                <img className='html-logo' name='HTML' onMouseOver={toggleText}  src={HTMLLogo} alt="html logo"/>
                <img className='git-logo' name='Git' onMouseOver={toggleText}  src={GitLogo} alt="git logo" />
                <img className='css-logo' name='CSS' onMouseOver={toggleText}  src={CSSLogo} alt="css logo"/>
                <img className='react-logo' name='React' onMouseOver={toggleText}  src={ReactLogo} alt="react logo" />
                <img className='express-logo' name='Express.js' onMouseOver={toggleText}  src={ExpressLogo} alt="express logo" />
                <img className='postgreSQL-logo' name='PostgreSQL' onMouseOver={toggleText}  src={PostgreSQLLogo} alt="postgresql logo" />
                <img className='prisma-logo' name='Prisma' onMouseOver={toggleText}  src={PrismaLogo} alt="prisma logo" />
            </div>
            <div className='tech-stack-text grid'>
                <p className={showTechStackText.className}>{showTechStackText.name}</p>
            </div>
        </section>
    )
}

export default MainAboutMe