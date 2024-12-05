import { useRef, useState, useEffect } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
import './login.css';

const Login = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState('');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  // Set focus on the first input when component loads
  useEffect(() => {
    userRef.current.focus();
  }, []);

  // Clear any error message if the user changes username or password
  useEffect(() => {
    setErrMsg('');
  }, [user, pwd]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulated authentication
    if (user === 'testuser' && pwd === 'password123') {
      setSuccess(true);
      setUser('');
      setPwd('');
    } else if (!user || !pwd) {
      setErrMsg('Missing Username or Password');
    } else {
      setErrMsg('Invalid Username or Password');
    }
    errRef.current.focus();
  };

  return (
    <div className="login-form">
      {success ? (
        <section>
          <h1>You are Logged in!</h1>
          <br />
          <p>
            <Link to="/Home">Go to Home</Link>
          </p>
        </section>
      ) : (
        <section>
          <p
            ref={errRef}
            className={errMsg ? 'errmsg' : 'offscreen'}
            aria-live="assertive"
          >
            {errMsg}
          </p>
          <h1>Login</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setUser(e.target.value)}
              value={user}
              required
            />
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
              required
            />
            <button type="submit">Login</button>
          </form>
        </section>
      )}
    </div>
  );
};

export default Login;