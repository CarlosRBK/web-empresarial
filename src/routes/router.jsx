import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
} from "react-router-dom";
import Home from "../pages/home";
import { Layout } from "../layout/Layout";

export default createBrowserRouter ([
    {
      path: "/",
      element: <Layout />,
      children:[
        {
          path:'/',
          element: <Home />
        },
      ]
    },
  ]);


