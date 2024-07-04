import ChatApp from "../projects/ChatApp";
import SpotifyClone from "../projects/SpotifyClone";
import WorkoutApp from "../projects/WorkoutApp";
import "../../../styles/main/main-projects.css";

function MainProjects() {
  return (
    <section id="projects" className="main-projects grid">
      <h2 className="main-projects--header">My Projects</h2>
      <div className="main-projects--container grid">
        <ChatApp />
        <SpotifyClone />
        <WorkoutApp />
      </div>
    </section>
  );
}

export default MainProjects;
