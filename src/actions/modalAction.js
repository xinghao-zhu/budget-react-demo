import {MODAL_TYPES} from "../reducers/modalReducers";

export const openModal = (id) => {
  return {type: MODAL_TYPES.OPEN_MODAL, payload: {id}};
}

export const closeModal = (id) => {
  return {type: MODAL_TYPES.CLOSE_MODAL,payload: {id}};
}