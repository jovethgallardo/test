import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/reducers';
//import { persitStore, autoRehydrate } from 'redux-persist';


export default function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState
        /*compose(   
            autoRehydrate(),
            applyMiddleware(thunk)
        )*/
    )
}