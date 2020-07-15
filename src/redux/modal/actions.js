import { CHANGE_AUTH_MODAL, CHANGE_CATALOG_MODAL } from "../types";

export const changeStateAuthModal = () => {
  return {
    type: CHANGE_AUTH_MODAL,
  };
};

export const changeStateCatalogModal = () => {
  return {
    type: CHANGE_CATALOG_MODAL,
  };
};
