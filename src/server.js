import React from 'react';
import {createServerRenderer} from 'aspnet-prerendering';
import {HelloMessage} from './hello-message';
import {renderToString} from 'react-dom/server'

export default createServerRenderer((params) => {
	return new Promise(function (resolve, reject) {
		const result = renderToString(<HelloMessage message="aaa21" />);
		resolve({html: result});
	});
});

