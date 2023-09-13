import * as actionType from "./questionnaires.actionType";

export const setStep = (payload) => {
  return {
    type: actionType.SET_STEP,
    payload,
  };
};
export const setMaxStep = (payload) => {
  return {
    type: actionType.SET_MAX_STEP,
    payload,
  };
};

export const resetToDefault = () => {
  return {
    type: actionType.RESET_TO_DEFAULT,
  };
};
