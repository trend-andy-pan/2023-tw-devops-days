import React, { useContext } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  Image,
  Button,
  Progress,
} from "@nextui-org/react";

import QuestionnairesContext from "../../context/questionnaires";
import Questionnaires from "../Questionnaires";

import logoImg from "../../assets/TrendMicroLogo.png";

export default function App() {
  const {
    ctxValue: { step, maxStep },
    setStep,
  } = useContext(QuestionnairesContext);

  const handleNext = () => () => {
    setStep(step + 1);
  };

  const handlePrev = () => () => {
    setStep(step - 1);
  };

  const handleSubmit = () => () => {
    alert("送出");
  };

  return (
    <>
      <Navbar className="flex">
        <NavbarBrand className="flex-none max-w-[150px] fixed">
          <Image width={150} alt="Trend Micro" src={logoImg} />
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

          {step === maxStep ? (
            <Button
              color="success"
              variant="ghost"
              isDisabled={step !== maxStep}
              onClick={handleSubmit()}
            >
              送出
            </Button>
          ) : (
            <Button
              color="primary"
              variant="ghost"
              isDisabled={step >= maxStep}
              onClick={handleNext()}
            >
              下一題
            </Button>
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
