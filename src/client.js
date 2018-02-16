import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {HelloMessage} from './hello-message';


const renderApp = () => {
	ReactDOM.render(<HelloMessage message="Hello message from client"/>, document.getElementById('react-client-app'));
}

renderApp();

// Allow Hot Module Replacement
if (module.hot) {
	module.hot.accept();
}
