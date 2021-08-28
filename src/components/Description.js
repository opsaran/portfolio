import About from "./about.js";

import Skillset from "./skillset.js";
import Projects from "./projects.js";
import Contact from "./contact.js";

const Description = () => {
  return (
    <>
      <section className="description">
        <div className="intro">
          <p className="italicise">Enter the world of</p>
          <h1>Om Prakash Saran</h1>
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
