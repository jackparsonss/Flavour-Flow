import "./Authentication.css";
import { FaPizzaSlice } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Authentication({ login }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    axios.post("URL_TO_LOGIN", { email, password });
  };

  const handleSignUp = () => {
    axios.post("URL_TO_SIGNUP", { email, password });
  };

  return (
    <form className="authentication">
      <div className="authenticationBox">
        <div className="authenticationLeft">
          <h1 className="authenticationTitle">Flavour Flow</h1>
          <FaPizzaSlice className="pizza" size={120} />
        </div>
        <div className="vl" />
        <div className="authenticationRight">
          <div className="authenticationHeader">
            <Link to="signin" className="authenticationHeader__item">
              <h3
                className={`option authenticationHeader__item ${
                  login ? "selected" : "greyed"
                }`}
              >
                Sign in
              </h3>
            </Link>
            <h3 className="authenticationHeader__item greyed">or</h3>
            <Link to="signup" className="authenticationHeader__item">
              <h3
                className={`authenticationHeader__item ${
                  login ? "greyed" : "selected"
                } option`}
              >
                Sign up
              </h3>
            </Link>
          </div>
          <div authenticationForm>
            <div className="authenticationItem">
              <label className="authenticationLabel">Email</label>
              <input
                className="authenticationInput"
                type="email"
                placeholder="enter your email..."
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="authenticationItem">
              <label className="authenticationLabel">Password</label>
              <input
                className="authenticationInput"
                type="password"
                placeholder="enter your password..."
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <button
            type="submit"
            onClick={login ? handleLogin : handleSignUp}
            className="authenticationButton"
          >
            <Link className="authenticationButton__link" to="/">
              {login ? "Login" : "Sign up"}
            </Link>
          </button>
        </div>
      </div>
    </form>
  );
}

export default Authentication;
