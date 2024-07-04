import SpotifyPlaybackVid from "../../../assets/vids/spotify-playback.mp4";
import SpotifyDetailsVid from "../../../assets/vids/spotify-details.mp4";
import GithubLogo from "../../../assets/misc/github-logo.svg";

function SpotifyClone() {
  return (
    <>
      <article className="main-projects--project grid">
        <h3 className="project-info--header grid">Codeify - Spotify Clone</h3>
        <section className="project-info grid">
          <div className="project-info--description grid">
            <h4 className="project-sub-header">Description</h4>
            <p>
              Codeify is a full-stack Spotify clone app. What I like most about
              the Spotify app is the design and ease of use for the consumer. As
              such, I wanted to remain truthful to this design in my own
              approach, whilst also implementing a few subtle changes to add my
              own flair. <br /> <br /> In order to achieve this I have utilised
              the Spotify Web API to create an app with the core functionality
              to allow a user to play/pause a track, skip forward/backwards and
              change/mute the volume. I have also implemented a search feature
              and the details for every artist/album/playlist can be viewed
              throughout the app. The user&apos;s own playlists, saved albums
              and liked tracks are available in the left side menu. <br />{" "}
              <br /> A particular feature of the Spotify app I like is the use
              of the album artwork colours to generate a gradient background. I
              have also implemented this feature into my own app to mix the
              predominant colours of an album artwork and use the result to
              dynamically render a gradient along with the core background
              colour. <br /> <br />
              For the backend I have added a sign up and login feature for added
              security. For this authentication I have used JWT and Bcrypt. I
              have also implemented a feature to record the number of times a
              track is played and save these stats to the database. The user can
              view how many times they have listened to a track in the app.
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
    </>
  );
}

export default SpotifyClone;
