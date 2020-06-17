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
    <div class="ui inverted segment">
      <div class="ui inverted secondary pointing menu">
        <a class="active item">  
          <NavLink to="/">
            Home
          </NavLink>
        </a>
        <a class="item">  
          <NavLink to="/opportunities/new">
            Control Panel
          </NavLink>
        </a>
        <a class="item">
          <NavLink to="/opportunities">
            Opportunities
          </NavLink>
        </a>
          {currentUser ? (
            <>
              <NavLink exact to="/opportunities/new">
                Create an Opportunity
              </NavLink>
              <NavLink to="/opportunities" onClick={onSignOut}>
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