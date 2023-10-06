import React, { useEffect, useState } from "react";
import axios from "axios";
import style from "./styles/tracking.module.css";
import OrderTracking from "./orderTracking/OrderTracking";
import { Link } from "react-router-dom";

const Tracking = () => {
  const [numeroDeBoleta, setNumeroDeBoleta] = useState("");
  const [order, setOrder] = useState({});
  const [orderIsValid, setOrderIsValid] = useState(false);
  const [OrderInvalid, setOrderInvalid] = useState(false);
  const [numeroDeRastreo, setNumeroDeRastreo] = useState(0);
  const [selectValue, setSelectValue] = useState("S-"); // Valor predeterminado "S-"

  const handleObtenerDatos = async (e) => {
    e.preventDefault();
    const apiUrl = `${import.meta.env.VITE_TRACKING_API}${selectValue}${numeroDeBoleta}.json`;
    try {
      const response = await axios.get(apiUrl);
      if (response.status === 200) {
        setNumeroDeRastreo(numeroDeBoleta);
        setOrder(response);
        setOrderIsValid(true);
        setOrderInvalid(false);
      }
    } catch (error) {
      setOrderInvalid(true);
    }
    console.log(orderIsValid)
  };

  const handleNumeroDeBoletaChange = (e) => {
    const newValue = e.target.value;
    const formattedValue = newValue.replace(/\D/g, ''); // Elimina caracteres no numéricos

    // Limita la entrada a 13 dígitos
    const limitedValue = formattedValue.slice(0, 13);

    // Aplicar el formateo con guiones automáticamente mientras el usuario escribe
    let formattedWithHyphens = '';
    for (let i = 0; i < limitedValue.length; i++) {
      formattedWithHyphens += limitedValue[i];
      if ((i === 2 || i === 5) && i < 12) {
        formattedWithHyphens += '-';
      }
    }

    setNumeroDeBoleta(formattedWithHyphens);
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
              <div className={style.inputGroup}>
                <select
                  value={selectValue}
                  onChange={(e) => setSelectValue(e.target.value)}
                  className={style.select}
                >
                  <option value="S-">S-</option>
                  <option value="C-">C-</option>
                </select>
                <input
                  type="text"
                  placeholder="N° DE LEVANTE"
                  value={numeroDeBoleta}
                  onChange={handleNumeroDeBoletaChange}
                  className={OrderInvalid ? style.inputError : style.input}
                />
              </div>
            ) : (
              <div className={style.inputGroup}>
                <select
                  value={selectValue}
                  onChange={(e) => setSelectValue(e.target.value)}
                  className={style.select}
                >
                  <option value="S-">S-</option>
                  <option value="C-">C-</option>
                </select>
                <input
                  type="text"
                  placeholder="N° DE LEVANTE"
                  value={numeroDeBoleta}
                  onChange={handleNumeroDeBoletaChange}
                  className={OrderInvalid ? style.inputError : style.input}
                />
              </div>
            )}
            <button type="submit" className={style.btn}>
              RASTREAR
            </button>
          </div>
          <div className={style.trackOpc}>
            <Link to={'/ayuda-rastreo'}>¿NECESITAS AYUDA?</Link>
          </div>
        </div>
      </form>
      <div className={style.contedorHidden}>
        {OrderInvalid ? (
          <div className={style.errorMsg}>
            <i className="bi bi-exclamation-triangle"> </i>
            <h3 >
              El número de boletano existe.{' '}
            </h3>
            <button type="button" onClick={orderInvalidChange} className={style.btnExit}>
              <i className="bi bi-x-lg"></i>
            </button>
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
