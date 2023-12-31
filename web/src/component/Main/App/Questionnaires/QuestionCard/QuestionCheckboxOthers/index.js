import React, { useContext, useImperativeHandle, useState } from "react";
import { Checkbox, Input } from "@nextui-org/react";
import QuestionnairesContext from "../../../../../../context/questionnaires";

export const QuestionCheckboxOthers = ({ step, name, radioCheckboxRef }) => {
  const [dataSelected, setDataSelected] = useState(false);

  const [checkboxValue, setCheckboxValue] = useState("其他");

  const {
    ctxValue: {
      questionsForm: { setValue, getValues },
    },
  } = useContext(QuestionnairesContext);

  useImperativeHandle(radioCheckboxRef, () => ({
    updateSelect: () => {
      setDataSelected(getValues(name).includes(checkboxValue));
    },
  }));

  const handleChange = (e) => {
    const prevValue = getValues(name);

    const existIdx = prevValue.indexOf(checkboxValue);
    if (existIdx !== -1) prevValue.splice(existIdx, 1);

    setValue(name, [...prevValue, e.target.value]);
    setCheckboxValue(e.target.value);

    setDataSelected(true);

    e.stopPropagation();
  };

  const handleCheckboxChange = (e) => {
    radioCheckboxRef.current.updateSelect();
  };

  const handleClick = () => {
    const nextValue = getValues(name);

    const existIdx = nextValue.indexOf(checkboxValue);
    if (existIdx !== -1) {
      nextValue.splice(existIdx, 1);
    } else {
      nextValue.push(checkboxValue);
    }

    setValue(name, nextValue);

    radioCheckboxRef.current.updateSelect();
  };

  return (
    <div
      data-selected={dataSelected}
      key={`${step}-other-checkbox`}
      onClick={handleClick}
      className="flex gap-4 p-4 cursor-pointer rounded-lg gap-4 p-4 border-2 border-transparent border-transparent bg-content1 hover:bg-content4 flex-row-reverse border-2 border-transparent data-[selected=true]:border-primary"
    >
      <Checkbox
        className="flex-none"
        value={checkboxValue}
        size="lg"
        onChange={handleCheckboxChange}
      />
      <Input
        className="grow other-input"
        labelPlacement="outside-left"
        label="其他"
        onChange={handleChange}
      />
    </div>
  );
};
