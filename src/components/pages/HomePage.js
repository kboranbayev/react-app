import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../actions/auth';
import { Container, Header, Segment} from 'semantic-ui-react';

class HomePage extends React.Component {
  componentDidMount() {
  }

  render() {
    return (
      <Container>
        <Segment>
          <Header>
            <h1>Home Page</h1>
          </Header>
          <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently
          with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
          <div>
          {this.props.isAuthenticated ? (
            <button onClick={() => this.props.logout()}>Logout</button>
          ) : (
            <div>
            <Link to="/login">Login</Link> or <Link to="/signup">Signup</Link>
            </div>
          )}
          </div>
        </Segment>
      </Container>
    );
  }
}

HomePage.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.user.token
  };
}

export default connect(mapStateToProps, { logout: actions.logout })(HomePage);
