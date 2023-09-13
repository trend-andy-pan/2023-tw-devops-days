import React, { useContext } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Divider,
  RadioGroup,
  CheckboxGroup,
  Skeleton,
} from "@nextui-org/react";
import { RiQuestionAnswerFill } from "react-icons/ri";

import QuestionnairesContext from "../../../context/questionnaires";
import { QuestionRadio } from "../QuestionRadio";
import { QuestionRadioOthers } from "../QuestionRadioOthers";
import { QuestionCheckboxOthers } from "../QuestionCheckboxOthers";
import { QuestionCheckbox } from "../QuestionCheckbox";

export default function QuestionCard() {
  const {
    ctxValue: { step, questions, loading },
  } = useContext(QuestionnairesContext);

  const {
    question = "",
    answers = [],
    type = "",
    otherAnswer = false,
  } = questions[step] ?? {};

  const renderRadio = () => {
    const groupList = answers.map((answer) => {
      return (
        <QuestionRadio key={answer} value={answer} size="lg">
          {answer}
        </QuestionRadio>
      );
    });

    if (otherAnswer) {
      groupList.push(<QuestionRadioOthers answers={answers} />);
    }
    return <RadioGroup>{groupList}</RadioGroup>;
  };

  const renderCheckbox = () => {
    const groupList = answers.map((answer) => {
      return (
        <QuestionCheckbox key={answer} value={answer} size="lg">
          {answer}
        </QuestionCheckbox>
      );
    });

    if (otherAnswer) {
      groupList.push(<QuestionCheckboxOthers answers={answers} />);
    }

    return <CheckboxGroup>{groupList}</CheckboxGroup>;
  };

  const renderCardBody = () => {
    switch (type) {
      case "radio":
        return renderRadio();
      case "checkbox":
        return renderCheckbox();
      default:
        break;
    }
  };

  return (
    <Card className="flex-0 w-full" disableAnimation>
      <Skeleton isLoaded={!loading} className="rounded-lg">
        <CardHeader className="flex gap-3">
          <RiQuestionAnswerFill className="w-10 h-10" />
          <div className="flex">
            <p className="text-md">{question}</p>
          </div>
        </CardHeader>
      </Skeleton>
      <Divider />
      <Skeleton isLoaded={!loading} className="rounded-lg h-full">
        <CardBody>{renderCardBody()}</CardBody>
      </Skeleton>
    </Card>
  );
}
