import { createStore, applyMiddleware  , combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { bikesReducer } from './reducers/bikesReducer';
import { alertsReducer } from './reducers/alertsReducer';


const composeEnhancers = composeWithDevTools({});

const rootReducer = combineReducers({
     bikesReducer,
     alertsReducer
    // bookingsReducer,
 })

 const store = createStore(
    rootReducer,
    composeEnhancers(
      applyMiddleware(thunk)
     
    )
  );
  
  export default store