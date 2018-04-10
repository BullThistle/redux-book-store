import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';
import { List } from 'semantic-ui-react';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <List.Item
          key={book.title}
          onClick={() => this.props.selectBook(book)}
        >
          {book.title}
        </List.Item>
      )
    })
  }

  render()  {
    return (
      <List>
        {this.renderList()}
      </List>
    )
  }
}

function mapStateToProps(state) {
  return {
    books: state.books
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectBook: selectBook}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
