import ChatAppSignIn from "../../../assets/project-images/chat-app-sign-in.png";
import ChatAppDashboard from "../../../assets/project-images/chat-app-dashboard.png";
import GithubLogo from "../../../assets/misc/github-logo.svg";

function ChatApp() {
  return (
    <>
      <article className="main-projects--project grid">
        <h3 className="project-info--header grid">Babble - Chat App</h3>
        <section className="project-info grid">
          <div className="project-info--description grid">
            <h4 className="project-sub-header">Description</h4>
            <p>
              Babble is a full-stack real-time chat application. The app has a
              sign up and sign in function, allows a user to add friends and
              send instant messages which update in real time. <br />
              <br /> For this app I used the Next.js framework along with
              TypeScript and Tailwind CSS to help streamline the development
              process. I utilised the Next Auth library for the authentication
              which helped with the sign up and sign in function as well as to
              implement a Google OAuth login option for the user. Bcrypt has
              been used for the password hashing during sign up and sign in for
              security. For the database I used Redis on the Upstash platform
              due to the low latency which helps with the real-time aspect of an
              instant messenger app, and Pusher in order to implement this
              real-time aspect. <br />
              <br /> In regard to some of the finer details of Babble, a user
              initially has the option of signing up for the app using an email,
              name and password, or alternatively using Google OAuth. After
              signing in the user can add any other user on the app by searching
              via their email. Successfully added friends can then send instant
              messages to each other. Messages have timestamps and can be
              deleted by the user who sent them. A user can also update their
              name and email in their profile.
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
    </>
  );
}

export default ChatApp;
