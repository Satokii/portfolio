import Overview from './components/Overview'
import MainAboutMe from './components/MainAboutMe'
import MainProjects from './components/MainProjects'
import Contact from './components/Contact'
import '../../styles/main/main.css'

function Main() {

    return (
        <main className='main grid'>
            <Overview></Overview>
            <MainAboutMe />
            <MainProjects />
            <Contact />
        </main>
    )
}

export default Main