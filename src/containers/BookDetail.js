import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook }  from '../actions/index';
//make sure action created flows through all reducers
import { bindActionCreators } from 'redux';


class BookDetail extends Component {

  render() {
    if(!this.props.book) {
      return (
        <div>Select a book to get started!</div>
      )
    }
    return (
      <div className="col-md-4">
        <h3> Details for: </h3>
        <h4 className="title">{this.props.book.title}</h4>
        <div>{this.props.book.pages} pages</div>
        <div>Author: {this.props.book.author}</div>
        <div>Price: ${this.props.book.price} USD</div>
        <div>Published: {this.props.book.published_date} by {this.props.book.publisher}</div>
        <div>Genre: {this.props.book.category.join(", ")} </div>
      </div>
    );
  }
}

  //   <div class="card" style="width: 20rem;">
  //   <img class="card-img-top" src="..." alt="Card image cap">
  //   <div class="card-block">
  //     <h4 class="card-title">Card title</h4>
  //     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  //     <a href="#" class="btn btn-primary">Go somewhere</a>
  //   </div>
  // </div>

//activeBook reducer creates activeBook state.
function mapStateToProps(state) {
  return {
    book: state.activeBook,
  };
}


export default connect(mapStateToProps)(BookDetail);
