import React from "react";
import { NavLink /* Link */ } from "react-router-dom";
import { Menu, Segment } from "semantic-ui-react";

function NavBar(props) {
  const { currentUser, onSignOut } = props;

  const handleSignOutClick = event => {
    event.preventDefault();

    if (typeof onSignOut === "function") {
      onSignOut();
    }
  };
  return (
    // <div className="ui inverted vertical center aligned segment">
      <div className="ui large inverted pointing secondary menu">
        <div className="ui container">
            <NavLink to="/" className="active item">
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
              <span className="item" style={{ color: "teal" }}>
                Welcome {currentUser.full_name}
              </span>
            </>
          ) : (
          <div className="right item">
            <React.Fragment>
              <NavLink exact to="/sign_in" className="ui inverted button" role="button">
                Sign In
              </NavLink>
              <NavLink exact to="/sign_up" className="ui inverted button" role="button">
                Sign Up
              </NavLink>
            </React.Fragment>
          </div>  
          )}
        </div>
      </div>
    </div>
    // </div>
  );
}

export default NavBar;