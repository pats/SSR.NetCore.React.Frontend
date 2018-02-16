import React from 'react';

export class HelloMessage extends React.Component
{
	render() {
		return <p>Message: {this.props.message}!</p>;
	}
}
