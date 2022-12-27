import axios from "axios";
import { useRef } from "react";
import { useState } from "react";
import { useNavigate, Link } from 'react-router-dom';
import "./Register.scss";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const emailRef = useRef();
  const passwordRef = useRef();
  const usernameRef = useRef();

  const handleSignIn = async (e) => {
    e.preventDefault();
    navigate("/login");
  };
  const handleStart = () => {
    setEmail(emailRef.current.value);
  };
  const handleFinish = async (e) => {
    e.preventDefault();
    setPassword(passwordRef.current.value);
    setUsername(usernameRef.current.value);
    try {
      await axios.post("auth/register", { email, username, password });
      navigate("/login");
    } catch (err) { }
  };
  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <Link to="/" className="home-items">
            HorizonFlix
          </Link>
          <button className="loginButton" onClick={handleSignIn}>Sign In</button>
        </div>
      </div>
      <div className="container">
        <h1>Unlimited movies, TV shows, and more.</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        {!email ? (
          <div className="input">
            <input type="email" placeholder="email address" ref={emailRef} required/>
            <button className="registerButton" onClick={handleStart}>
              Get Started
            </button>
          </div>
        ) : (
          <form className="input">
            <input type="username" placeholder="username" ref={usernameRef} required/>
            <input type="password" placeholder="password" ref={passwordRef} required/>
            <button className="registerButton" onClick={handleFinish}>
              Start
            </button>
          </form>
        )}
      </div>
    </div>
  );
}