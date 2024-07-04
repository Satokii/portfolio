import GithubLogo from "../../../assets/misc/github-logo.svg";
import WorkoutAddWorkoutVid from "../../../assets/vids/workout-add-workout.mp4";
import WorkoutNavVid from "../../../assets/vids/workout-general-navigation.mp4";
import "../../../styles/main/main-projects.css";
import ChatApp from "../projects/ChatApp";
import SpotifyClone from "../projects/SpotifyClone";

function MainProjects() {
  return (
    <section id="projects" className="main-projects grid">
      <h2 className="main-projects--header">My Projects</h2>
      <div className="main-projects--container grid">
        <ChatApp />
        <SpotifyClone />
        {/* <article className="main-projects--project grid">
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
        </article> */}
      </div>
    </section>
  );
}

export default MainProjects;
