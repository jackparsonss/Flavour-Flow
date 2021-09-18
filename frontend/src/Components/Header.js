import "./Header.css";
import { Link } from "react-router-dom";
import SignUp from "./SignUp";

function Header() {
  return (
    <div className="header">
      <Link to="/" className="header__logo">
        <h1>Flavour Flow</h1>
      </Link>
      <div className="header__account">
        <Link to="/sign-in" className="header__button">
          <h4>Sign in</h4>
        </Link>
        <SignUp />
      </div>
    </div>
  );
}

export default Header;
