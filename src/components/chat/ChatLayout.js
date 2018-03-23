import React from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ChatContainer from './content/ChatContainer'
import { USER_CONNECTED } from './Constants'

import '../../styles/index.css';

var serverURI = process.env.SERVER || 'http://localhost:3231';
var io = require('socket.io-client')

class ChatLayout extends React.Component {
	constructor(props) {
		super(props);
	
	  this.state = {
	  		socket:null, 
	  		user:props.user
		};
	  this.setUser = this.setUser.bind(this)
	  this.reconnectUserInfo = this.reconnectUserInfo.bind(this)
	}

	componentWillMount() {
		var socket = io(serverURI)
		this.setState({ socket })
		this.initSocket(socket)
	}
	
	/*
	*	Initializes socket event callbacks
	*/
	initSocket(socket){
		socket.on('connect', (value)=>{
			console.log("Connected");
		})
		socket.on('disconnect', this.reconnectUserInfo)
	}

	/*
	*	Connectes user info back to the server.
	*	If the user name is already logged in.
	*/
	reconnectUserInfo(){
		const { socket, user } = this.state

		if(this.state.user != null){
			
			socket.emit(USER_CONNECTED, user)
		}

	}

	/*
	*	Sets the current user logged in
	*	@param user an object {id:number, name:string}
	*/
	setUser(user){
		const { socket } = this.state
		this.setState({user});
		socket.emit(USER_CONNECTED, user)
	}
	
	render() {
		const { socket, user } = this.state 
	
		return (
			<ChatContainer socket={socket} user={user} /> 
		);
	}
}

ChatLayout.propTypes = {
	socket: PropTypes.object,
	user: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
		user: state.user
  };
}

export default connect(mapStateToProps)(ChatLayout);