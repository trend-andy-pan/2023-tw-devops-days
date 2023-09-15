import React from "react";
import { Checkbox, Input } from "@nextui-org/react";

export const QuestionCheckboxOthers = ({ answers }) => {
  return (
    <div
      key={`${answers}-other-radio`}
      className="flex gap-4 p-4 cursor-pointer rounded-lg gap-4 p-4 border-2 border-transparent border-transparent bg-content1 hover:bg-content4 flex-row-reverse"
    >
      <Checkbox className="flex-none" value="other" size="lg"></Checkbox>
      <Input className="grow" label="其他" />
    </div>
  );
};
