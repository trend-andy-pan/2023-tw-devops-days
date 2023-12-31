import React, { useContext, useEffect } from "react";
import {
  Card,
  CardBody,
  Divider,
  Input,
  ScrollShadow,
  RadioGroup,
  Radio,
} from "@nextui-org/react";
import { BsInfoCircle } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { HiOutlineMailOpen } from "react-icons/hi";
import { BiSolidBusiness } from "react-icons/bi";
import { Controller } from "react-hook-form";

import Terms from "./Terms";
import Notice from "./Notice";
import QuestionnairesContext from "../../../../../context/questionnaires";

export default function PersonalCard({ step }) {
  const {
    ctxValue: {
      step: currentStep,
      personalForm: { control },
    },
    setMaxStep,
  } = useContext(QuestionnairesContext);

  useEffect(() => {
    setMaxStep(step);
  }, [setMaxStep, step]);

  const renderForm = () => {
    if (!control) return null;

    return (
      <>
        <Controller
          name={`name`}
          control={control}
          defaultValue={""}
          render={({ field }) => (
            <Input
              {...field}
              className="flex-1"
              key="name"
              label="姓名"
              labelPlacement="outside"
              placeholder="王大明"
              size="lg"
              startContent={
                <FaUserAlt className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
              }
            />
          )}
        />

        <Controller
          name={`email`}
          control={control}
          defaultValue={""}
          render={({ field }) => (
            <Input
              {...field}
              className="flex-1"
              key="email"
              type="email"
              label="Email"
              labelPlacement="outside"
              placeholder="username@trendmicro.com"
              size="lg"
              startContent={
                <HiOutlineMailOpen className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
              }
            />
          )}
        />

        <Controller
          name={`company`}
          control={control}
          defaultValue={""}
          render={({ field }) => (
            <Input
              {...field}
              className="flex-1"
              key="company"
              label="目前任職於哪間公司?"
              labelPlacement="outside"
              placeholder="Trend Micro"
              size="lg"
              startContent={
                <BiSolidBusiness className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
              }
            />
          )}
        />

        <Divider />

        <p>個人資料同意書</p>
        <ScrollShadow className="w-full h-[200px] pb-5">
          <Terms />
        </ScrollShadow>

        <Controller
          name={`getRecruitInfo`}
          control={control}
          defaultValue={""}
          render={({ field }) => (
            <RadioGroup {...field} label="是否同意個人資料同意書所述">
              <Radio
                value="Y"
                description="願意收到My DevOps story報告以及趨勢科技相關資訊"
                color="success"
              >
                同意
              </Radio>
            </RadioGroup>
          )}
        />

        <Notice />
      </>
    );
  };
  return (
    <Card className={`flex-0 w-full ${currentStep !== step ? "h-0" : ""}`}>
      <div className="h-half-screen w-full bg-personal-map bg-no-repeat bg-fixed bg-top-20 bg-cover bg-default-900">
        <div className="h-full bg-gradient-to-b from-transparent to-default-100" />
      </div>
      <Divider />
      <CardBody>
        <div className="flex gap-4 items-center pb-5">
          <span className="flex-none">
            <BsInfoCircle className="w-10 h-10" />
          </span>
          <div>
            <p className="flex-1 text-md">想要得到問卷報告嗎？</p>
            <p className="flex-1 text-md">快留下您的資料吧！</p>
          </div>
        </div>
        <Divider />
        <div className="flex py-5 gap-4 flex-col">{renderForm()}</div>
      </CardBody>
    </Card>
  );
}
