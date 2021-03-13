import { combineReducers } from 'redux'
import authReducer from './auth/authReducer';
import productReducer from './product/productReducer';
import cartReducer from './cart/cartReducer';
import modalReducer from './modal/modalReducer';
import storage from "redux-persist/lib/storage";   //local storage
import { persistReducer } from 'redux-persist';
// import sessionStorage from "redux-persist/lib/storage/session";   //session storage


const persistConfig = {
    key: 'root',
    storage,
    // whiteList me batate hain kn kn si state save karwani hain
    whiteList:['auth','cart']
  }

var rootReducer = combineReducers({
    auth: authReducer,
    products: productReducer,
    cart: cartReducer, 
    modal: modalReducer
})

export default persistReducer(persistConfig,rootReducer);