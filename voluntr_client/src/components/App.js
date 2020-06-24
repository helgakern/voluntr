import React from 'react';
import { OpportunitiesIndexPage } from "./OpportunitiesIndexPage";
import OpportunityShowPage from "./OpportunityShowPage";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import { User, Session } from "../requests";
import SignInPage from "./SignInPage";
import { SignUpPage } from "./SignUpPage";
import NotFoundPage from "./NotFoundPage";
import ControlPanel from "./ControlPanel";
import AuthRoute from "./AuthRoute";
import { Welcome } from "./Welcome";


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
                <OpportunityDetailsPage {...routeProps} currentUser={currentUser} />
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