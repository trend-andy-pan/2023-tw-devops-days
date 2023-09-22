import React, { useContext, useEffect } from "react";
import { Card, CardHeader, CardBody, Divider } from "@nextui-org/react";
import { FaRegLightbulb } from "react-icons/fa";

import QuestionnairesContext from "../../../../../context/questionnaires";

export default function HelpCard({ step, index }) {
  const {
    ctxValue: { questions, step: currentStep },
    setQuestionNo,
    setNextText,
  } = useContext(QuestionnairesContext);
  const { title = "你知道嗎", description = "" } = questions[index]?.help ?? {};

  useEffect(() => {
    if (currentStep === step) {
      setQuestionNo(index + 1);
      setNextText("下一題");
    }
  }, [setNextText, currentStep, step, setQuestionNo, index]);

  return (
    <Card className={`flex-0 w-full ${currentStep !== step ? "h-0" : ""}`}>
      <CardHeader className="flex gap-3">
        <FaRegLightbulb className="w-10 h-10" />
        <div className="flex">
          <p className="text-md">{title}</p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <p>{description}</p>
      </CardBody>
    </Card>
  );
}
