/* eslint-disable */
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
const Login = () => {
  const [usernameReg, setUsernameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");
  const [loginStatus, setLoginStatus] = useState("");

  const login = () => {
    axios
      .post("http://localhost:8000/login", {
        username: usernameReg,
        password: passwordReg,
      })
      .then((response) => {
        if (response.data.message) {
          setLoginStatus(response.data.message);
        } else {
          setLoginStatus(response.data[0].username);
        }
        // console.log('response->', response)
      });
  };

  return (
    <div className="create">
      <h1>Sign in</h1>
      <label>Username</label>
      <input
        type="text"
        onChange={(e) => {
          setUsernameReg(e.target.value);
        }}
      ></input>
      <label>Password</label>
      <input
        type="password"
        onChange={(e) => {
          setPasswordReg(e.target.value);
        }}
      ></input>
      <button onClick={login}>Sign in</button>
      <p>Don't have you account?</p>
      <Link to="sign-up">Sign-up</Link>
      <h1>{loginStatus}</h1>
    </div>
  );
};
export default Login;
