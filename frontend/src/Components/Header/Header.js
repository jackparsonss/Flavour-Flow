import "./Header.css";
import { Link } from "react-router-dom";
import SignUpButton from "./SignUpButton";
import { FaRegUserCircle } from "react-icons/fa";

function Header({ loggedIn, authCallback }) {
  return (
    <div className="header">
      <Link to="/" className="header__logo">
        <h1>Flavour Flow</h1>
      </Link>
      {!loggedIn ? (
        <div className="header__account">
          <Link to="/signin" className="header__button">
            <h4>Sign in</h4>
          </Link>
          <SignUpButton />
        </div>
      ) : (
        <div className="header__user" onClick={() => authCallback(false)}>
          <FaRegUserCircle size={42} />
        </div>
      )}
    </div>
  );
}

export default Header;
