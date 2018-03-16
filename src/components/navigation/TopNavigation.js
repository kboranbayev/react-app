import React from "react";
import PropTypes from "prop-types";
import { Menu, Label } from "semantic-ui-react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as actions from "../../actions/auth";

class TopNavigation extends React.Component {
  
  state = {
    
    activeItem: 'home'
  }
  
  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  
  render() {
    const { activeItem } = this.state;
    const { user, logout } = this.props;

    return(
      <Menu secondary pointing>
        <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} as={Link} to="/">
          Home
        </Menu.Item>
        <Menu.Item name='dashboard' active={activeItem === 'dashboard'} onClick={this.handleItemClick} as={Link} to="/dashboard">
          Dashboard
        </Menu.Item>
        <Menu.Menu>
        </Menu.Menu>
        {!!user.email
            ? 
              (<Menu.Menu position="right">
                <Menu.Item>
                  <Label size={'tiny'} circular>{user.email}</Label>
                </Menu.Item>
                <Menu.Item name='account' active={activeItem === 'account'} onClick={this.handleItemClick} as={Link} to="/account_info">
                  <i className="address card icon medium"></i>
                </Menu.Item>
                <Menu.Item name='logout' active={activeItem === 'logout'} onClick={() => logout()}>Logout</Menu.Item>
              </Menu.Menu>)  
            :
              (<Menu.Menu position="right">
                <Menu.Item name='login' active={activeItem === 'login'} onClick={this.handleItemClick} as={Link} to="/login">Login</Menu.Item>
                <Menu.Item name='signup' active={activeItem === 'signup'} onClick={this.handleItemClick} as={Link} to="/signup">Signup</Menu.Item>  
              </Menu.Menu>)
          }
      </Menu>
    );
  }
}

TopNavigation.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string
  }),
  logout: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

export default connect(mapStateToProps, { logout: actions.logout })(
  TopNavigation
);
