import {ENTRY_TYPES} from "../reducers/entryReducers";

export const removeEntryRedux = (id) => {
    return {type: ENTRY_TYPES.REMOVE_ENTRY, payload: {id}};
}

export const addEntryRedux = (payload) => {
    return {type: ENTRY_TYPES.ADD_ENTRY, payload};
}

export const editEntryRedux = (id,entry) => {
    return {type: ENTRY_TYPES.UPDATE_ENTRY, payload: {id,entry}};
}

export const getEntriesRedux = () => {
    return {type: ENTRY_TYPES.GET_ENTRIES};
}

export const populateEntriesRedux = (entries) => {
    return {type: ENTRY_TYPES.POPULATE_ENTRIES, payload: {entries}};
}

export const populateEntryDetailRedux = (entryDetail) => {
    return {type: ENTRY_TYPES.POPULATE_ENTRY_DETAIL, payload: {entryDetail}};
}



