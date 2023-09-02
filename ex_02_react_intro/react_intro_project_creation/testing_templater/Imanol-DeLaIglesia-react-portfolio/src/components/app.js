import React, { Component } from 'react';
import moment from 'moment';

import PortfolioContainer from './portfolio/portfolio-container';

export default class App extends Component {
  constructor() {
    super();
    console.log("Portfolio container has rendered!")
  }

  render() {
      return (
        <div className='app'>
          <h1>Imanol de la Iglesia - React portfolio</h1>
          <div>{moment().format('MMMM Do YYYY, h:mm:ss a')}</div>
          <PortfolioContainer />
        </div>
      );
  }
}
