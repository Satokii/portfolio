import ChatAppSignIn from "../../../assets/project-images/chat-app-sign-in.png";
import ChatAppDashboard from "../../../assets/project-images/chat-app-dashboard.png";
import GithubLogo from "../../../assets/misc/github-logo.svg";
import SpotifyPlaybackVid from "../../../assets/vids/spotify-playback.mp4";
import SpotifyDetailsVid from "../../../assets/vids/spotify-details.mp4";
import WorkoutAddWorkoutVid from "../../../assets/vids/workout-add-workout.mp4";
import WorkoutNavVid from "../../../assets/vids/workout-general-navigation.mp4";
import "../../../styles/main/main-projects.css";

function MainProjects() {
  return (
    <section id="projects" className="main-projects grid">
      <h2 className="main-projects--header">My Projects</h2>
      <div className="main-projects--container grid">
        <article className="main-projects--project grid">
          <h3 className="project-info--header grid">Babble - Chat App</h3>
          <section className="project-info grid">
            <div className="project-info--description grid">
              <h4 className="project-sub-header">Description</h4>
              <p>
                Babble is a full-stack real-time chat application. The app has a sign up
                and sign in function, allows a user to add friends and send
                instant messages which update in real time. <br />
                <br /> For this app I used the Next.js framework along with
                TypeScript and Tailwind CSS to help streamline the development
                process. I utilised the Next Auth library for the authentication
                which helped with the sign up and sign in function as well as to
                implement a Google OAuth login option for the user. Bcrypt has
                been used for the password hashing during sign up and sign in
                for security. For the database I used Redis on the Upstash
                platform due to the low latency which helps with the real-time
                aspect of an instant messenger app, and Pusher in order to
                implement this real-time aspect. <br />
                <br /> In regard to some of the finer details of Babble, a user
                initially has the option of signing up for the app using an
                email, name and password, or alternatively using Google OAuth.
                After signing in the user can add any other user on the app by
                searching via their email. Successfully added friends can then
                send instant messages to each other. Messages have timestamps
                and can be deleted by the user who sent them. A user can also
                update their name and email in their profile.
              </p>
            </div>
            <div className="project-info--tech grid">
              <h4 className="project-sub-header">Tech Used</h4>
              <ul className="project-info--tech-list grid">
                <li>HTML</li>
                <li>Tailwind CSS</li>
                <li>TypeScript</li>
                <li>Next.js</li>
                <li>Next Auth</li>
                <li>Redis</li>
                <li>Pusher</li>
                <li>Bcrypt</li>
              </ul>
            </div>
          </section>
          <div className="project-image--container grid">
            <img
              className="project-image--image"
              src={ChatAppSignIn}
              alt="chat app sign in page"
            />
            <img
              className="project-image--image"
              src={ChatAppDashboard}
              alt="chat app dashboard page"
            />
          </div>
          <div className="project-links-container grid">
            <a
              className="github-link--container grid"
              target="_blank"
              href="https://github.com/Satokii/chat-app"
              rel="noreferrer"
            >
              <p className="github-link grid">Github</p>
              <img
                className="github-link-logo"
                src={GithubLogo}
                alt="github logo"
              />
            </a>
          </div>
        </article>
        <article className="main-projects--project grid">
          <h3 className="project-info--header grid">Codeify - Spotify Clone</h3>
          <section className="project-info grid">
            <div className="project-info--description grid">
              <h4 className="project-sub-header">Description</h4>
              <p>
                Codeify is a full-stack Spotify clone app. What I like most
                about the Spotify app is the design and ease of use for the
                consumer. As such, I wanted to remain truthful to this design in
                my own approach, whilst also implementing a few subtle changes
                to add my own flair. <br /> <br /> In order to achieve this I
                have utilised the Spotify Web API to create an app with the core
                functionality to allow a user to play/pause a track, skip
                forward/backwards and change/mute the volume. I have also
                implemented a search feature and the details for every
                artist/album/playlist can be viewed throughout the app. The
                user&apos;s own playlists, saved albums and liked tracks are
                available in the left side menu. <br /> <br /> A particular
                feature of the Spotify app I like is the use of the album
                artwork colours to generate a gradient background. I have also
                implemented this feature into my own app to mix the predominant
                colours of an album artwork and use the result to dynamically
                render a gradient along with the core background colour. <br />{" "}
                <br />
                For the backend I have added a sign up and login feature for
                added security. For this authentication I have used JWT and
                Bcrypt. I have also implemented a feature to record the number
                of times a track is played and save these stats to the database.
                The user can view how many times they have listened to a track
                in the app.
              </p>
            </div>
            <div className="project-info--tech grid">
              <h4 className="project-sub-header">Tech Used</h4>
              <ul className="project-info--tech-list grid">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Spotify API</li>
                <li>Express.js</li>
                <li>PostgreSQL</li>
                <li>Prisma</li>
                <li>JWT</li>
                <li>Bcrypt</li>
              </ul>
            </div>
          </section>
          <div className="project-video--container grid">
            <div>
              <h4 className="project-sub-header">
                Music Playback and Volume Controls Demo:
              </h4>
              <video
                preload="auto"
                controls
                src={`${SpotifyPlaybackVid}#t=0.1`}
                type="video/mp4"
              ></video>
            </div>
            <div>
              <h4 className="project-sub-header">
                Further Details and Search Feature Demo:
              </h4>
              <video
                preload="auto"
                controls
                src={`${SpotifyDetailsVid}#t=0.1`}
                type="video/mp4"
              ></video>
            </div>
          </div>
          <div className="project-links-container grid">
            <a
              className="github-link--container grid"
              target="_blank"
              href="https://github.com/Satokii/spotify-clone"
              rel="noreferrer"
            >
              <p className="github-link grid">Github (client)</p>
              <img
                className="github-link-logo"
                src={GithubLogo}
                alt="github logo"
              />
            </a>
            <a
              className="github-link--container grid"
              target="_blank"
              href="https://github.com/Satokii/spoti-server"
              rel="noreferrer"
            >
              <p className="github-link grid">Github (server)</p>
              <img
                className="github-link-logo"
                src={GithubLogo}
                alt="github logo"
              />
            </a>
          </div>
        </article>
        <article className="main-projects--project grid">
          <h3 className="project-info--header grid">Gymtyme - Workout App</h3>
          <section className="project-info grid">
            <div className="project-info--description grid">
              <h4 className="project-sub-header">Description</h4>
              <p>
                Gymtyme is a front-end workout app designed to allow the user to
                create workouts tailored to their own fitness goals. The user
                can either choose exercises from a filterable list of suggested
                exercises, changing the sets and reps as required, or by
                manually entering the details of an exercise. <br />
                <br />
                The workouts can be completed once done, or deleted if no longer
                required. A list of completed workouts is available to the user
                so they have a record of previous workouts. <br />
                <br />I wanted to create an easy to navigate app so the user can
                quickly find and create workouts, as well as providing a list of
                suggested exercises based on each muscle group. The user profile
                page also provides access to all these features, again for ease
                of use.{" "}
              </p>
            </div>
            <div className="project-info--tech grid">
              <h4 className="project-sub-header">Tech Used</h4>
              <ul className="project-info--tech-list grid">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
              </ul>
            </div>
          </section>
          <div className="project-video--container grid">
            <div>
              <h4 className="project-sub-header">Create New Workout Demo:</h4>
              <video
                preload="auto"
                controls
                src={`${WorkoutAddWorkoutVid}#t=0.1`}
                type="video/mp4"
              ></video>
            </div>
            <div>
              <h4 className="project-sub-header">App Navigation Demo:</h4>
              <video
                preload="auto"
                controls
                src={`${WorkoutNavVid}#t=0.1`}
                type="video/mp4"
              ></video>
            </div>
          </div>
          <div className="project-links-container grid">
            <a
              className="github-link--container grid"
              target="_blank"
              href="https://github.com/Satokii/workout-app"
              rel="noreferrer"
            >
              <p className="github-link grid">Github</p>
              <img
                className="github-link-logo"
                src={GithubLogo}
                alt="github logo"
              />
            </a>
            <a
              className="deployed-link--container"
              target="_blank"
              href="https://gymtyme.netlify.app/"
              rel="noreferrer"
            >
              <p>Deployed app</p>
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}

export default MainProjects;
