import React, { Component } from 'react';
import { connect } from 'react-redux';
import { List } from 'semantic-ui-react'

class BookList extends Component {
  renderList() {
    return this.props.books((book) => {
      return (
        <List.Item key={book.title}>{book.title}</List.Item>
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

export default connect(mapStateToProps)(BookList);
