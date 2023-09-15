import React, { useCallback, useContext, useEffect } from "react";
import axios from "axios";
import yaml from "yaml";

import QuestionnairesContext from "../../context/questionnaires";
import App from "./App";

import "../../assets/index.css";

export default function Main() {
  const { setQuestions, setMaxStep, setLoading, setKey } = useContext(
    QuestionnairesContext
  );

  const fetchData = useCallback(async () => {
    setLoading(true);
    const response = await axios.get(
      "https://trendmicro.github.io/2023-tw-devops-days/questionnaires.yml"
    );

    const result = yaml.parse(response.data);
    setKey(result.title);
    setQuestions(result.questionnaires);
    setMaxStep(result.questionnaires.length - 1);
    setLoading(false);
  }, [setQuestions, setMaxStep, setLoading, setKey]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <main className="flex flex-col h-screen px-8">
      <App />
    </main>
  );
}
