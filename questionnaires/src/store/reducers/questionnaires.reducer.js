import _ from "lodash";

import * as actionType from "../actions/questionnaires.actionType";

export const initialState = {
  step: 0,
  maxStep: 0,
  questions: [],
  key: "",
  loading: true,
  reactForm: {},
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
    case actionType.SET_QUESTIONS:
      return {
        ...state,
        questions: action.payload,
      };
    case actionType.SET_KEY:
      return {
        ...state,
        key: action.payload,
      };
    case actionType.SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case actionType.SET_REACT_FORM:
      return {
        ...state,
        reactForm: action.payload,
      };
    case actionType.RESET_TO_DEFAULT:
      return _.cloneDeep(initialState);
    default:
      return state;
  }
};

export default azurePageReducer;
