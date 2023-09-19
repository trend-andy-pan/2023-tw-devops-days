import React, { useContext, useEffect, useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  Image,
  Button,
  Progress,
} from "@nextui-org/react";
import { useForm } from "react-hook-form";
import axios from "axios";
import AES from "crypto-js/aes";
import encUtf8 from "crypto-js/enc-utf8";

import QuestionnairesContext from "../../../context/questionnaires";
import Questionnaires from "./Questionnaires";

import logoImg from "../../../assets/TrendMicroLogo.png";
import "./index.css";

export default function App() {
  const bearer =
    "U2FsdGVkX184KWZlLhP23BFZpa6WmeF6Hu8lGZ59yI5VZXMLh3t56/KBxUwwpBcoib7oWdSQsrzG45gY+KqTCI8ArUfMxuEQfUdJxwqk7CT1FK9y0HtBIPzx9RrKQcWD4JozdXeFqlGLrVlDEosEKJblC+FIbb5fDt5t+6Y98AM=";

  const [submitLoading, setSubmitLoading] = useState(false);

  const {
    ctxValue: { step, maxStep, key, formId, loading },
    setStep,
    setQuestionsForm,
    setPersonalForm,
  } = useContext(QuestionnairesContext);

  const questionsForm = useForm({});
  const { getValues: getQuestionsFormValues } = questionsForm;

  const personalForm = useForm({});
  const { getValues: getPersonalFormValues } = personalForm;

  useEffect(() => {
    setQuestionsForm(questionsForm);
    setPersonalForm(personalForm);
  }, [setQuestionsForm, questionsForm, setPersonalForm, personalForm]);

  const handleNext = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setStep(step + 1);
  };

  const handlePrev = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setStep(step - 1);
  };

  const postQuestionnaires = async () => {
    setSubmitLoading(true);
    const bearerBytes = AES.decrypt(bearer, key);
    const headers = {
      "Content-Type": "application/json",
      Authorization: bearerBytes.toString(encUtf8),
    };
    const postData = {
      ...getQuestionsFormValues(),
      time: new Date().toISOString(),
      formId,
    };

    await axios.post(
      "https://api.github.com/repos/trendmicro/2023-tw-devops-days/dispatches",
      {
        event_type: "submit-request",
        client_payload: {
          questionnaires: JSON.stringify(postData),
        },
      },
      {
        headers: headers,
      }
    );

    setSubmitLoading(false);
    handleNext();
  };

  const postPersonalInfo = async () => {
    setSubmitLoading(true);
    const bearerBytes = AES.decrypt(bearer, key);
    const headers = {
      "Content-Type": "application/json",
      Authorization: bearerBytes.toString(encUtf8),
    };
    const postData = {
      ...getPersonalFormValues(),
      time: new Date().toISOString(),
      formId,
    };

    await axios.post(
      "https://api.github.com/repos/trendmicro/2023-tw-devops-days/dispatches",
      {
        event_type: "submit-request",
        client_payload: {
          users: JSON.stringify(postData),
        },
      },
      {
        headers: headers,
      }
    );

    setSubmitLoading(false);
  };

  const handleSubmit = () => {
    postPersonalInfo();
  };

  const renderNextButton = () => {
    switch (true) {
      case step <= maxStep - 2:
        return (
          <Button color="primary" variant="ghost" onClick={() => handleNext()}>
            下一題
          </Button>
        );
      case step <= maxStep - 1:
        return (
          <Button
            color="success"
            variant="ghost"
            onClick={() => postQuestionnaires()}
            isLoading={submitLoading}
          >
            看結果
          </Button>
        );
      case step === maxStep:
        return (
          <Button
            color="success"
            variant="shadow"
            onClick={() => handleSubmit()}
            isLoading={submitLoading}
          >
            完成
          </Button>
        );
      default:
    }
  };

  return (
    <>
      <Navbar className="flex max-md:px-3 navbar">
        <NavbarBrand className="flex-none max-w-[150px]">
          <div className="max-sm:w-[35px] max-sm:relative overflow-hidden logo-div">
            <Image width={150} alt="Trend Micro" src={logoImg} />
          </div>
        </NavbarBrand>
        <NavbarContent
          className="grow justify-end md:justify-center"
          justify="none"
        >
          <h1 className="text-2xl max-md:text-base font-bold text-inherit">
            What's your DevOps Story?
          </h1>
        </NavbarContent>
      </Navbar>
      <article className="flex-grow px-6 pt-6 max-md:px-3 max-md:pt-3">
        <Questionnaires />
      </article>
      <footer className="px-6">
        <div className="flex w-full justify-between py-6 max-md:py-3">
          <Button
            color="secondary"
            variant="ghost"
            isDisabled={step <= 0}
            onClick={() => handlePrev()}
          >
            上一題
          </Button>
          {loading ? (
            <Button color="primary" variant="ghost" isDisabled isLoading>
              下一題
            </Button>
          ) : (
            renderNextButton()
          )}
        </div>
        <Progress
          size="md"
          value={step}
          label={<></>}
          valueLabel={`${step + 1} / ${maxStep + 1}`}
          maxValue={maxStep}
          color="success"
          showValueLabel={true}
          className="w-full pb-4"
        />
      </footer>
    </>
  );
}
