import React, { Component } from 'react';
import '../styles/App.css';

import BookDetail from '../containers/BookDetail';
import BookList from '../containers/BookList';

class App extends Component {
  render() {
    return (
      <div className="App">
      <div className="jumbotron jumbotron-fluid text-me">
      <div className="container">
      <h1>Cheddar's Book Library</h1>
      </div>
      </div>
      <div className="d-flex flex-row justify-content-center">
        <BookList />
        <BookDetail />
      </div>
      </div>
    );
  }
}

export default App;