import React, { useContext } from "react";
import { Card, CardHeader, CardBody, Divider } from "@nextui-org/react";
import { CgHello } from "react-icons/cg";

import QuestionnairesContext from "../../../../../context/questionnaires";

export default function WelcomeCard({ step }) {
  const {
    ctxValue: { step: currentStep },
  } = useContext(QuestionnairesContext);

  return (
    <Card className={`flex-0 w-full ${currentStep !== step ? "h-0" : ""}`}>
      <CardHeader className="flex gap-3">
        <CgHello className="w-10 h-10" />
        <div className="flex">
          <p className="text-2xl">What's Your DevOps Story?</p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody className="text-lg">
        <p>歡迎參加 趨勢科技 x DevOpsDays Taipei 2023 的攤位活動，</p>
        <p>透過完成問卷取得您專屬的DevOps Story，還可獲得抽獎機會唷！</p>
        <p>想了解趨勢科技在DevOps的相關實踐嗎？也歡迎找攤位工作人員聊聊！</p>
      </CardBody>
    </Card>
  );
}
