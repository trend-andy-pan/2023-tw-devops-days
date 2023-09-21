import React, { useContext, useEffect, useRef } from "react";
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

export default function QuestionCard({ step, index }) {
  const childRef = useRef();

  const {
    ctxValue: {
      questions,
      loading,
      step: currentStep,
      questionsForm: { control },
    },
    setQuestionNo,
  } = useContext(QuestionnairesContext);

  useEffect(() => {
    if (currentStep === step) {
      setQuestionNo(index + 1);
    }
  }, [step, currentStep, setQuestionNo, index]);

  const {
    question = "",
    answers = [],
    type = "",
    otherAnswer = false,
  } = questions[index] ?? {};

  if (type === "") return null;

  const renderRadio = () => {
    const groupList = answers.map((answer) => {
      return (
        <QuestionRadio key={`${index}-${answer}`} value={answer} size="lg">
          {answer}
        </QuestionRadio>
      );
    });

    if (otherAnswer) {
      groupList.push(
        <QuestionRadioOthers
          {...{
            key: `${index}-other`,
            step,
            name: `answer-${index}`,
            radioOthersRef: childRef,
          }}
        />
      );
    }
    return (
      <Controller
        name={`answer-${index}`}
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
        <QuestionCheckbox key={`${index}-${answer}`} value={answer} size="lg">
          {answer}
        </QuestionCheckbox>
      );
    });

    if (otherAnswer) {
      groupList.push(
        <QuestionCheckboxOthers
          {...{
            key: `${index}-other`,
            step,
            name: `answer-${index}`,
            radioCheckboxRef: childRef,
          }}
        />
      );
    }

    return (
      <Controller
        name={`answer-${index}`}
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
    <Card className={`flex-0 w-full ${currentStep !== step ? "h-0" : ""}`}>
      <Skeleton isLoaded={!loading} className="rounded-lg rounded-b-none">
        <CardHeader className="flex gap-3">
          <RiQuestionAnswerFill className="w-10 h-10" />
          <div className="flex">
            <p className="text-md">
              {question}
              {type === "checkbox" ? " (多選)" : null}
            </p>
          </div>
        </CardHeader>
      </Skeleton>
      <Divider />
      <Skeleton
        isLoaded={!loading}
        className="rounded-lg h-full rounded-t-none"
      >
        <Controller
          name={`question-${index}`}
          control={control}
          defaultValue={question}
          render={() => {}}
        />
        <CardBody>{renderCardBody()}</CardBody>
      </Skeleton>
    </Card>
  );
}
