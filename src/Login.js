import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "./images/Amazon10.png";
import "./Login.css";
import { useDispatch } from "react-redux";
import { getUsername } from "./Store/ind";

function Login() {
  const dispatch = useDispatch();
  const loginDetails = [
    {
      id: "1",
      userName: "Kiyoonewton",
      email: "kiyoonewton41@gmail.com",
      password: "1234",
    },
  ];
  const history = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log(email, password);
  const signIn = (e) => {
    e.preventDefault();
    const log = loginDetails[0];
    // auth.signInWithEmailAndPassword(email, password).then((auth) => {
    if (email === log.email && password === log.password) {
      history("/");
      dispatch(getUsername(log.userName));
    }
    // history.push("/");
  };

  const register = (e) => {
    e.preventDefault();
    alert(
      "you can only use 'kiyoonewton41@gmail.com' as email and '1234' as password "
    );
    // auth
    //   .createUserWithEmailAndPassword(email, password)
    //   .then((auth) => {
    // console.log(auth);
    //   if (auth) {
    //     history("/");
    //   }
    // })
    // .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <Link to="/">
        <img className="login__logo" src={logo} />
      </Link>
      <div className="login__container">
        <h1>Sign-in</h1>
        <form action="">
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </form>
        <button type="submit" onClick={signIn} className="login__signInButton">
          Sign-in
        </button>
        <p>
          By signing-in you agree to Amazon-clone Conditions of Use & Sale.
          Please see our Privacy Notice, our Cookies Notice and our
          Intrest-Based Ads Notice. You can only sign in with Username: 'kiyoonewton41@gmail.com' and password:1234
        </p>
        <button onClick={register} className="login__registration">
          Create your Amazon-clone account
        </button>
      </div>
    </div>
  );
}

export default Login;
