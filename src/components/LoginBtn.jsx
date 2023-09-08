import React, {useState} from "react";
import { NavLink as RouterNavLink } from "react-router-dom";

import {
  Nav,
  NavItem,
  Button
} from "reactstrap";

import { useAuth0 } from "@auth0/auth0-react";

const LoginBtn = () => {
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();

  const [mobile, setMobile] = useState(false);

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
              className={`btn-main ${mobile ? "btn-main" : "btn-main"}`}
              // className="btn-main"
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
              // className="btn-secondary"
              className={`btn-secondary ${mobile ? "btn-secondary" : "btn-secondary"}`}
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
