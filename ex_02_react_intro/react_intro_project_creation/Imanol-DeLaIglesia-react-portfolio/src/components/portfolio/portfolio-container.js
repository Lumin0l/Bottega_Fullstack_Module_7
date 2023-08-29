import React, { Component } from "react";

import portfolioItem from "../portfolio-item";
import PortfolioItem from "../portfolio-item";

export default class PortfolioContainer extends Component {
	portfolioItems() {
    const data = ["Quip", "Eventbrite", "Ministry Safe"];

    return data.map(item => {
      return <PortfolioItem title={item}/>
      /* <h3>{item}</h3>; */
    });
  }
	
	render() {
		return (
			<div>
				<h2>Portfolio content goes here...</h2>

				{this.portfolioItems()}
			</div>
		);
	}
}