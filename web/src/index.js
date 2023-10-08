import React from "react";
import ReactDOM from "react-dom/client";
import { NextUIProvider } from "@nextui-org/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { QuestionnairesProvider } from "./context/questionnaires";

import ErrorPage from "./component/ErrorPage";
import Main from "./component/Main";

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <QuestionnairesProvider>
          <Main />
        </QuestionnairesProvider>
      </>
    ),
    errorElement: <ErrorPage />,
  },
]);

root.render(
  <NextUIProvider>
    <RouterProvider router={router} />
  </NextUIProvider>
);
