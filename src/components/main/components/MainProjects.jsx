import DashboardMain from '../../../assets/project-images/dashboard-main.png'
import GithubLogo from '../../../assets/misc/github-logo.svg'
import SpotifyPlaybackVid from '../../../assets/vids/spotify-playback.mp4'
import SpotifyDetailsVid from '../../../assets/vids/spotify-details.mp4'
import WorkoutAddWorkoutVid from '../../../assets/vids/workout-add-workout.mp4'
import WorkoutNavVid from '../../../assets/vids/workout-general-navigation.mp4'
import '../../../styles/main/main-projects.css'

function MainProjects() {

    return (
        <section id='projects' className='main-projects grid'>
            <h2 className='main-projects--header'>My Projects</h2>
            <div className='main-projects--container grid'>
                <article className='main-projects--project grid'>
                    <h3 className='project-info--header grid'>Spotify Clone</h3>
                    <section className='project-info grid'>
                        <div className='project-info--description grid'>
                            <h4 className='project-sub-header'>Description</h4>
                            <p>My most recent project (and current work in progress) is the creation of this full-stack Spotify clone app. What I like most about the Spotify app is the design and ease of use for the consumer. As such, I wanted to remain truthful to this design in my own approach, whilst also implementing a few subtle changes to add my own flair. <br /> <br /> In order to achieve this I have utilised the Spotify Web API to create an app with the core functionality to allow a user to play/pause a track, skip forward/backwards and change/mute the volume. I have also implemented a search feature and the details for every artist/album/playlist can be viewed throughout the app. The user&apos;s own playlists, saved albums and liked tracks are available in the left side menu. <br /> <br /> A particular feature of the Spotify app I like is the use of the album artwork colours to generate a gradient background. I have also implemented this feature into my own app to mix the predominant colours of an album artwork and use the result to dynamically render a gradient along with the core background colour. <br /> <br />Regarding the backend aspect of this app, I have implemented a login feature for added security. </p>
                        </div>
                        <div className='project-info--tech grid'>
                            <h4 className='project-sub-header'>Tech Used</h4>
                            <ul className='project-info--tech-list grid'>
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
                    <div className='project-video--container grid'>
                        <div>
                            <h4 className='project-sub-header'>Music Playback and Volume Controls Demo:</h4>
                            <video preload='auto' controls src={`${SpotifyPlaybackVid}#t=0.1`} type="video/mp4" ></video>
                        </div>
                        <div>
                            <h4 className='project-sub-header'>Further Details and Search Feature Demo:</h4>
                            <video preload='auto' controls src={`${SpotifyDetailsVid}#t=0.1`} type="video/mp4" ></video>
                        </div>
                    </div>
                    <div className='project-links-container grid'>
                        <div className='github-link--container grid'>
                            Github link pending
                        </div>
                    </div>
                    <div className='project-links-container grid'>
                        <a className='github-link--container grid' target='_blank' href="https://github.com/Satokii/spotify-clone" rel="noreferrer">
                            <p className='github-link grid'>
                                Github (client)
                            </p>
                            <img className='github-link-logo' src={GithubLogo} alt="github logo" />
                        </a>
                    </div>
                </article>
                <article className='main-projects--project grid'>
                    <h3 className='project-info--header grid'>Gymtyme - Workout App</h3>
                    <section className='project-info grid'>
                        <div className='project-info--description grid'>
                            <h4 className='project-sub-header'>Description</h4>
                            <p>Gymtyme is a front-end workout app designed to allow the user to create workouts tailored to their own fitness goals. The user can either choose exercises from a filterable list of suggested exercises, changing the sets and reps as required, or by manually entering the details of an exercise. <br /><br />The workouts can be completed once done, or deleted if no longer required. A list of completed workouts is available to the user so they have a record of previous workouts. <br /><br />I wanted to create an easy to navigate app so the user can quickly find and create workouts, as well as providing a list of suggested exercises based on each muscle group. The user profile page also provides access to all these features, again for ease of use. </p>
                        </div>
                        <div className='project-info--tech grid'>
                            <h4 className='project-sub-header'>Tech Used</h4>
                            <ul className='project-info--tech-list grid'>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JavaScript</li>
                                <li>React</li>
                            </ul>
                        </div>
                    </section>
                    <div className='project-video--container grid'>
                        <div>
                            <h4 className='project-sub-header'>Create New Workout Demo:</h4>
                            <video preload='auto' controls src={`${WorkoutAddWorkoutVid}#t=0.1`} type="video/mp4" ></video>
                        </div>
                        <div>
                            <h4 className='project-sub-header'>App Navigation Demo:</h4>
                            <video preload='auto' controls src={`${WorkoutNavVid}#t=0.1`} type="video/mp4" ></video>
                        </div>
                    </div>
                    <div className='project-links-container grid'>
                        <a className='github-link--container grid' target='_blank' href="https://github.com/Satokii/workout-app" rel="noreferrer">
                            <p className='github-link grid'>
                                    Github
                            </p>
                            <img className='github-link-logo' src={GithubLogo} alt="github logo" />
                        </a>
                        <a className='deployed-link--container' target='_blank' href="https://gymtyme.netlify.app/" rel="noreferrer">
                            <p>Deployed app</p>
                        </a>
                    </div>
                </article>
                <article className='main-projects--project grid'>
                    <h3 className='project-info--header grid'>Social Media Post Feed Dashboard</h3>
                    <section className='project-info grid'>
                        <div className='project-info--description grid'>
                            <h4 className='project-sub-header'>Description</h4>
                            <p>I built this social media style community post dashboard from scratch as a part of my Boolean bootcamp. I used a reference image provided by Boolean to guide the styling of the application. <br /> <br /> A user can create a new post, delete existing comments and posts, create a new user and also update existing user details. <br /> <br />I used an API as my data source and used the relevant API methods in order to send relevant requests to achieve the aforementioned behaviours.</p>
                        </div>
                        <div className='project-info--tech grid'>
                            <h4 className='project-sub-header'>Tech Used</h4>
                            <ul className='project-info--tech-list grid'>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JavaScript</li>
                                <li>React</li>
                                <li>RESTful API</li>
                            </ul>
                        </div>
                    </section>
                    <div className='project-image--container grid'>
                        <img className='project-image--image' src={DashboardMain} alt="dashboard project main photo"/>
                    </div>
                    <div className='project-links-container grid'>
                        <a className='github-link--container grid' target='_blank' href="https://github.com/Satokii/react-cohort-dashboard-challenge" rel="noreferrer">
                            <p className='github-link grid'>
                                    Github
                            </p>
                            <img className='github-link-logo' src={GithubLogo} alt="github logo" />
                        </a>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default MainProjects
