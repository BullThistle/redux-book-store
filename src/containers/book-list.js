import React, { Component } from 'react';
import { List } from 'semantic-ui-react'

export default class BookList extends Component {
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
