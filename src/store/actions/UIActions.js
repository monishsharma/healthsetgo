import * as actionTypes from './actiontypes';

export const showModal = () => {
    return {
        type: actionTypes.SHOW_MODAL,
        modalState:true
    }
}

export const hideModal = () => {
    return {
        type: actionTypes.HIDE_MODAL,
        modalState:false
    }
}