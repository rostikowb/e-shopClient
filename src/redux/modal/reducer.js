import { CHANGE_AUTH_MODAL, CHANGE_CATALOG_MODAL } from "../types";

const initialState = {
  auth: false,
  catalog: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_AUTH_MODAL:
      return { ...state, auth: !state.auth };
    case CHANGE_CATALOG_MODAL:
      return { ...state, catalog: !state.catalog };
    default:
      return state;
  }
};
