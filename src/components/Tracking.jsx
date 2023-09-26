import React, { useEffect, useState } from "react";
import axios from "axios";
import style from "./styles/tracking.module.css";
import OrderTracking from "./orderTracking/OrderTracking";

const Tracking = () => {
  const [numeroDeBoleta, setNumeroDeBoleta] = useState("");
  const [order, setOrder] = useState({})
  const [orderIsValid, setOrderIsValid] = useState(false);
  const [OrderInvalid, setOrderInvalid] = useState(false);
  const [numeroDeRastreo, setNumeroDeRastreo] = useState(0);


  const handleObtenerDatos = async (e) => {
    e.preventDefault();


    const apiUrl = `${import.meta.env.VITE_TRACKING_API}${numeroDeBoleta}`;
    try {
      const response = await axios.get(apiUrl);
      if (response.status === 200) {
        console.log(response)
        setNumeroDeRastreo(numeroDeBoleta);
        setOrder(response);
        setOrderIsValid(true);
        setOrderInvalid(false);
      }
    } catch (error) {
      if (error.response.status === 404) {
        setOrderInvalid(true);
        console.log(error.message)
      }
    }
  };

  const handleNumeroDeBoletaChange = (e) => {
    setNumeroDeBoleta(e.target.value);
  };

  const orderInvalidChange = () => {
    setOrderInvalid(false); // Cambia el estado a false para ocultar el div
  }

  return (
    <div className={style.container}>
      <form onSubmit={handleObtenerDatos}>
        <div className={style.row}>
          <div className={style.inputTrack}>

            {OrderInvalid ? (

              <input
                type="text"
                placeholder="N° DE LEVANTE"
                value={numeroDeBoleta}
                onChange={handleNumeroDeBoletaChange}
                className={style.inputError}
              />
            ) : (
              <input
                type="text"
                placeholder="N° DE LEVANTE"
                value={numeroDeBoleta}
                onChange={handleNumeroDeBoletaChange}
                className={style.input}
              />)}

            <button type="submit" className={style.btn}>
              RASTREAR
            </button>
          </div>
          <div className={style.trackOpc}>
            <a href="#">¿NECESITAS AYUDA?</a>
            {/* <h4><span>MULTIPLES RASTREOS</span> | <span><a href="#">¿NECESITAS AYUDA?</a></span></h4> */}
          </div>

        </div>


      </form>
      <div className={style.contedorHidden}>
        {OrderInvalid ? (
          <div className={style.errorMsg}>
            <h3 >
              <i className="bi bi-exclamation-triangle"></i> El número de boleta no existe.{' '}
              <button type="button" onClick={orderInvalidChange} className={style.btnExit}>
                <i className="bi bi-x-lg"></i>
              </button>
            </h3>
          </div>
        ) : (
          ''
        )}
        {orderIsValid ? (
          <div className={style.contenedorHidden}>
            <OrderTracking order={order} numeroDeRastreo={numeroDeRastreo} />
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default Tracking;
