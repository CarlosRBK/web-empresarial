import React, { useState } from "react";
import styles from "./styles/calcularEnvios.module.css";

const CalcularEnvios = () => {
  const [originCity, setOriginCity] = useState("");
  const [destinationCity, setDestinationCity] = useState("");
  const [quantity, setQuantity] = useState("");
  const [packageType, setPackageType] = useState("");
  const [value, setValue] = useState("");

  const citiesCoverage = {
    "Ruta 6": ["Ciudad del Este", "Santa Rita", "Maria Auxiliadora"],
    "Ruta 1": ["Asuncion", "Encarnacion", "San Juan Bautista", "San Ignacio"],
    "Ruta 2": ["Caaguazu", "Coronel Oviedo"],
  };

  const packageTypes = {
    "Caja chica": 25000,
    "Caja mediana": 30000,
    "Caja grande": 40000,
    Sobre: 25000,
  };

  const handleCalculate = () => {
    const routeFrom = getRoute(originCity);
    const routeTo = getRoute(destinationCity);
    const deliveryTime = calculateDeliveryTime(routeFrom, routeTo);
    const shippingCost = calculateShippingCost(packageType, value);
    const insuranceCost = calculateInsuranceCost(value);

    console.log("Costo de envío:", shippingCost, "Gs");
    console.log("Tiempo:", deliveryTime, "horas");
    console.log("Seguro:", insuranceCost, "Gs");
  };

  const getRoute = (city) => {
    for (const route in citiesCoverage) {
      if (citiesCoverage[route].includes(city)) {
        return route;
      }
    }
    return null;
  };
  const calculateDeliveryTime = (fromCity, toCity) => {
    const routeFrom = getRoute(fromCity);
    const routeTo = getRoute(toCity);

    if (!routeFrom || !routeTo) {
      return "No disponible";
    }

    if (routeFrom === routeTo) {
      return "24 horas";
    }

    const routesTriangle = [
      ["Ruta 6", "Ruta 1", "Ruta 2"],
      ["Ruta 1", "Ruta 2", "Ruta 6"],
      ["Ruta 2", "Ruta 6", "Ruta 1"],
    ];

    if (
      routesTriangle.some(
        (triangle) => triangle.includes(routeFrom) && triangle.includes(routeTo)
      )
    ) {
      return "48 horas";
    }

    return "No disponible"; // Agregar un valor predeterminado para otros casos
  };

  const calculateShippingCost = (packageType, value) => {
    const baseCost = packageTypes[packageType];
    return baseCost;
  };

  const calculateInsuranceCost = (value) => {
    const insuranceRate = 0.08;
    return parseFloat(value) * insuranceRate;
  };

  return (
    <div className={styles.formContainer}>
      {" "}
      <h2>Calcular costo de envío</h2>
      <label className={styles.labelInput}>
        <span className={styles.labelText}>DESDE</span>
      </label>
      <select
        className={styles.selectField}
        value={originCity}
        onChange={(e) => setOriginCity(e.target.value)}
      >
        <option value="">Selecciona</option>
        {Object.keys(citiesCoverage).map((route) =>
          citiesCoverage[route].map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))
        )}
      </select>
      <br />
      <label className={styles.labelInput}>
        <span className={styles.labelText}>HASTA</span>
      </label>
      <select
        className={styles.selectField}
        value={destinationCity}
        onChange={(e) => setDestinationCity(e.target.value)}
      >
        <option value="">Selecciona</option>
        {Object.keys(citiesCoverage).map((route) =>
          citiesCoverage[route].map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))
        )}
      </select>
      <br />
      <label className={styles.labelInput}>
        <span className={styles.labelText}>CANTIDAD</span>
      </label>
      <input
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        className={styles.inputField}
      />
      <br />
      <label className={styles.labelInput}>
        <span className={styles.labelText}>TIPO</span>
      </label>
      <select
        className={styles.selectField}
        value={packageType}
        onChange={(e) => setPackageType(e.target.value)}
      >
        <option value="">Selecciona</option>
        <option value="Caja chica">Caja chica</option>
        <option value="Caja mediana">Caja mediana</option>
        <option value="Caja grande">Caja grande</option>
        <option value="Sobre">Sobre</option>
      </select>
      <br />
      <label className={styles.labelInput}>
        <span className={styles.labelText}>VALOR (Gs):</span>
      </label>
      <input
        className={styles.inputField}
        type="number"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <br />
      <button className={styles.submitBtn} onClick={handleCalculate}>
        Calcular
      </button>
    </div>
  );
};

export default CalcularEnvios;
