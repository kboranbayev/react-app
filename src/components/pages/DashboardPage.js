import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Container, Header, Label } from "semantic-ui-react";
import ConfirmEmailMessage from "../messages/ConfirmEmailMessage";
import ChatLayout from '../chat/ChatLayout';

class DashboardPage extends React.Component {
  
 // submit = data =>
  //  this.props.sendMessage(data).then((newData) => console.log("submitDashboard", newData));

  render() {
    const { isConfirmed } = this.props;


    return (
      <Container>
        <Label>
          <Header>This is Dashboard! </Header>
        </Label>
        {!isConfirmed && <ConfirmEmailMessage />}
        <ChatLayout />
        
      </Container>
    );
  }
}

DashboardPage.propTypes = {
  isConfirmed: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
    isConfirmed: !!state.user.confirmed,
    state: this.state
  };
}

export default connect(mapStateToProps)(DashboardPage);
