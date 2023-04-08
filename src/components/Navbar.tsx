import { Link } from "react-router-dom";
import "./Navbar.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faFilePen,
  faArrowRightToBracket,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  console.log("Navbar");

  return (
    <nav>
      <Link to={"/"}>
        <FontAwesomeIcon icon={faHome} />
        Home
      </Link>
      <Link to={"/createpost"}>
        <FontAwesomeIcon icon={faFilePen} />
        Post
      </Link>
      <Link to={"/login"}>
        <FontAwesomeIcon icon={faArrowRightToBracket} />
        Login
      </Link>
    </nav>
  );
};

export default Navbar;
