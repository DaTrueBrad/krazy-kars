import React, { useState } from "react";
import axios from "axios";

const HomeScreen = ({ setUserInfo }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const register = () => {
    let body = { username, password };
    axios
      .post("/api/register", body)
      .then((res) => {
        console.log(res);
        setUserInfo(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  const login = () => {
    let body = { username, password };
    axios
      .post("/api/login", body)
      .then((res) => {
        console.log(res);
        setUserInfo(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div>
      <header>
        <h2 id="site-title">Krazy Kars</h2>
      </header>
      <main>
        <div id="login-container">
          <h2>Please log In / register</h2>
          <input
            type="text"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="button-container">
            <button onClick={login}>Log in</button>
            <button onClick={register}>Register</button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomeScreen;
