import React, { useEffect, useState } from 'react'
import style from './orderTracking.module.css'
import Maps from '../googleMaps/Maps';
import { useNavigate } from "react-router-dom";

const OrderTracking = ({ order, numeroDeRastreo }) => {

    const [seEntrego, setseEntrego] = useState(false)
    const [lat, setLat] = useState(0);
    const [lng, setLng] = useState(0);
    const [status, setStatus] = useState('');
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const navigate = useNavigate();
    window.addEventListener("resize", () => {
        setIsMobile(window.innerWidth < 768);
    });
    useEffect(() => {
        definirEstado({ order })
    }, [])

    const fechaUTC = order.data.delivery_time;
    const fechaFormateada = convertirFechaHora(fechaUTC);

    function convertirFechaHora(fechaUTC) {
        const fecha = new Date(fechaUTC);

        // Obtener los componentes de la fecha y hora en UTC
        const diaUTC = fecha.getUTCDate();
        const mesUTC = fecha.getUTCMonth() + 1; // Los meses van de 0 a 11
        const añoUTC = fecha.getUTCFullYear();
        const horaUTC = fecha.getUTCHours();
        const minutosUTC = fecha.getUTCMinutes();

        // Convertir la hora UTC a la hora local de Paraguay (UTC -3)
        const horaLocal = horaUTC - 3;
        const horaParaguay = horaLocal < 0 ? horaLocal + 24 : horaLocal;

        // Formatear la fecha y hora en el formato deseado para Paraguay
        const fechaFormateada = `${diaUTC.toString().padStart(2, '0')}/${mesUTC.toString().padStart(2, '0')}/${añoUTC} ${horaParaguay.toString().padStart(2, '0')}:${minutosUTC.toString().padStart(2, '0')}`;

        return fechaFormateada;
    }


    if (!order) {
        return <p>Cargando datos...</p>;
    }

    function isValidNumber(num) {
        return typeof num === 'number' && !isNaN(num) && isFinite(num);
    }

    function definirEstado({ order }) {
        let estado = order.data.transport_status;
        if (estado === 1) {
            setStatus('PENDIENTE');
            setLat(null); // Asignar un valor nulo a lat
            setLng(null); // Asignar un valor nulo a lng
            setseEntrego(false); //
        }
        else if (estado === 2) {
            setStatus('RECOGIDO')
            setLat(null); // Asignar un valor nulo a lat
            setLng(null); // Asignar un valor nulo a lng
            setseEntrego(false)
        }
        else if (estado === 3) {
            setStatus('EN TRANSITO')
            setLat(null); // Asignar un valor nulo a lat
            setLng(null); // Asignar un valor nulo a lng
            setseEntrego(false)
        }
        else if (estado === 4) {
            setStatus('EN AGENCIA DE DESTINO')
            setLat(null); // Asignar un valor nulo a lat
            setLng(null); // Asignar un valor nulo a lng
            setseEntrego(false)
        }
        else if (estado === 5) {
            setStatus('ENTREGADO')
            setLat(parseFloat(order.data.receipt_latitude))
            setLng(parseFloat(order.data.receipt_longitude))
            setseEntrego(true)
        }
        else {
            console.log('error: ESTADO NO IDENTIFICADO.')
        }

    }

    function MapRedirect() {
        if (isValidNumber(lat) && isValidNumber(lng)) {
            window.open(`https://www.google.com/maps?q=${lat},${lng}`);
        } else {
            console.log('Coordenadas inválidas.');
        }
    }



    return (
        <div className={style.contenedor}>
            <div className={style.row}>
                <div className={style.contenedorDeTracking}>
                    <div className={style.footerTracking}>
                        <h3> ESTADO DEL PAQUETE </h3>
                    </div>
                    {isMobile ? (
                        <section className={style.titulo}>
                            <div className={style.tituloDetails}>
                                <li className={style.itemRastreo}>
                                    <p className={style.statusP}>{status}</p>
                                </li>
                            </div>
                        </section>
                    ) : (
                        <ul className={style.trackBar}>
                            <li className={`${style.itemRastreo} 
                        ${order.data.transport_status === 1 ? style.activeButton : ""
                                }`}>
                                <i class="bi bi-journal-check"></i>
                                <p className={style.statusP}>PENDIENTE</p>
                            </li>
                            <li className={style.separador}>

                            </li>
                            <li className={`${style.itemRastreo} 
                        ${order.data.transport_status === 2 ? style.activeButton : ""
                                }`}>
                                <i class="bi bi-box-seam-fill"></i>
                                <p className={style.statusP}>RECOGIDO</p>
                            </li>
                            <li className={style.separador}>

                            </li>
                            <li className={`${style.itemRastreo} 
                        ${order.data.transport_status === 3 ? style.activeButton : ""
                                }`}>
                                <i class="bi bi-truck"></i>
                                <p className={style.statusP}>EN TRANSITO</p>
                            </li>
                            <li className={style.separador}>

                            </li>
                            <li className={`${style.itemRastreo} 
                        ${order.data.transport_status === 4 ? style.activeButton : ""
                                }`}>
                                <i class="bi bi-house-door-fill"></i>
                                <p className={style.statusP}>EN AGENCIA DE DESTINO</p>
                            </li>
                            <li className={style.separador}>

                            </li>
                            <li className={`${style.itemRastreo} 
                        ${order.data.transport_status === 5 ? style.activeButton : ""
                                }`}>
                                <i class="bi bi-check-circle-fill"></i>
                                <p className={style.statusP}>ENTREGADO</p>
                            </li>
                        </ul>
                    )}
                </div>
                <section>
                    <div className={style.footerTracking}>
                        <h3> DETALLES </h3>
                    </div>
                </section>
                <section className={style.titulo}>
                    <div className={style.tituloDetails}>
                        <h3>NUMERO DE RASTREO: <span className={style.resultTracking}>
                            {numeroDeRastreo}</span></h3>
                        <h3>ORIGEN: <span className={style.resultTracking}>{order.data.origin_city}</span></h3>
                        <h3>DESTINO: <span className={style.resultTracking}>{order.data.destination_city}</span></h3>
                    </div>
                </section>


                {seEntrego ? (
                    <div>

                        <section>
                            <div className={style.footerTracking}>
                                <h3> DETALLES DE ENTREGA</h3>
                            </div>
                        </section>
                        <section>
                            <div className={style.tituloDetails}>
                                <h3>
                                    RECIBIDO POR: <span className={style.resultTracking}>{order.data.receipt_sign_name}</span>
                                </h3>
                                <h3>
                                    C.I: <span className={style.resultTracking}>{order.data.receipt_sign_ci}</span>
                                </h3>
                                <h3>
                                    FECHA: <span className={style.resultTracking}>{fechaFormateada} Hrs.</span>
                                </h3>
                            </div>
                        </section>
                        <section className={style.entregaDetalles}>
                            <div>
                                {isValidNumber(lat) && isValidNumber(lng) ? (
                                    <div className={style.contenedorBtnMap}>
                                        <button className={style.btn} onClick={MapRedirect}>Ver ubicación de entrega</button>
                                    </div>
                                ) : (
                                    <div>Coordenadas inválidas.</div>
                                )}
                            </div>
                        </section>
                    </div>
                ) : (
                    <></>
                )}
            </div>
        </div>
    )
}

export default OrderTracking