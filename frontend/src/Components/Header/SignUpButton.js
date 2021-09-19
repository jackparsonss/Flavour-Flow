import "./SignUpButton.css";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <Link to="signup" className="header__button signUpButton">
      <h4>Sign up</h4>
    </Link>
  );
}

export default SignUp;
