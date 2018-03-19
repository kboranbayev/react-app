import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import LoginPage from "./components/pages/LoginPage";
import DashboardPage from "./components/pages/DashboardPage";
import SignupPage from "./components/pages/SignupPage";
import ConfirmationPage from "./components/pages/ConfirmationPage";
import ForgotPasswordPage from "./components/pages/ForgotPasswordPage";
import ResetPasswordPage from "./components/pages/ResetPasswordPage";
import AccountInfoPage from "./components/pages/AccountInfoPage";
import UserRoute from "./components/routes/UserRoute";
import GuestRoute from "./components/routes/GuestRoute";
import TopNavigation from "./components/navigation/TopNavigation";
//import ChatRoom from "./components/chat/ChatRoomPage";

const App = ({ location, isAuthenticated }) => (
  <div>
    <Route 
      location={location}
      path="/"
      component={TopNavigation}
      isAuthenticated
    />
    <Route 
      location={location} 
      path="/" 
      exact 
      component={HomePage} 
      title="HomePage" 
    />
    <Route
      location={location}
      path="/confirmation/:token"
      exact
      component={ConfirmationPage}
    />
    <GuestRoute 
      location={location} 
      path="/login" 
      exact 
      component={LoginPage} 
    />
    <GuestRoute
      location={location}
      path="/signup"
      exact
      component={SignupPage}
    />
    <GuestRoute
      location={location}
      path="/forgot_password"
      exact
      component={ForgotPasswordPage}
    />
    <GuestRoute
      location={location}
      path="/reset_password/:token"
      exact
      component={ResetPasswordPage}
    />
    <UserRoute
      location={location}
      path="/account_info"
      exact
      component={AccountInfoPage}
    />
    <UserRoute
      location={location}
      path="/dashboard"
      exact
      component={DashboardPage}
    />
  </div>
);

//const App = ({ location, isAuthenticated }) => (
  /*
class App extends React.Component {
  //const { location, isAuthenticated } = this.props;

  componentDidMount() {

  }

  callApi = async () => {
    const response = await fetch('/api/home');
    const body = await response.json();

    

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render() {
    console.log(this.props);
    const { location } = this.props.location;
    const isAuthenticated = false;

    return (
      <div>
        <Route 
          location={location}
          path="/"
          component={TopNavigation}
        />
        <Route 
          location={location} 
          path="/" 
          exact 
          component={HomePage} 
          title="HomePage" 
        />
        <Route
          location={location}
          path="/confirmation/:token"
          exact
          component={ConfirmationPage}
        />
        <GuestRoute 
          location={location} 
          path="/login" 
          exact 
          component={LoginPage} 
        />
        <GuestRoute
          location={location}
          path="/signup"
          exact
          component={SignupPage}
        />
        <GuestRoute
          location={location}
          path="/forgot_password"
          exact
          component={ForgotPasswordPage}
        />
        <GuestRoute
          location={location}
          path="/reset_password/:token"
          exact
          component={ResetPasswordPage}
        />
        <UserRoute
          location={location}
          path="/account_info"
          exact
          component={AccountInfoPage}
        />
        <UserRoute
          location={location}
          path="/dashboard"
          exact
          component={DashboardPage}
        />
      </div>
    );
  }
}
*/
App.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired
};

function mapStateToProps(state) {
  return {
    
  };
}

export default connect(mapStateToProps)(App);
