// import { useState } from 'react';
// import '../../styles/header/header.css'

// function Header() {
//     const [isMenuOpen, setIsMenuOpen] = useState(false);

//     function jumpToTop() {
//         window.scrollTo(0, 0)
//     }

//     const toggleMenu = () => {
//         setIsMenuOpen(!isMenuOpen);
//     };
 
//     return (
//         <header className='header grid'>
//             <h1 className='logo' onClick={() => {
//                 jumpToTop()
//             }}>Satoki Ito</h1>
//             <div className="menu-toggle" onClick={toggleMenu}>
//                 <div className={`bar ${isMenuOpen ? 'active' : ''}`}></div>
//                 <div className={`bar ${isMenuOpen ? 'active' : ''}`}></div>
//                 <div className={`bar ${isMenuOpen ? 'active' : ''}`}></div>
//             </div>
//             <nav className={`header-nav grid ${isMenuOpen ? 'active' : ''}`}>
//                 <ul className='header-nav-list grid'>
//                     <li className='header-about-me'>
//                         <a href="#about-me">About Me</a>
//                     </li>
//                     <li className='header-projects'>
//                         <a href="#projects">Projects</a>
//                     </li>
//                     <li className='header-contact'>
//                         <a href="#contact">Contact</a>
//                     </li>
//                 </ul>
//             </nav>
//         </header>
//     )
// }

// export default Header

import { useState } from 'react';
import '../../styles/header/header.css';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function jumpToTop() {
        window.scrollTo(0, 0);
    }

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className='header grid'>
            <h1 className='logo' onClick={() => jumpToTop()}>Satoki Ito</h1>
            <div className="menu-toggle" onClick={toggleMenu}>
                <div className={`bar ${isMenuOpen ? 'active' : ''}`}></div>
                <div className={`bar ${isMenuOpen ? 'active' : ''}`}></div>
                <div className={`bar ${isMenuOpen ? 'active' : ''}`}></div>
            </div>
            <nav className={`header-nav grid ${isMenuOpen ? 'active' : ''}`}>
                <ul className='header-nav-list grid'>
                    <li className='header-about-me'>
                        <a href="#about-me">About Me</a>
                    </li>
                    <li className='header-projects'>
                        <a href="#projects">Projects</a>
                    </li>
                    <li className='header-contact'>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;
