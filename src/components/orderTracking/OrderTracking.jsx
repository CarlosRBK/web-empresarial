import React, { useState } from 'react'
import style from './orderTracking.module.css'


const OrderTracking = ({ order, numeroDeRastreo }) => {

    let status;

    if (!order) {
        console.log(order)
        return <p>Cargando datos...</p>;
    }


    function definirEstado({ order }) {
        let estado = order.data.transport_status;
        if (estado === 1) {
            status = 'PENDIENTE DE BUSQUEDA'
            return status
        }
        else if (estado === 2) {
            status = 'RECOGIDO'
            return status
        }
        else if (estado === 3) {
            status = 'EN TRANSITO'
            return status
        }
        else if (estado === 4) {
            status = 'EN AGENCIA DE DESTINO'
            return status
        }
        else if (estado === 5) {
            status = 'ENTREGADO'
            return status
        }
    }

    definirEstado({ order })

    return (
            <div className={style.contenedor}>
                <div className={style.row}>
                    <div>
                        <ul className={style.trackBar}>
                            <li className={`${style.itemRastreo} 
                        ${order.data.transport_status === 1 ? style.activeButton : ""
                                }`}>
                                <i class="bi bi-journal-check"></i>
                                <p className={style.statusP}>PENDIENTE DE BUSQUEDA</p>
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
                            <h3>|</h3>
                            <h3>ORIGEN: <span className={style.resultTracking}>{order.data.origin_city}</span></h3>
                            <h3>|</h3>
                            <h3>DESTINO: <span className={style.resultTracking}>{order.data.destination_city}</span></h3>
                        </div>
                    </section>
                    <section>
                        <div className={style.footerTracking}>
                            <h3> DETALLES DE ENTREGA</h3>
                        </div>
                    </section>
                    <section className={style.titulo}>

                        <div className={style.tituloDetails}>
                            <h3>
                                RECIBIDO POR: <span className={style.resultTracking}>{order.data.receipt_sign_name}</span>
                            </h3>
                            <h3>
                                C.I: <span className={style.resultTracking}>{order.data.receipt_sign_ci}</span>
                            </h3>
                        </div>
                    </section>
                </div>
            </div>
    )
}

export default OrderTracking