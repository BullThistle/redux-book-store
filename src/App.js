import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';

import BookList from './containers/book-list';
import BookDetail from './containers/book-detail';

class App extends Component {
  render() {
    return (
      <div>
        <Grid columns='two'>
          <Grid.Column>
            <BookList />
          </Grid.Column>
          <Grid.Column>
            <BookDetail />
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default App;
