export const ENTRY_TYPES = {
    ADD_ENTRY: 'ADD_ENTRY',
    REMOVE_ENTRY: 'REMOVE_ENTRY',
    UPDATE_ENTRY: 'UPDATE_ENTRY',
    GET_ENTRIES: 'GET_ENTRIES',
    POPULATE_ENTRIES: 'POPULATE_ENTRIES',
    POPULATE_ENTRY_DETAIL: 'POPULATE_ENTRY_DETAIL',
}

const entryReducers = (state = initialEntries, action) => {
    switch (action.type) {
        case ENTRY_TYPES.POPULATE_ENTRIES:
            return action.payload;
        case ENTRY_TYPES.ADD_ENTRY:
            return state.concat({...action.payload});
        case ENTRY_TYPES.REMOVE_ENTRY:
            return state.filter(entry => entry.id !== action.payload.id);
        case ENTRY_TYPES.UPDATE_ENTRY: {
            const index = state.findIndex(entry => entry.id === action.payload.id);
            const newEntries = [...state];
            newEntries[index] = {...action.payload.entry};
            return newEntries;
        }
        default:
            return state;
    }
}

export default entryReducers;

var initialEntries = [
    // {
    //     id: 1,
    //     description: 'Work income',
    //     value: 1000.00,
    //     isExpense: false,
    // },
    // {
    //     id: 2,
    //     description: 'Water bill',
    //     value: 20.00,
    //     isExpense: true,
    // },
    // {
    //     id: 3,
    //     description: 'Rent',
    //     value: 300.00,
    //     isExpense: true,
    // }
]

