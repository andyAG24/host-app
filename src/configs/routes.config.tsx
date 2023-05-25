import React from "react";
import ChartApp from "chart_app/ChartApp";
import CurrenciesApp from "currencies_app/CurrenciesApp";
import { RouteConfig } from "./routes.types";

export const routesConfig: RouteConfig[] = [
  {
    element: <ChartApp />,
    path: "/chart",
    title: "Chart",
  },
  {
    element: <CurrenciesApp />,
    path: "/currencies",
    title: "Currencies",
  },
];
