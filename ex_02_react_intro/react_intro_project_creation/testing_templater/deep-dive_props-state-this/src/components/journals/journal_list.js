import React, { Component } from "react";

// Data for the component
const rawJournalData = [
  { title: 'Post One', content: 'Post content', status: 'draft' },
  { title: 'Post Two', content: 'Post content', status: 'draft' },
  { title: 'Post Three', content: 'Post content', status: 'draft' },
  { title: 'Post Four', content: 'Post content', status: 'draft' },
];

// Functional component
const JournalEntry = props => {
	return (
		<div>
			<h2>{props.title}</h2>
			<p>{props.content}</p>
		</div>
	);
}

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
	// Create a method to clear the state object and set the state to an empty array.
	clearEntries() {
		this.setState({ journalData: [], isOpen: false });
	}

	showAllEntries() {
		this.setState({ journalData: rawJournalData, isOpen: true });
	}	

  render() { 
	// Create method to store the data we are going to use. We track the data from the state object and map over it to create a new array of JSX elements, that we store in a var.
	const journalEntries = this.state.journalData.map(journalEntry => {
		return (
			// The key is just a tracker we create to help React keep track of the elements in the array. It is not displayed on the page.
			<div key={journalEntry.title}>
				<JournalEntry 
					title={journalEntry.title} 
					content={journalEntry.content} 
					status={journalEntry.status} 
				/>

				<button onClick={this.clearEntries.bind(this)}>Clear Journal Entries</button>
				<button onClick={this.showAllEntries.bind(this)}>Show All Entries</button>
			</div>
		);
	});

	return (
		<div>
			<h2>{this.props.heading}</h2>
			{journalEntries}
		</div>
	);
  }
}
