import React, { Component } from "react";


import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
	constructor() {
		super();

		this.state = {
    pageTitle: "Welcome to my portfolio",
    data: [
    { title: "Quip", category: "eCommerce" },
    { title: "Eventbrite", category: "Scheduling" },
    { title: "Ministry Safe", category: "Enterprise" },
    { title: "SwingAway", category: "eCommerce" }
    ]
};
	}
	portfolioItems() {
    	return this.state.data.map(item => {
    	  return <PortfolioItem title={item.title}/>
    	  /* <h3>{item}</h3>; */
    	});
  }
	
	render() {
		return (
			<div>
				<h2>{this.state.pageTitle}</h2>

				{this.portfolioItems()}
			</div>
		);
	}
}