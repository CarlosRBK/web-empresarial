import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
} from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../layout/Layout";
import SobreNosotros from "../pages/SobreNosotros";
import ParaEmpresas from "../components/empresas/ParaEmpresas";
import PaginaEnConstruccion from "../pages/PaginaEnConstruccion";
import Maps from "../components/googleMaps/Maps";
import AyudaRastreo from "../pages/AyudaRastreo";

export default createBrowserRouter ([
    {
      path: "/",
      element: <Layout />,
      children:[
        {
          path:'/',
          element: <Home />
        },
        {
          path:'/nosotros',
          element: <SobreNosotros />
        },
        {
          path:'/para-empresas',
          element: <ParaEmpresas />
        },
        {
          path:'/construccion',
          element: <PaginaEnConstruccion />
        },
        {
          path:'/ayuda-rastreo',
          element: <AyudaRastreo />
        },
      ]
      
    },
  ]);


