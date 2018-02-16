import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { HelloMessage } from './hello-message';

export default () => {
	return ReactDOM.render(<HelloMessage message="World" />, document.getElementById('my-spa'));
};