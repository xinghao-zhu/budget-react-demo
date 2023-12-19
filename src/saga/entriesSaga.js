import {ENTRY_TYPES} from "../reducers/entryReducers";
import {take,call,put,fork} from "redux-saga/effects";
import axios from "axios";

export function* entriesSaga() {
    yield take(ENTRY_TYPES.GET_ENTRIES);
    console.log('get entries saga');
    const result = yield call(axios,'http://localhost:3002/entries');
    console.log('result',result);
    yield put({type: ENTRY_TYPES.POPULATE_ENTRIES,payload: result.data});
}

export function* getEntryDetail(id){
    const {data} = yield call(axios,`http://localhost:3002/entries/${id}`);
    console.log(data);
}

export function* getAllEntriesDetail(){
    const {payload} = yield take(ENTRY_TYPES.POPULATE_ENTRIES);
    for (let index = 0; index < payload.length; index++) {
        const entry = payload[index];
        yield fork(getEntryDetail,entry.id);
    }
}