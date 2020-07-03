import React, { useState, useEffect } from 'react';
import { OpportunitiesIndexPage } from "./OpportunitiesIndexPage";
import OpportunityShowPage from "./OpportunityShowPage";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import NavBar from "./NavBar";
import { User, Session } from "../requests";
import SignInPage from "./SignInPage";
import { SignUpPage } from "./SignUpPage";
import NotFoundPage from "./NotFoundPage";
import ControlPanel from "./ControlPanel";
import AuthRoute from "./AuthRoute";
import { OpportunityEditPage } from "./OpportunityEditPage";
import { Welcome } from "./Welcome";
import PropTypes from 'prop-types'
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react'

const getWidth = () => {
  const isSSR = typeof window === 'undefined'

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}




class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
      loading: true
    };
  }

  signOut = () => {
    Session.destroy().then(() => {
      this.setState({ currentUser: null });
    });
  };

  getUser = () => {
    User.current()
      .then(data => {
        if (typeof data.id !== "number") {
          this.setState({ loading: false });
        } else {
          this.setState({ loading: false, currentUser: data });
        }
      })
      .catch(() => {
        this.setState({ loading: false });
      });
  };

  componentDidMount() {
    this.getUser();
  }
  
  render() {
    const { loading, currentUser } = this.state;
    if (loading) {
      return <div />;
    }
    return (
      
      <BrowserRouter>
        <div className="ui container App">
          <NavBar currentUser={currentUser} onSignOut={this.signOut} />
      
          <Switch>
            <Route path="/" exact component={Welcome} />

            <Route path="/opportunities" exact component={OpportunitiesIndexPage} />
            
            <AuthRoute
              isAuthenticated={currentUser}
              path="/opportunities/new"
              component={ControlPanel}
            />
            
            <AuthRoute
            path="/opportunities/:id/edit"
            isAuthenticated={!!currentUser}
            component={OpportunityEditPage}
            />
            
            <Route
              exact
              path="/sign_up"
              render={routeProps => (
                <SignUpPage {...routeProps} onSignUp={this.getUser} />
              )}
            />

            <Route
              path="/opportunities/:id"
              render={routeProps => (
                <OpportunityShowPage {...routeProps} currentUser={currentUser} />
              )}
            />

            <Route
              path="/sign_in"
              render={routeProps => (
                <SignInPage {...routeProps} onSignIn={this.getUser} />
              )}
            />

            <Route component={NotFoundPage} />

          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;