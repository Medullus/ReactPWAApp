import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import {Product} from './product.reducer'
const rootReducer = (history) => combineReducers({
  router: connectRouter(history),
  Product
})

export default rootReducer