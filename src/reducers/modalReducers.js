export const modalReducers = (state = {isOpen: false}, actions) => {

    switch (actions.type) {
        case MODAL_TYPES.OPEN_MODAL:
            return {...state, isOpen: true,id: actions.payload.id};
        case MODAL_TYPES.CLOSE_MODAL:
            return {...state, isOpen: false,id: null};
        default:
            return state;
    }
}

export const MODAL_TYPES = {
    OPEN_MODAL: 'OPEN_MODAL',
    CLOSE_MODAL: 'CLOSE_MODAL',
}