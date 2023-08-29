/* First the imports */
import React, { Component } from "react";

import portfolioItem from "../portfolio-item";
import PortfolioItem from "../portfolio-item";

/* Now the name of the component class with the "extends" value */
export default class PortfolioContainer extends Component {
	/* Now we include the render method, so the content can be deployed by the browser */
	render() {
		/* The content goes in the return value */
		return (
			<div>
				<h2>Portfolio content goes here...</h2>

				<PortfolioItem />
			</div>
		);
	}
}