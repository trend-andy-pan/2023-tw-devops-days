import _ from "lodash";

import * as actionType from "../actions/questionnaires.actionType";

export const initialState = {
  step: 0,
  maxStep: 2,
};

const azurePageReducer = (state, action) => {
  switch (action.type) {
    case actionType.SET_STEP:
      return {
        ...state,
        step: action.payload,
      };
    case actionType.SET_MAX_STEP:
      return {
        ...state,
        maxStep: action.payload,
      };
    case actionType.RESET_TO_DEFAULT:
      return _.cloneDeep(initialState);
    default:
      return state;
  }
};

export default azurePageReducer;
