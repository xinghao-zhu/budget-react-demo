import {applyMiddleware, combineReducers, createStore} from "redux";
import entryReducers from "../reducers/entryReducers";
import {composeWithDevTools} from "redux-devtools-extension";
import {modalReducers} from "../reducers/modalReducers";
import createSagaMiddleware from "redux-saga";
import {initSagas} from "../saga";

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

const store =  createStore(combineReducers({
    entries: entryReducers,
    modals: modalReducers,
}),composeWithDevTools(
    applyMiddleware(...middlewares)
));
initSagas(sagaMiddleware);

export default store;