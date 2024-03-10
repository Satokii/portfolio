import DashboardMain from '../../../assets/project-images/dashboard-main.png'
import Placeholder from '../../../assets/project-images/placeholder.jpg'
import GithubLogo from '../../../assets/misc/github-logo.svg'
import SpotifyPlaybackVid from '../../../assets/vids/spotify-playback.mp4'
import SpotifyDetailsVid from '../../../assets/vids/spotify-details.mp4'
import '../../../styles/main/main-projects.css'

function MainProjects() {

    return (
        <section id='projects' className='main-projects grid'>
            <h2 className='main-projects--header'>My Projects</h2>
            <div className='main-projects--container grid'>
            <article className='main-projects--project grid'>
                    <h3 className='project-info--header left-header grid'>Spotify Clone</h3>
                    <section className='project-info grid'>
                        <div className='project-info--description grid'>
                            <h4>Description</h4>
                            <p>My most recent project (and current work in progress) is the creation of this full-stack Spotify clone app. What I like most about the Spotify app is the design and ease of use for the consumer. As such, I wanted to remain truthful to this design in my own approach, whilst also implementing a few subtle changes to add my own flair. <br /> <br /> In order to achieve this I have utilised the Spotify Web API to create an app with the core functionality to allow a user to play/pause a track, skip forward/backwards and change/mute the volume. I have also implemented a search feature and the details for every artist/album/playlist can be viewed throughout the app. The user&apos;s own playlists, saved albums and liked tracks are available in the left side menu. <br /> <br /> A particular feature of the Spotify app I like is the use of the album artwork colours to generate a gradient background. I have also implemented this feature into my own app to mix the predominant colours of an album artwork and use the result to dynamically render a gradient along with the core background colour. <br /> <br />Regarding the backend aspect of this app, I have implemented a login feature for added security. </p>
                        </div>
                        <div className='project-info--tech grid'>
                            <h4 className='project-info--tech-header'>Tech Used</h4>
                            <ul className='project-info--tech-list'>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JavaScript</li>
                                <li>React</li>
                                <li>Spotify API</li>
                                <li>Express.js</li>
                                <li>PostgreSQL</li>
                                <li>Prisma</li>
                            </ul>
                        </div>
                    </section>
                    <div className='project-image--container grid'>
                        <div className='project-video--container grid'>
                            <h4>Music Playback and Volume Controls:</h4>
                            <video controls src={SpotifyPlaybackVid} type="video/webm" ></video>
                            <h4>Further Details and Search Feature:</h4>
                            <video controls src={SpotifyDetailsVid} type="video/webm" ></video>
                        </div>
                        <div className='project-links-container grid'>
                            <div className='project-image--github-link-container grid'>
                                <a className='project-image--github-link grid' target='_blank' href="#" rel="noreferrer">
                                    Github
                                </a>
                                <img className='github-link-logo' src={GithubLogo} alt="github logo" width={25} />
                            </div>
                        </div>
                    </div>
                </article>
                {/* NEXT PROJECT */}
                <article className='main-projects--project grid'>
                    <h3 className='project-info--header right-header grid'>Placeholder Project</h3>
                    <div className='project-image--container grid'>
                        <img className='project-image--image' src={Placeholder} alt="placeholder" width={600}/>
                        <div className='project-links-container grid'>
                            <div className='project-image--github-link-container grid'>
                                <a className='project-image--github-link grid' target='_blank' href="#" rel="noreferrer">
                                    Github
                                </a>
                                <img className='github-link-logo' src={GithubLogo} alt="github logo" width={25} />
                            </div>
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
                        </div>
                    </section>
                </article>
                {/* NEXT PROJECT */}
                <article className='main-projects--project grid'>
                    <h3 className='project-info--header left-header grid'>Social Media Post Feed Dashboard</h3>
                    <section className='project-info grid'>
                        <div className='project-info--description grid'>
                            <h4>Description</h4>
                            <p>I built this social media style community post dashboard from scratch as a part of my Boolean bootcamp. I used a reference image provided by Boolean to guide the styling of the application. <br /> <br /> A user can create a new post, delete existing comments and posts, create a new user and also update existing user details. <br /> <br />I used an API as my data source and used the relevant API methods in order to send relevant requests to achieve the aforementioned behaviours.</p>
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
                        <div className='project-links-container grid'>
                            <div className='project-image--github-link-container grid'>
                                <a className='project-image--github-link grid' target='_blank' href="https://github.com/Satokii/react-cohort-dashboard-challenge" rel="noreferrer">
                                    Github
                                </a>
                                <img className='github-link-logo' src={GithubLogo} alt="github logo" width={25} />
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default MainProjects