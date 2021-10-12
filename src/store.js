import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from 'redux-thunk'
//import { composeWithDevTools } from 'redux-devtools-extension'

import chartReducer from './reducers/chartReducer'
import newsReducer from './reducers/newsReducer'


const reducer = combineReducers({
  chart: chartReducer,
  news: newsReducer,
})


/*  Devtools commented out for production commit
const store = createStore(
  reducer, 
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)
*/

const store = createStore(
  reducer,
  applyMiddleware(thunk)
)


export default store
