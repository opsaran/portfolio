import About from "./about.js";
import Projects from "./projects.js";
import Reviews from "./reviews.js";
import Skillset from "./skillset.js";

const Description = () => {
    return (<>
        <section className="description">
            <div className="intro">
                <p className="italicise">Enter the world of</p>
                <h1>Om Prakash Saran</h1>
                <img src="OP.jpg" alt="just a photo" />
            
            </div>
        </section>
        
        <About />
        <Skillset />
        <Projects />
        <Reviews />
        </>
    )
}

export default Description;