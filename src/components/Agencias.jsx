import React, { useState } from "react";
import data from "../data/agencias.json";
import styles from "../components/styles/agencias.module.css";

const Agencias = () => {
  const [selectedCity, setSelectedCity] = useState("");
  const selectedAgencia = data.find(
    (agencia) => agencia.ciudad === selectedCity
  );

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

  return (
    <div className={styles.selectContainer}>

        <h3>Selecciones una agencia para obtener mas información</h3>
        <select
          className={styles.citySelect}
          onChange={handleCityChange}
          value={selectedCity}
        >
          <option value="">SELECCIONE UNA AGENCIA</option>
          {data.map((agencia) => (
            <option key={agencia.id} value={agencia.ciudad}>
              {agencia.ciudad}
            </option>
          ))}
        </select>
        {selectedAgencia && (
          <div className={styles.contactoContainer}>
            <div className={styles.encabezado}>
              <p>NUMERO DE CONTACTO:</p>
              <p>DIRECCION:</p>
            </div>
            <div className={styles.contactoInfo}>
              <p>+595 {selectedAgencia.numero_contacto}</p>
              <p>{selectedAgencia.direccion.toUpperCase()}</p>
            </div>
          </div>
        )}

    </div>
  );
};

export default Agencias;
