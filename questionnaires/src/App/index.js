import React, { useContext, useEffect } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  Image,
  Button,
  Progress,
} from "@nextui-org/react";

import QuestionnairesContext from "../context/questionnaires";
import Questionnaires from "./Questionnaires";

import data from "../questionnaire.json";

export default function App() {
  const {
    ctxValue: { step, maxStep },
    setStep,
    setMaxStep,
  } = useContext(QuestionnairesContext);

  useEffect(() => {
    setMaxStep(data.questionnaires.length - 1);
  }, [setMaxStep]);

  const handleNext = () => () => {
    setStep(step + 1);
  };

  const handlePrev = () => () => {
    setStep(step - 1);
  };

  return (
    <main className="flex flex-col h-screen p-8">
      <Navbar shouldHideOnScroll className="flex">
        <NavbarBrand className="flex-none max-w-[150px] fixed">
          <Image width={150} alt="Trend Micro" src="/TrendMicroLogo.png" />
        </NavbarBrand>
        <NavbarContent className="grow" justify="center">
          <span className="font-bold text-inherit">Questionnaires</span>
        </NavbarContent>
      </Navbar>
      <article className="flex-grow px-6 pt-6">
        <Questionnaires />
      </article>
      <footer className="px-6">
        <div className="flex w-full justify-between py-6">
          <Button
            color="secondary"
            variant="ghost"
            isDisabled={step <= 0}
            onClick={handlePrev()}
          >
            上一題
          </Button>

          <Button
            color="primary"
            variant="ghost"
            isDisabled={step >= maxStep}
            onClick={handleNext()}
          >
            下一題
          </Button>
        </div>
        <Progress
          size="md"
          value={step}
          valueLabel={`${step + 1} / ${maxStep + 1}`}
          maxValue={maxStep}
          color="success"
          showValueLabel={true}
          className="w-full"
        />
      </footer>
    </main>
  );
}
