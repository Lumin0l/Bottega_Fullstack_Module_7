import React, { Component } from "react";

// Data for the component
const rawJournalData = [
  { title: 'Post One', content: 'Post content', status: 'draft' },
  { title: 'Post Two', content: 'Post content', status: 'draft' },
  { title: 'Post Three', content: 'Post content', status: 'draft' },
  { title: 'Post Four', content: 'Post content', status: 'draft' },
];


// Class component
export default class JournalList extends Component {
	constructor(props) {
		super();

		this.state = {
			journalData: rawJournalData,
			greeting: "Hello World",
			isOpen: true
		};
	}
  render() {
	return <h2>{this.props.heading}</h2>
  }
}
