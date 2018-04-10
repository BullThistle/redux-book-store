import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  books: BooksReducer
});

export default rootReducer;
