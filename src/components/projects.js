import quizApp from "../images/quizApp.png";
import portfolio from "../images/portfolio.png";
const Projects = () => {
  return (
    <>
      <section id="projects" className="projects-section">
        <h1>Projects</h1>
        <div className="projects-wrapper">
          <div className="project">
            <h3 className="project-title">Quiz App</h3>
            <div className="project-content">
              <img src={quizApp} alt="quiz-app" />
              <div className="project-info">
                <p>
                  <span>Attempt</span> quiz, <span>campare</span> results and{" "}
                  <span>create</span> quiz. Yes! it's an all round quiz app.
                  Users have <span>four</span> quiz topics to choose from.
                  <br />
                  My first project, which was deployed on Heroku(backEnd) and
                  Netlify(frontEnd).
                  <br />
                  Goal was to try as many things as possible while keeping it
                  minimal and maintaining low number of <span>API calls</span>.
                </p>
                <ul>
                  <li>
                    <i className="devicon-mongodb-plain-wordmark colored"></i>
                  </li>
                  <li>
                    <i className="devicon-express-original colored"></i>
                  </li>
                  <li>
                    <i className="devicon-react-original colored"></i>
                  </li>
                  <li>
                    <i className="devicon-nodejs-plain colored"></i>
                  </li>
                </ul>
                <div className="project-links">
                  <a
                    href="https://opsaran-quizapp.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>View live</span>
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                  <a
                    href="https://github.com/opsaran/quiz-app-frontend"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>Source code</span>
                    <i className="devicon-github-original"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="project">
            <h3 className="project-title">Portfolio</h3>
            <div className="project-content">
              <div className="project-info">
                <p>
                  My portfolio website built using <span>React</span>.
                  <br />
                  <br />
                  Focus was on UI and I kept it on one page.
                  <br />
                  Styling was done using vanilla CSS only.
                  <br />
                  <br />
                  Why React? plan was to built it using React unless I learn{" "}
                  <span>NextJs</span>.
                  <br />
                  <br />
                  I'll keep <span>improving</span> hpow it looks and how it
                  performs.
                </p>
                <ul>
                  <li>
                    <i className="devicon-mongodb-plain-wordmark colored"></i>
                  </li>
                  <li>
                    <i className="devicon-express-original colored"></i>
                  </li>
                  <li>
                    <i className="devicon-react-original colored"></i>
                  </li>
                  <li>
                    <i className="devicon-nodejs-plain colored"></i>
                  </li>
                </ul>
                <div className="project-links">
                  <a
                    href="https://opsaran.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>View live</span>
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                  <a
                    href="https://github.com/opsaran/portfolio"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>Source code</span>
                    <i className="devicon-github-original"></i>
                  </a>
                </div>
              </div>
              <img src={portfolio} alt="portfolio" />
            </div>
          </div>
          <div className="project">
            <h3 className="project-title">Upcoming Project</h3>
            <div className="project-content">
              <h4>
                An Ecommerce store built using Typescript, SASS with focus on
                architecture. Coming soon...
              </h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
