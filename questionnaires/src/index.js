import React from "react";
import ReactDOM from "react-dom/client";
import { NextUIProvider } from "@nextui-org/react";

import App from "./App";
import { QuestionnairesProvider } from "./context/questionnaires";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <NextUIProvider>
    <QuestionnairesProvider>
      <App />
    </QuestionnairesProvider>
  </NextUIProvider>
);
