import "./SignUp.css";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <Link to="sign-up" className="header__button signUp">
      <h4>Sign up</h4>
    </Link>
  );
}

export default SignUp;
