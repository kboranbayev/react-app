import React, { Component } from 'react';
import { Comment } from "semantic-ui-react";
import '../style.css';

export default class Messages extends Component {
	
	constructor(props) {
	  super(props);
	  this.scrollDown = this.scrollDown.bind(this)
	}
	
	
	/*
	*	Scrolls down the view of the messages.
	*/
	scrollDown(){
	}
	
	componentDidUpdate(newProps){
		this.scrollDown();
	}

	componentDidMount(){
		this.scrollDown();
	}

	render() {
		const { messages, user, typingUsers } = this.props;
		return (
			<Comment className='thread-container'>
				<div className='thread'>
				{
					messages.map((mes, i) => {
						return( 
							<Comment key={mes.id} className={`message-container ${mes.sender === user.email && 'right'}`}>
								<Comment.Metadata className='time'>{mes.time}</Comment.Metadata>
								<Comment.Content className='data'>
									<Comment.Text className='message' content={mes.message} />
									<Comment.Author className='name' content={mes.sender} />
								</Comment.Content>
							</Comment>
						)
					})
				}
				{
					typingUsers.map((name)=>{
						return(
							<div key={name} className="typing-user">
							{`${name} is typing . . .`}
							</div>
							)
					})
				}
				</div>
			</Comment>
		);
	}
}

