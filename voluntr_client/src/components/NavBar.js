import React from "react";
import { NavLink /* Link */ } from "react-router-dom";

function NavBar(props) {
  const { currentUser, onSignOut } = props;

  const handleSignOutClick = event => {
    event.preventDefault();

    if (typeof onSignOut === "function") {
      onSignOut();
    }
  };
  return (
    <div className="ui pointing menu">
      <NavLink to="/" className="item">
        <img
          src="data:image/png;base64,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"
          height="50px"
        />
      </NavLink>

      <div className="right menu">
        <NavLink to="/" className="item">
          Home
        </NavLink>
        <NavLink to="/opportunities/new" className="item">
          Control Panel
        </NavLink>

        <NavLink to="/opportunities" className="item">
          Opportunities
        </NavLink>
        {currentUser ? (
          <>
            <NavLink exact to="/opportunities/new" className="item">
              Create an Opportunity
            </NavLink>
            <NavLink to="/opportunities" onClick={onSignOut} className="item">
              Sign Out
            </NavLink>
            <span className="item" style={{ color: "green" }}>
              Welcome {currentUser.full_name}
            </span>
          </>
        ) : (
          <React.Fragment>
            <NavLink exact to="/sign_in" className="item">
              Sign In
            </NavLink>
            <NavLink exact to="/sign_up" className="item">
              Sign Up
            </NavLink>
          </React.Fragment>
        )}
        
      </div>
    </div>
  );
}

export default NavBar;