import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      ideas: []
    }
  }

  render() {
    return(
      <main className='App'>
        <h1>IdeaBox</h1>
      </main>
    )
  }
}

export default App;
