import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SignupForm from '../forms/SignupForm';
import { signup } from '../../actions/users';
import { Container } from "semantic-ui-react";

class SignupPage extends React.Component {
  submit = (data) =>
    this.props.signup(data).then(() => this.props.history.push("/dashboard"));

  render() {
    return (
      <Container>
        <h1>Signup Page</h1>
        <SignupForm submit={this.submit} />
      </Container>
    );
  }
}

SignupPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  signup: PropTypes.func.isRequired
};

export default connect(null, { signup })(SignupPage);
