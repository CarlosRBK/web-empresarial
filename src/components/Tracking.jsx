import React, { useState } from "react";
import axios from "axios";
import style from "./styles/tracking.module.css";

const Tracking = () => {
  const [numeroDeBoleta, setNumeroDeBoleta] = useState("");

  const handleObtenerDatos = async (e) => {
    e.preventDefault();

    const apiUrl = `${import.meta.env.VITE_TRACKING_API}${numeroDeBoleta}.json`;

    try {
      const response = await axios.get(apiUrl);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleNumeroDeBoletaChange = (e) => {
    setNumeroDeBoleta(e.target.value);
  };

  return (
    <div className={style.container}>
      <form onSubmit={handleObtenerDatos}>
        <div className={style.row}>
          <input
            type="text"
            placeholder="N° DE LEVANTE"
            value={numeroDeBoleta}
            onChange={handleNumeroDeBoletaChange}
            className={style.input}
          />
          <button type="submit" className={style.btn}>
            RASTREAR
          </button>
        </div>
        <div className={style.trackOpc}>
          <h4><span>MULTIPLES RASTREOS</span> | <span><a href="#">¿NECESITAS AYUDA?</a></span></h4>
        </div>
      </form>
    </div>
  );
};

export default Tracking;
