import ProfilePhoto from '../../../assets/profile-photo.jpg'
import '../../../styles/main/overview.css'

function Overview() {

    return (
        <section id='overview' className='overview grid'>
            <div className='overview-container grid'>
                <div className='overview-left grid'>
                    <header className='overview-header-container grid'>
                        <h2 className='overview-header grid'>Satoki Ito</h2>
                        <h3 className='overview-job-header'>Full-Stack Developer</h3>
                    </header>
                    <div className='profile-photo-container grid'>
                        <img className='profile-photo grid' src={ProfilePhoto} alt="profile photo" width={380} />
                    </div>
                </div>
                <div className='overview-right grid'>
                    <div className='overview-quick-links grid'>
                        <a className='grid' href="#about-me">About Me</a>
                        <a className='grid' href='#projects'>My Projects</a>
                        <a className='grid' href='#contact'>Contact Me</a>
                        <a className='grid' href='https://github.com/Satokii' target="_blank" rel="noreferrer">Github</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Overview