import ContactForm from "./contactForm.js";

const contact = () => {
  return (
    <>
      <div className="contact" id="contact">
        <div className="contact-socials">
          <h2>Connect with me</h2>
          <ul>
            <li>
              <a
                href="https://github.com/opsaran"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i>
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/in/om-prakash1/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="mailto: prakashom.iitkgp@gmail.com">
                <i className="fas fa-envelope"></i>
              </a>
            </li>
          </ul>
        </div>
        <ContactForm />
      </div>
    </>
  );
};

export default contact;
