import { Link } from "react-router-dom";
import "./Navbar.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faFilePen,
  faArrowRightToBracket,
} from "@fortawesome/free-solid-svg-icons";

type Props = {
  isAuth: boolean;
};

const Navbar = ({ isAuth }: Props) => {
  return (
    <nav>
      <Link to={"/"}>
        <FontAwesomeIcon icon={faHome} />
        Home
      </Link>

      {!isAuth ? (
        <Link to={"/login"}>
          <FontAwesomeIcon icon={faArrowRightToBracket} />
          Login
        </Link>
      ) : (
        <>
          <Link to={"/createpost"}>
            <FontAwesomeIcon icon={faFilePen} />
            Post
          </Link>
          <Link to={"/logout"}>
            <FontAwesomeIcon icon={faArrowRightToBracket} />
            Logout
          </Link>
        </>
      )}
    </nav>
  );
};

export default Navbar;
