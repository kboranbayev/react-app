import React from 'react';
import PropTypes from 'prop-types';
import { Container, Label, Header } from "semantic-ui-react";
import { connect } from 'react-redux';

class AccountInfoPage extends React.Component {
  componentDidMount() {
  }

  render() {
    return ( 
      <Container>
        <Label>
          <Header>Account Info</Header>
        </Label>
        <p>Email: {this.props.user.email}</p>
      </Container>
    );
  }
}

AccountInfoPage.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string.isRequired
  }).isRequired
};

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

export default connect(mapStateToProps)(AccountInfoPage);
