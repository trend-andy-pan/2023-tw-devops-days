import React from "react";
import { AiOutlineNotification } from "react-icons/ai";

export default function Notice() {
  return (
    <div className="gap-1 flex flex-row items-top bg-transparent border-warning text-warning border-medium rounded-medium p-unit-4">
      <p className="flex-none">貼心提醒</p>
      <AiOutlineNotification className="flex-none w-6 h-6" />
      <p className="flex-auto">
        欲收到 report 及參加現場抽大獎 <strong>Nespresso 膠囊咖啡機</strong>{" "}
        者，請幫忙留下正確個資，我們才有辦法確認獲獎喔！
      </p>
    </div>
  );
}
