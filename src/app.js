import React from 'react';
import ReactDOM from 'react-dom';

import AppRouter from './routers/AppRouter';

const appDomEl = document.getElementById('app');

const app = (
	<div>
		<AppRouter />
	</div>
);

ReactDOM.render(app, appDomEl);