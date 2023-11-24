import DashboardMain from '../../../assets/project-images/dashboard-main.png'
import Placeholder from '../../../assets/project-images/placeholder.jpg'
import WorkInProgress from '../../../assets/project-images/work-in-progress.png'
import GithubLogo from '../../../assets/misc/github-logo.svg'
import '../../../styles/main/main-projects.css'

function MainProjects() {

    return (
        <section id='projects' className='main-projects grid'>
            <h2 className='main-projects--header'>Projects</h2>
            <div className='main-projects--container grid'>
                <article className='main-projects--project grid'>
                    <h3 className='project-info--header left-header grid'>Social Media Post Feed Dashboard</h3>
                    <section className='project-info grid'>
                        <div className='project-info--description grid'>
                            <h4>Description</h4>
                            <p>I built this social media style community post dashboard from scratch as a part of my Boolean bootcamp. I used a reference image provided by Boolean to guide the styling of the application. <br /> <br /> A user can create a new post, delete existing comments and posts, create a new user and also update existing user details. <br /> <br />I used an API as my data source and used the relevant API methods in order to send relevant requests to achieve the aforementioned behaviours.</p>
                            <p className='project-info--description--link'>Click here to view more about this app!</p>
                        </div>
                        <div className='project-info--tech grid'>
                            <h4 className='project-info--tech-header'>Tech Used</h4>
                            <ul className='project-info--tech-list'>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JavaScript</li>
                                <li>React</li>
                                <li>React Router</li>
                                <li>RESTful API</li>
                            </ul>
                        </div>
                    </section>
                    <div className='project-image--container grid'>
                        <img className='project-image--image' src={DashboardMain} alt="dashboard project main photo"/>
                        <div className='project-image--github-link-container grid'>
                            <a className='project-image--github-link grid' target='_blank' href="https://github.com/Satokii/react-cohort-dashboard-challenge" rel="noreferrer">
                                Github Link
                            </a>
                            <img className='github-link-logo' src={GithubLogo} alt="github logo" width={20} />
                        </div>
                        
                    </div>
                </article>
                {/* NEXT PROJECT */}
                <article className='main-projects--project grid'>
                    <h3 className='project-info--header right-header grid'>Placeholder Project</h3>
                    <div className='project-image--container grid'>
                        <img className='project-image--image' src={Placeholder} alt="placeholder" width={600}/>
                        <div className='project-image--github-link-container grid'>
                            <a className='project-image--github-link grid' target='_blank' href="#" rel="noreferrer">
                                Github Link
                            </a>
                            <img className='github-link-logo' src={GithubLogo} alt="github logo" width={20} />
                        </div>
                    </div>
                    <section className='project-info grid'>
                        <div className='project-info--tech grid'>
                            <h4 className='project-info--tech-header'>Tech Used</h4>
                            <ul className='project-info--tech-list'>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JavaScript</li>
                                <li>React</li>
                                <li>React Router</li>
                                <li>RESTful API</li>
                            </ul>
                        </div>
                        <div className='project-info--description grid'>
                            <h4>Description</h4>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla quis eum ratione deserunt, distinctio blanditiis sint vero veniam minima cum perspiciatis maiores est provident quae, eius sed architecto id enim. <br /> <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis error voluptatem porro officiis doloribus non, corrupti qui corporis assumenda explicabo itaque excepturi veniam illo voluptatibus, facilis quam! Qui, harum corporis. <br /> <br />Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque explicabo repellat doloribus consectetur tempore, delectus pariatur accusamus, eaque necessitatibus cum ipsum id iure libero repellendus corporis eligendi quia provident molestiae!</p>
                            <p className='project-info--description--link'>Click here to view more about this app!</p>
                        </div>
                    </section>
                </article>
                {/* NEXT PROJECT */}
                <article className='main-projects--project grid'>
                    <h3 className='project-info--header left-header grid'>Work in progress!</h3>
                    <section className='project-info grid'>
                        <div className='project-info--description grid'>
                            <h4>Description</h4>
                            <p>🛠️ Work is still under construction. Please check back again later 🛠️</p>
                            <p className='project-info--description--link'>Click here to view more about this app!</p>
                        </div>
                        <div className='project-info--tech grid'>
                            <h4 className='project-info--tech-header'>Tech Used</h4>
                            <ul className='project-info--tech-list'>
                                <li>???</li>
                                <li>???</li>
                                <li>???</li>
                                <li>???</li>
                            </ul>
                        </div>
                    </section>
                    <div className='project-image--container grid'>
                        <img className='project-image--image' src={WorkInProgress} alt="under construction" width={500}/>
                        <div className='project-image--github-link-container grid'>
                            <a className='project-image--github-link grid' target='_blank' href="#" rel="noreferrer">
                                Github Link
                            </a>
                            <img className='github-link-logo' src={GithubLogo} alt="github logo" width={20} />
                        </div>
                        
                    </div>
                </article>
            </div>
        </section>
    )
}

export default MainProjects