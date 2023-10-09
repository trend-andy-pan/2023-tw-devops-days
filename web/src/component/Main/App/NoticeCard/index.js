import React from "react";
import { Card, CardHeader } from "@nextui-org/react";
import { PiWarningOctagonDuotone } from "react-icons/pi";

export default function NoticeCard({ step }) {
  return (
    <Card className={`flex-0 w-full mb-6 bg-warning/20 text-warning-600`}>
      <CardHeader className="flex gap-3">
        <PiWarningOctagonDuotone className="w-8 h-8" />
        <p className="text-lg">
          注意：此問卷已停止收集，感謝您的參與！此頁面僅供學術研究用途，如有任何疑問請洽趨勢科技。
        </p>
      </CardHeader>
    </Card>
  );
}
