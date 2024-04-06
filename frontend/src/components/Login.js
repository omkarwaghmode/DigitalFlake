import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();

  const handlesubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/login", { email, password })
      .then((result) => {
        console.log(result);
        if (result.data === "success") {
          nav("/Home");
        }
      })
      .catch((err) => console.log(error));
  };

  return (
    <div>
      <h2>Digital Flake Welcome</h2>
      <form onSubmit={handlesubmit}>
        <h5>Email</h5>
        <input
          type="email"
          onChange={(e) => {
            console.log(e.target.value);
          }}
          placeholder="Email"
          name=""
          id=""
        />

        <h5>Password</h5>
        <input
          type="password"
          onChange={(e) => {
            console.log(e.target.value);
          }}
          placeholder="Password"
          name="id"
          id=""
        />
        <br />
        <br />

        <button type="submit" className="btn btn-success  btn-sm">
          Login
        </button>
      </form>
      <br />
      <br />
      <a>Reset Password</a>
      <br />
      <br />
      <br />

      <Link to="/Signup" type="submit" className="btn btn-secondary btn-sm">
        Signup
      </Link>
    </div>
  );
}

export default Login;
