const Skillset = () => {
    return(
        <>
        <section className="skillset">
            <div className="checkForSkills">
            <img src="checkbox.png" alt="checkbox" />
            <h1>Skills</h1>
            </div>
            <ol>
                <li><i className="fab fa-html5"></i></li>
                <li><i className="fab fa-css3-alt"></i></li>
                <li><i className="fab fa-js-square"></i></li>
                <li><i className="fab fa-react"></i></li>
                <li><span className="other-skills">Sales</span></li>
                <li><span className="other-skills">fitness-training</span></li>
                <li><span className="other-skills">Stonemasonry</span></li>
                
            </ol>
        </section>
        </>
    )
}
export default Skillset;