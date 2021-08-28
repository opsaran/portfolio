import { useRef } from "react";
const Navbar = () => {
  const toggleRef = useRef(null);

  const handleClick = () => {
    toggleRef.current.classList.toggle("toggle");
  };

  return (
    <nav>
      <div className="logo-name">OP's</div>
      <div className="hamburger" onClick={handleClick}>
        <span className="ham-line"></span>
        <span className="ham-line"></span>
        <span className="ham-line"></span>
      </div>
      <div className="nav-links" ref={toggleRef}>
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a
              href="https://hashnode.com/@opsaran"
              target="_blank"
              rel="noopener noreferrer"
            >
              Blog
            </a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
