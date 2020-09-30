import * as actionTypes from "../actions/actiontypes";

const initialState = {
  showModal: false,
};

const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SHOW_MODAL: {
      return {
        ...state,
        showModal: action.modalState,
      };
    }
    case actionTypes.HIDE_MODAL:
      {
        return {
          ...state,
          showModal: action.modalState,
        };
      }
      break;

    default:
      return state;
  }
};

export default uiReducer;
