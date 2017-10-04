import React, { Component } from 'react';
import '../styles/App.css';

import BookDetail from '../containers/BookDetail';
import BookList from '../containers/BookList';

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>Cheddar's Book Library</h1>
        <BookList />
        <BookDetail />
      </div>
    );
  }
}

export default App;