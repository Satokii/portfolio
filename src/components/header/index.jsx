import { useNavigate } from 'react-router-dom'
import '../../styles/header/header.css'

function Header() {

    const navigate = useNavigate()

    function jumpToTop() {
        window.scrollTo(0, 0)
    }
 
    return (
        <header className='header grid'>
            <h1 className='logo' onClick={() => {
                navigate('/')
                jumpToTop()
            }}>Satoki Ito</h1>
            <nav className='header-nav grid'>
                <ul className='header-nav-list grid'>
                    <li className='header-home' onClick={() => {
                        navigate('/')
                        jumpToTop()
                    }}>Home</li>
                    <li className='header-about-me' onClick={() => {
                        navigate('/about-me')
                        jumpToTop()
                    }}>About Me</li>
                    <li className='header-projects' onClick={() => {
                        navigate('/projects')
                        jumpToTop()
                    }}>Projects</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header