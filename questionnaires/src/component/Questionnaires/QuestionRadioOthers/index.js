import React from "react";
import { Radio, Input } from "@nextui-org/react";

export const QuestionRadioOthers = ({ answers }) => {
  return (
    <div
      key={`${answers}-other-radio`}
      className="flex gap-4 p-4 cursor-pointer rounded-lg gap-4 p-4 border-2 border-transparent border-transparent bg-content1 hover:bg-content4 flex-row-reverse"
    >
      <Radio className="flex-none" value="other" size="lg"></Radio>
      <Input className="grow" label="其他" />
    </div>
  );
};
