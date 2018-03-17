import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Container, Header, Label } from "semantic-ui-react";
import ConfirmEmailMessage from "../messages/ConfirmEmailMessage";
//import ChatRoom from "../chat/ChatRoomPage";

class DashboardPage extends React.Component {
  componentDidMount() {
  }

  render() {
    const { isConfirmed } = this.props;
    return (
      <Container>
        
        <Label>
          <Header>This is Dashboard </Header>
        </Label>
        {!isConfirmed && <ConfirmEmailMessage />}
      
      </Container>
    );
  }
}

DashboardPage.propTypes = {
  isConfirmed: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
    isConfirmed: !!state.user.confirmed
  };
}

export default connect(mapStateToProps)(DashboardPage);
