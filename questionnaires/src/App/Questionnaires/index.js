import React, { useContext } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Divider,
  RadioGroup,
  Radio,
  ScrollShadow,
  CheckboxGroup,
  Checkbox,
} from "@nextui-org/react";

import QuestionnairesContext from "../../context/questionnaires";
import QuestionCard from "./QuestionCard";

export default function Questionnaires({}) {
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
        {/* <Card className="flex-0 w-full" disableAnimation>
          <CardHeader className="flex gap-3">
            <RiQuestionAnswerFill className="w-10 h-10" />
            <div className="flex">
              <p className="text-md">1. 你有幾年DevOps的經驗</p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <RadioGroup>
              <Radio value="1">一年</Radio>
              <Radio value="2">二年</Radio>
              <Radio value="3">三年</Radio>
            </RadioGroup>
          </CardBody>
        </Card>
        <Card className="flex-0 w-full" disableAnimation>
          <CardHeader className="flex gap-3">
            <RiQuestionAnswerFill className="w-10 h-10" />
            <div className="flex">
              <p className="text-md">2. 你有幾年DevOps的經驗</p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <CheckboxGroup>
              <Checkbox value="1">一年</Checkbox>
              <Checkbox value="2">二年</Checkbox>
              <Checkbox value="3">三年</Checkbox>
            </CheckboxGroup>
          </CardBody>
        </Card>
        <Card className="flex-0 w-full" disableAnimation>
          <CardHeader className="flex gap-3">
            <RiQuestionAnswerFill className="w-10 h-10" />
            <div className="flex">
              <p className="text-md">3. 你有幾年DevOps的經驗</p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <RadioGroup>
              <Radio value="1">一年</Radio>
              <Radio value="2">二年</Radio>
              <Radio value="3">三年</Radio>
            </RadioGroup>
          </CardBody>
        </Card> */}
      </div>
    </ScrollShadow>
  );
}
