import { CHE_OPT, OPT_DONE, OPT_SEND_STUB, OPT_STUB } from "../types";

let initialState = {
  stub: false,
  isDoneSend: false,
  msg: "",
  invalid: false,
  city: {
    stub: false,
    arr: [],
    done: false,
  },
  branchN: {
    stub: false,
    arr: [],
    done: false,
  },
};

export const checkout = (state = initialState, action) => {
  switch (action.type) {
    case CHE_OPT:
      state.city = {
        stub: false,
        arr: [...action.arrCity],
        done: action.arrCity.length === 1,
      };
      if (action.arrBranchN) {
        state.branchN = {
          stub: false,
          arr: [...action.arrBranchN],
          done: action.arrBranchN.length === 1,
        };
      }
      return { ...state };

    case OPT_DONE:
      if (action.invalid) {
        state.invalid = action.invalid;
        state.msg = action.res;
      } else {
        state.isDoneSend = !!action.res;
      }
      return { ...state };

    case OPT_STUB:
      state.city.stub = true;
      state.branchN.stub = true;
      return { ...state };

    case OPT_SEND_STUB:
      state.stub = false;
      return { ...state };

    default:
      return state;
  }
};
