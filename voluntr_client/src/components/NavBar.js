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
            src="https://i.pinimg.com/originals/ae/43/8b/ae438bc37a029cc195588a7fd8002808.jpg"
            height="50px"
            />
          </NavLink>

          <div className="right menu">
        <NavLink to="/" className="item">
          Home
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