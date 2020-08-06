import React from "react";
import { useHistory } from "react-router-dom";
import { Auth0Provider, useAuth0 } from "@auth0/auth0-react";


const Auth0ProviderWithHistory = ({ children }) => {
  const {isAuthenticated} = useAuth0();
  const history = useHistory();
  const onRedirectCallback = (appState) => {
    
    history.push(appState?.returnTo || window.location.pathname);
  };

  return (
    <Auth0Provider
        domain="dev-xrm8fzw8.us.auth0.com"
        clientId="brpwS1pNnHGyXeBM8VRiyk81KJYUoYMD"
        redirectUri={window.location.origin}
        onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithHistory;