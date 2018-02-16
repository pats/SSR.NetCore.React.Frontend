import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {HelloMessage} from './hello-message';


const renderApp = () => {
	ReactDOM.render(<HelloMessage message="2"/>, document.getElementById('react-app'));
}

renderApp();

// Allow Hot Module Replacement
if (module.hot) {
	module.hot.accept();
}
