import React, { Component } from "react";
import { NavLink /* Link */ } from "react-router-dom";


function NavBar(props) {
  
  const {
    currentUser,
    onSignOut
  } = props;

  const handleSignOutClick = event => {
    event.preventDefault();

    if (typeof onSignOut === "function") {
      onSignOut();
    }
  };
  return (
  <div className="top-menu">  
    <div className = "ui inverted vertical center aligned segment" >
      <div className = "ui large inverted pointing secondary menu" >
        <div className = "ui container" >
          {/* <NavLink to = "/" className = "active item" >
          <img src="../src/images/wireframe/logo.jpeg" height = "50px"  />
          </NavLink> */}

    {
      /* <div className="right menu"> */ } 
          <NavLink to = "/" className = "item" > Home </NavLink> 
          <NavLink to = "/opportunities" className = "item" > Opportunities </NavLink> {
            currentUser ? ( < >
          <NavLink exact to = "/opportunities/new" className = "item" > Create an Opportunity </NavLink> 
          <NavLink to = "/opportunities" onClick = {onSignOut} className = "item" > Sign Out </NavLink> 
          <span className = "item" style = {{ color: "teal"}}> Welcome { currentUser.full_name } 
          </span> 
          < />
      ) : ( 
        <div className = "right item" >
          <React.Fragment >
            <NavLink exact to = "/sign_in" className = "ui inverted button" role = "button" > Sign In </NavLink> 
            <NavLink exact to = "/sign_up" className = "ui inverted button" role = "button" style = {{ marginLeft: "0.5em" }} > Sign Up </NavLink> 
          </React.Fragment> <
        /div>  
      )} 
    </div> 
  </div> 
  </div>
</div>
);
}

export default NavBar;
