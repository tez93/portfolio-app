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
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      
      {/* Header / Navbar on Login Page */}
      <header style={{ justifyContent: "center", textAlign: "center" }}>
        <h1 style={{ fontSize: "1.5rem" }}>Portfolio Login Page</h1>
      </header>

      {/* Main Login Content */}
      <main 
        id="login-container" 
        style={{ 
          flex: 1, 
          display: "flex", 
          flexDirection: "column", 
          alignItems: "center", 
          justifyContent: "center", 
          padding: "2rem" 
        }}
      >
        <form onSubmit={handleLogin} style={{ width: "100%", maxWidth: "380px" }}>
          <div style={{ marginBottom: "1rem" }}>
            <h4 style={{ marginBottom: "0.4rem", textAlign: "left" }}>Username</h4>
            <input
              type="text"
              placeholder="Please Enter The Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div style={{ marginBottom: "1rem" }}>
            <h4 style={{ marginBottom: "0.4rem", textAlign: "left" }}>Password</h4>
            <input
              type="password"
              placeholder="Please Enter The Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" id="login-btn">Login</button>
        </form>

        <p style={{ marginTop: "1rem" }}>
          <a href="#" onClick={handleForgotPassword}>Forgot Password?</a>
        </p>

        {message && (
          <p style={{ color: isSuccess ? 'green' : 'red', fontWeight: 'bold', marginTop: "0.8rem" }}>
            {message}
          </p>
        )}
      </main>

      {/* Footer Pinned to Bottom */}
      <footer>
        <p>&copy; 2026 Tejas G Rao. All rights reserved.</p>
      </footer>
    </div>
  );
}