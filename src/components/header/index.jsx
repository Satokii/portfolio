import '../../styles/header/header.css'

function Header() {

    function jumpToTop() {
        window.scrollTo(0, 0)
    }
 
    return (
        <header className='header grid'>
            <h1 className='logo' onClick={() => {
                jumpToTop()
            }}>Satoki Ito</h1>
            <nav className='header-nav grid'>
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

export default Header