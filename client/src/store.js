import {createStore,combineReducers,applyMiddleware} from 'redux';
import {thunk} from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { getAllpizzaReducer } from './reducers/pizzaReducer';


const rootReducer=combineReducers({
    getAllPizzaReducer:getAllpizzaReducer
})
const initialState={};
const middleware=[thunk];

const store= createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware)));

export default store;
