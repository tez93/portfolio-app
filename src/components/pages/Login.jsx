import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const USERS = [
  { username: "tejas", password: "9809" },
];

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const match = USERS.find(
      (user) => user.username === username && user.password === password
    );

    if (match) {
      setMessage("Login successful");
      setIsSuccess(true);
      navigate('/tejas-portfolio');
    } else {
      setMessage("Invalid username and password");
      setIsSuccess(false);
    }
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    let enteredUser = prompt("Please enter your username to recover password:");
    let foundUser = USERS.find((user) => user.username === enteredUser);

    if (foundUser) {
      alert("Your password is: " + foundUser.password);
    } else if (enteredUser !== null) {
      alert("Username not found!");
    }
  };

  return (
    <div id="login-container" style={{ padding: "4rem 2rem", textAlign: "center" }}>
      <h2>Login</h2>
      <form onSubmit={handleLogin} style={{ maxWidth: "400px", margin: "0 auto" }}>
        <p>
          <input
            type="text"
            placeholder="Enter Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </p>
        <p>
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </p>
        <button type="submit" id="login-btn">Login</button>
      </form>
      <p style={{ marginTop: "1rem" }}>
        <a href="#" onClick={handleForgotPassword}>Forgot Password?</a>
      </p>
      {message && (
        <p style={{ color: isSuccess ? 'green' : 'red', fontWeight: 'bold' }}>
          {message}
        </p>
      )}
    </div>
  );
}