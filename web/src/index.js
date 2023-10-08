import React from "react";
import ReactDOM from "react-dom/client";
import { NextUIProvider } from "@nextui-org/react";

import { QuestionnairesProvider } from "./context/questionnaires";

import Main from "./component/Main";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <NextUIProvider>
    <QuestionnairesProvider>
      <Main />
    </QuestionnairesProvider>
  </NextUIProvider>
);
