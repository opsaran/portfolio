import About from "./about.js";

import Skillset from "./skillset.js";
import Projects from "./projects.js";
import Contact from "./contact.js";
import myself from "../images/myselfnew.png";
const Description = () => {
  return (
    <>
      <section className="description">
        <div className="intro">
          <p className="italicise">Enter the world of</p>
          <h1>Om Prakash Saran</h1>
          <div className="typing-text-effect">
            <h2>I'm a</h2>
            <ul className="changing-text">
              <li>
                <span>Web Developer</span>
              </li>
              <li>
                <span>Freelancer</span>
              </li>
              <li>
                <span>Problem Solver</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="hero-image">
          <img src={myself} alt="" />
        </div>
      </section>

      <About />
      <Skillset />
      <Projects />
      <Contact />
    </>
  );
};

export default Description;
