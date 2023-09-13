import React, { useCallback, useReducer } from "react";

import * as questionnairesActions from "../store/actions/questionnaires.action";
import azurePageReducer, {
  initialState,
} from "../store/reducers/questionnaires.reducer";

const QuestionnairesContext = React.createContext({});

export const QuestionnairesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(azurePageReducer, initialState);

  const setStep = useCallback((step) => {
    dispatch(questionnairesActions.setStep(step));
  }, []);

  const setMaxStep = useCallback((step) => {
    dispatch(questionnairesActions.setMaxStep(step));
  }, []);

  const setQuestions = useCallback((questions) => {
    dispatch(questionnairesActions.setQuestions(questions));
  }, []);

  const setLoading = useCallback((loading) => {
    dispatch(questionnairesActions.setLoading(loading));
  }, []);

  const resetToDefault = useCallback(() => {
    dispatch(questionnairesActions.resetToDefault());
  }, []);

  const value = {
    ctxValue: state,
    setStep,
    setMaxStep,
    setQuestions,
    setLoading,
    resetToDefault,
  };

  return (
    <QuestionnairesContext.Provider {...{ value }}>
      {children}
    </QuestionnairesContext.Provider>
  );
};

export default QuestionnairesContext;
