import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import history from "./utils/history";

const root = ReactDOM.createRoot(document.getElementById("root"));

const onRedirectCallback = (appState) => {
  history.push(
    appState && appState.returnTo ? appState.returnTo : window.location.pathname
  );
};

const providerConfig = {
  domain: process.env.REACT_APP_AUTH0_DOMAIN,
  clientId: process.env.REACT_APP_AUTH0_CLIENT_ID,
  onRedirectCallback,
  authorizationParams: {
    redirect_uri: window.location.origin,
    ...(process.env.REACT_APP_AUTH0_AUDIENCE ? { audience: process.env.REACT_APP_AUTH0_AUDIENCE } : null),
  },
};

root.render(
    <BrowserRouter>
      <Auth0Provider
        {...providerConfig}
      >
        <App />
      </Auth0Provider>
    </BrowserRouter>
);
