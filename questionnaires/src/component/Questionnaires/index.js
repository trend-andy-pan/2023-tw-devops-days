import React, { useContext } from "react";
import { ScrollShadow } from "@nextui-org/react";

import QuestionnairesContext from "../../context/questionnaires";
import QuestionCard from "./QuestionCard";

export default function Questionnaires() {
  const {
    ctxValue: { step, maxStep },
  } = useContext(QuestionnairesContext);

  return (
    <ScrollShadow
      orientation="horizontal"
      className="h-full overflow-hidden"
      isEnabled={false}
    >
      <div
        className="flex flex-nowrap flex-row w-full h-full gap-6 !duration-500 questionnaires"
        style={{ transform: `translateX(calc((-100% - 1.5rem) * ${step}))` }}
      >
        {[...Array(maxStep + 1)].map((_e, i) => (
          <QuestionCard key={`QuestionCard-${i}`} step={i} />
        ))}
      </div>
    </ScrollShadow>
  );
}
