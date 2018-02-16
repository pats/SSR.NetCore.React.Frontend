import React from 'react';

export class HelloMessage extends React.Component
{
	render() {
		return <h1>2 {this.props.message}!</h1>;
	}
}
