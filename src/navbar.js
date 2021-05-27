import { Link } from "react-router-dom";
import {useRef} from "react";
const Navbar = () => {

const toggleRef = useRef(null);

const handleClick = () => {
    toggleRef.current.classList.toggle('toggle');
};

  return (
    <nav>
      <div className="logo-name">OP's</div>
      <div className="hamburger" onClick={handleClick} >
         <span className="ham-line"></span>
         <span className="ham-line"></span>
         <span className="ham-line"></span>
          
      </div>
      <div className="all-links" ref={toggleRef}>
        <ul>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="https://github.com/opsaran">Github</a>
          </li>
          <li>
            <a href="www.twitter.com">Twitter</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
