import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

const Counter = (props) => {
	return (
		<div className="container">
			<i className="bi bi-clock"></i>
			<div className="numbers">{props.one}</div>
		</div>
	);
};

let seconds = 0;

setInterval(() => {
	ReactDOM.render(
		<Counter one={(seconds / 100000).toFixed(5).toString().slice(2)} />,
		document.querySelector("#app")
	);
	seconds++;
}, 1000);
