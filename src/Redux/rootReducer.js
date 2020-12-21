import { combineReducers } from 'redux'
import authReducer from './auth/authReducer';
import productReducer from './product/productReducer';

var rootReducer = combineReducers({
    auth: authReducer,
    products: productReducer
})

export default rootReducer;