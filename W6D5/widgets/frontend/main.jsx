import React from 'react';
import ReactDOM from 'react-dom';
import Widget from './widget.jsx';

document.addEventListener("DOMContentLoaded", () => {
	const root = document.getElementById("root");
	ReactDOM.render(<Widget/>, root);
});
