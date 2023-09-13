import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Divider,
  RadioGroup,
  Radio,
  CheckboxGroup,
  Checkbox,
  Input,
} from "@nextui-org/react";

import data from "../../../questionnaire.json";

import { RiQuestionAnswerFill } from "react-icons/ri";

export default function QuestionCard({ step }) {
  const { question, answers, type, otherAnswer } = data.questionnaires[step];
  console.log(step);

  const renderRadio = () => {
    const groupList = answers.map((answer) => {
      return (
        <Radio key={answer} value={answer} size="lg">
          {answer}
        </Radio>
      );
    });

    if (otherAnswer) {
      groupList.push(
        <div className="flex">
          <Radio
            className="flex-none"
            key="other"
            value="other"
            size="lg"
          ></Radio>
          <Input className="grow" label="其他" />
        </div>
      );
    }
    return <RadioGroup>{groupList}</RadioGroup>;
  };

  const renderCheckbox = () => {
    const groupList = answers.map((answer) => {
      return (
        <Checkbox key={answer} value={answer} size="lg">
          {answer}
        </Checkbox>
      );
    });

    if (otherAnswer) {
      groupList.push(
        <div className="flex">
          <Checkbox
            className="flex-none"
            key="other"
            value="other"
            size="lg"
          ></Checkbox>
          <Input className="grow" label="其他" />
        </div>
      );
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
      <CardHeader className="flex gap-3">
        <RiQuestionAnswerFill className="w-10 h-10" />
        <div className="flex">
          <p className="text-md">{question}</p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>{renderCardBody()}</CardBody>
    </Card>
  );
}
