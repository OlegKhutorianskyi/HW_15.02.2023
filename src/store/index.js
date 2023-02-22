import { createStore } from 'redux';
import { userReducer } from './reducer/userReducer';

// const rootReducer = combineReducers({
//     user: userReducer
// })

export  const store = createStore(userReducer)



