import HTMLLogo from '../../../assets/tech-stack-logos/html-logo.jpg'
import CSSLogo from '../../../assets/tech-stack-logos/css-logo.jpg'
import JSLogo from '../../../assets/tech-stack-logos/js-logo.png'
import ReactLogo from '../../../assets/tech-stack-logos/react-logo.png'
import GitLogo from '../../../assets/tech-stack-logos/git-logo.webp'
import ExpressLogo from '../../../assets/tech-stack-logos/express-logo.png'
import PostgreSQLLogo from '../../../assets/tech-stack-logos/postgreSQL-logo.jpg'
import PrismaLogo from '../../../assets/tech-stack-logos/prisma-logo.webp'

function TechStack({ setShowTechStackText }) {

    const INITIAL_STATE = {
        name: '',
        className: ''
    }

    function removeText() {
        setShowTechStackText(INITIAL_STATE)
    }

    function toggleText(e) {
        const { name, className } = e.target
        setShowTechStackText({name: name, className: className})
    }
  return (
    <div onMouseOut={removeText} className="tech-stack-logos grid">
      <img
        className="js-logo"
        name="JavaScript"
        onMouseOver={toggleText}
        src={JSLogo}
        alt="js logo"
      />
      <img
        className="html-logo"
        name="HTML"
        onMouseOver={toggleText}
        src={HTMLLogo}
        alt="html logo"
      />
      <img
        className="git-logo"
        name="Git"
        onMouseOver={toggleText}
        src={GitLogo}
        alt="git logo"
      />
      <img
        className="css-logo"
        name="CSS"
        onMouseOver={toggleText}
        src={CSSLogo}
        alt="css logo"
      />
      <img
        className="react-logo"
        name="React"
        onMouseOver={toggleText}
        src={ReactLogo}
        alt="react logo"
      />
      <img
        className="express-logo"
        name="Express.js"
        onMouseOver={toggleText}
        src={ExpressLogo}
        alt="express logo"
      />
      <img
        className="postgreSQL-logo"
        name="PostgreSQL"
        onMouseOver={toggleText}
        src={PostgreSQLLogo}
        alt="postgresql logo"
      />
      <img
        className="prisma-logo"
        name="Prisma"
        onMouseOver={toggleText}
        src={PrismaLogo}
        alt="prisma logo"
      />
    </div>
  );
}

export default TechStack;
