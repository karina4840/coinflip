import React, {useState} from "react";
import {
  Nav,
  NavItem,
  Button
} from "reactstrap";
import { useAuth0 } from "@auth0/auth0-react";

const LoginBtn = () => {
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();

  const logoutWithRedirect = () =>
    logout({
      logoutParams: {
        returnTo: window.location.origin,
      },
    });

  return (
    <div className="nav-container">
      <Nav>
        {!isAuthenticated &&(
          <NavItem>
            <Button
              id="qsLoginBtn"
              className="btn-main"
              onClick={() => loginWithRedirect()}
            >
              Log in
            </Button>
          </NavItem>
        )}
      </Nav>

      {isAuthenticated && (
        <Nav>
          <NavItem>
            <Button
              to="#"
              id="qsLogoutBtn"
              onClick={() => logoutWithRedirect()}
              className="btn-secondary"
            >
              Log out
            </Button>
          </NavItem>
          <NavItem>
            <span className="user-info">
              <img
                src={user.picture}
                alt="Profile"
                className="nav-user-profile d-inline-block rounded-circle mr-3"
                width="40"
              />
            </span>
          </NavItem>
        </Nav>
      )}
    </div>
  );
};

export default LoginBtn;
