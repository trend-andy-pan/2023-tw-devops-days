import React, { useContext, useRef } from "react";
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
import { Controller } from "react-hook-form";

import QuestionnairesContext from "../../../../../context/questionnaires";
import { QuestionRadio } from "./QuestionRadio";
import { QuestionRadioOthers } from "./QuestionRadioOthers";
import { QuestionCheckboxOthers } from "./QuestionCheckboxOthers";
import { QuestionCheckbox } from "./QuestionCheckbox";

import "./index.css";

export default function QuestionCard({ step }) {
  const childRef = useRef();

  const {
    ctxValue: {
      questions,
      loading,
      reactForm: { control },
    },
  } = useContext(QuestionnairesContext);

  const {
    question = "",
    answers = [],
    type = "",
    otherAnswer = false,
  } = questions[step] ?? {};

  if (type === "") return null;

  const renderRadio = () => {
    const groupList = answers.map((answer) => {
      return (
        <QuestionRadio key={`${step}-${answer}`} value={answer} size="lg">
          {answer}
        </QuestionRadio>
      );
    });

    if (otherAnswer) {
      groupList.push(
        <QuestionRadioOthers
          {...{
            key: `${step}-other`,
            step,
            name: `answer-${step}`,
            radioOthersRef: childRef,
          }}
        />
      );
    }
    return (
      <Controller
        name={`answer-${step}`}
        control={control}
        defaultValue={""}
        render={({ field }) => (
          <RadioGroup
            {...field}
            onChange={(e) => {
              if (childRef.current) childRef.current.updateSelect();
              field.onChange(e);
            }}
          >
            {groupList}
          </RadioGroup>
        )}
      />
    );
  };

  const renderCheckbox = () => {
    const groupList = answers.map((answer) => {
      return (
        <QuestionCheckbox key={`${step}-${answer}`} value={answer} size="lg">
          {answer}
        </QuestionCheckbox>
      );
    });

    if (otherAnswer) {
      groupList.push(
        <QuestionCheckboxOthers
          {...{
            key: `${step}-other`,
            step,
            name: `answer-${step}`,
            radioCheckboxRef: childRef,
          }}
        />
      );
    }

    return (
      <Controller
        name={`answer-${step}`}
        control={control}
        defaultValue={[]}
        render={({ field }) => (
          <CheckboxGroup
            {...field}
            onChange={(e) => {
              if (childRef.current) childRef.current.updateSelect();

              field.onChange(e);
            }}
          >
            {groupList}
          </CheckboxGroup>
        )}
      />
    );
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
        <Controller
          name={`question-${step}`}
          control={control}
          defaultValue={question}
          render={() => {}}
        />
        <CardBody>{renderCardBody()}</CardBody>
      </Skeleton>
    </Card>
  );
}
