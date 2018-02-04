import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

//root reducer
import { rootReducer } from './reducer/index';


//data
import { comments } from './data/comments';
import { posts } from './data/posts';

//create object for default data
const defaultState = {
  posts,
  comments
};

//create the store
export default const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;