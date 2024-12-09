import React from 'react';
import { Auth0Provider } from '@auth0/auth0-react';
import Login from './login/login';

function App() {
  return (
    <Auth0Provider
  domain={process.env.REACT_APP_AUTH0_DOMAIN}
  clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
  authorizationParams={{
    redirect_uri: window.location.origin, 
  }}
>
      <div className="App">
        <Login />
      </div>
    </Auth0Provider>
  );
}

export default App;
