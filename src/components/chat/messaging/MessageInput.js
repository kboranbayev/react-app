import React, { Component } from 'react';
import { Form, Input, Button } from "semantic-ui-react";

export default class MessageInput extends Component {
	
	constructor(props) {
	  super(props);
	
	  this.state = { message:"", isTyping:false};
	  this.handleSubmit = this.handleSubmit.bind(this)
	  this.sendMessage = this.sendMessage.bind(this) 
	}

	/*
	*	Handles submitting of form.
	*	@param e {Event} onsubmit event
	*/
	handleSubmit(e){
		e.preventDefault()
		this.sendMessage()
		this.setState({message:""})
	}
	
	/*
	*	Send message to add to chat.
	*/
	sendMessage(){

		this.props.sendMessage(this.state.message)
	}

	componentWillUnmount() {
		this.stopCheckingTyping();

	}

	/*
	*	Starts/Stops the interval for checking 
	*/
	sendTyping(){
		this.lastUpdateTime = Date.now()
		if(!this.state.isTyping){
			this.setState({isTyping:true})
			this.props.sendTyping(true);
			this.startCheckingTyping()
		}
	}

	/*
	*	Start an interval that check if the user is typing
	*/
	startCheckingTyping(){
		this.typingInterval = setInterval(()=>{
			
				if((Date.now() - this.lastUpdateTime) > 100){
					this.setState({isTyping:false})
					this.stopCheckingTyping()
				}
			}, 100)
	}

	/*
	*	Stops the interval from checking if the user is typing
	*/
	stopCheckingTyping(){
		if(this.typingInterval){
			clearInterval(this.typingInterval)
			this.props.sendTyping(false)
		}
	}

	onKeyUp = (e)=> { 
		e.keyCode !== 13 && this.sendTyping() 
	};

	onChange = ({target:{value:v}}) => {
		this.setState({message:v})
	};

	render() {
		const { message } = this.state
		return (
			<Form onSubmit={this.handleSubmit} className="message-form">
				<Input
					id="message"
					ref={"messageinput"}
					type="text" 
					className="form-control"
					value = { message } 
					autoComplete={'off'}
					placeholder="Type something to send"
					onKeyUp={this.onKeyUp}
					onChange = {this.onChange}
				/>
				<Button className='send' disabled={ message.length < 1} secondary content='Send' />
			</Form>
		);
	}
}
