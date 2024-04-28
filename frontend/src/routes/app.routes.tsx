import { HealthPage } from "@/pages/HealthPage";
import { RouteObject } from "react-router-dom";

export const appRoutes: RouteObject[] = [
  {
    path: "/",
    element: <HealthPage />,
  },
];
