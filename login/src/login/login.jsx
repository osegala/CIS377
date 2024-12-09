import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';
import './login.css';

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button onClick={() => loginWithRedirect()}>Log In with Auth0</button>;
};

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Log Out
    </button>
  );
};

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <div>
        <h1>Welcome, {user.name}!</h1>
        <p>Email: {user.email}</p>
        <Link to="/Home">Go to Home</Link>
        <LogoutButton />
      </div>
    )
  );
};

const Login = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="login-form">
      {isAuthenticated ? (
        <Profile />
      ) : (
        <div>
          <h1>Login</h1>
          <LoginButton />
        </div>
      )}
    </div>
  );
};

export default Login;
