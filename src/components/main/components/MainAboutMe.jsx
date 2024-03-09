import HTMLLogo from '../../../assets/tech-stack-logos/html-logo.jpg'
import CSSLogo from '../../../assets/tech-stack-logos/css-logo.jpg'
import JSLogo from '../../../assets/tech-stack-logos/js-logo.png'
import ReactLogo from '../../../assets/tech-stack-logos/react-logo.png'
import GitLogo from '../../../assets/tech-stack-logos/git-logo.webp'

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
            <p className='main-about-me-text grid'>I have learnt a range of skills in my journey so far. I have experience working with:</p>
            <div onMouseOut={removeText} className='tech-stack-logos grid'>
                <img className='js-logo' name='JavaScript' onMouseOver={toggleText}  src={JSLogo} alt="js logo" />
                <img className='html-logo' name='HTML' onMouseOver={toggleText}  src={HTMLLogo} alt="html logo"/>
                <img className='git-logo' name='Git' onMouseOver={toggleText}  src={GitLogo} alt="git logo" />
                <img className='css-logo' name='CSS' onMouseOver={toggleText}  src={CSSLogo} alt="css logo"/>
                <img className='react-logo' name='React' onMouseOver={toggleText}  src={ReactLogo} alt="react logo" />
            </div>
            <div className='tech-stack-text grid'>
                <p className={showTechStackText.className}>{showTechStackText.name}</p>
            </div>
        </section>
    )
}

export default MainAboutMe