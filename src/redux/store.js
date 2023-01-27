import { createStore, applyMiddleware } from 'redux';
import { reducerProject } from './Project/reducerProject';
import thunk from 'redux-thunk';

const store = createStore(
    reducerProject,
    applyMiddleware(thunk)
)
export default store;