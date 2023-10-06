import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import styles from './ParaEmpresas.module.css'; // Importa los estilos desde tu archivo CSS Modules


const validationSchema = Yup.object().shape({
    nombreEmpresa: Yup.string().required('Campo requerido'),
    rutEmpresa: Yup.string().required('Campo requerido'),
    region: Yup.string().required('Campo requerido'),
    rubro: Yup.string().required('Campo requerido'),
    enviosMensuales: Yup.string().required('Campo requerido'),
    nombreContacto: Yup.string().required('Campo requerido'),
    apellidosContacto: Yup.string().required('Campo requerido'),
    correoElectronico: Yup.string().email('Correo electrónico inválido').required('Campo requerido'),
    telefono: Yup.string().required('Campo requerido'),
});

const ParaEmpresas = () => {
    const formik = useFormik({
        initialValues: {
            nombreEmpresa: '',
            rutEmpresa: '',
            region: '',
            rubro: '',
            enviosMensuales: '',
            nombreContacto: '',
            apellidosContacto: '',
            correoElectronico: '',
            telefono: '',
        },
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            try {
                await axios.post('https://api.sendgrid.com/v3/mail/send', {
                    personalizations: [
                        {
                            to: [{ email: 'destinatario@example.com' }], // Reemplaza esto con la dirección de correo del destinatario
                            subject: 'Nuevo formulario enviado desde ParaEmpresas',
                        },
                    ],
                    from: { email: 'remitente@example.com' }, // Reemplaza esto con la dirección de correo del remitente
                    content: [{ type: 'text/plain', value: JSON.stringify(values, null, 2) }],
                }, {
                    headers: {
                        'Authorization': 'Bearer TU_CLAVE_DE_API_SENDGRID', // Reemplaza esto con tu clave de API de SendGrid
                        'Content-Type': 'application/json',
                    },
                });
                alert('Correo enviado correctamente');
            } catch (error) {
                console.error('Error al enviar el correo', error);
            }
        },
    });

    return (
        <div className={styles.contenedor}>
            <div className={styles.subContenedor}>
                <div>
                    <h1>foto</h1>
                </div>
                <div>

                    <form className={styles.form} onSubmit={formik.handleSubmit}>
                        <div className={styles.formBlocks}>
                            <div className={styles.formGroup}>
                                <label className={styles.label} htmlFor="nombreEmpresa">Nombre Empresa (*)</label>
                                <input
                                    className={styles.input}
                                    id="nombreEmpresa"
                                    name="nombreEmpresa"
                                    type="text"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.nombreEmpresa}
                                />
                                {formik.touched.nombreEmpresa && formik.errors.nombreEmpresa ? (
                                    <div>{formik.errors.nombreEmpresa}</div>
                                ) : null}
                            </div>

                            <div className={styles.formGroup}>
                                <label className={styles.label} htmlFor="rutEmpresa">Rut Empresa (*)</label>
                                <input
                                    className={styles.input}
                                    id="rutEmpresa"
                                    name="rutEmpresa"
                                    type="text"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.rutEmpresa}
                                />
                                {formik.touched.rutEmpresa && formik.errors.rutEmpresa ? (
                                    <div>{formik.errors.rutEmpresa}</div>
                                ) : null}
                            </div>

                            <div className={styles.formGroup}>
                                <label className={styles.label} htmlFor="region">Región (*)</label>
                                <input
                                    className={styles.input}
                                    id="region"
                                    name="region"
                                    type="text"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.region}
                                />
                                {formik.touched.region && formik.errors.region ? (
                                    <div>{formik.errors.region}</div>
                                ) : null}
                            </div>

                            <div className={styles.formGroup}>
                                <label className={styles.label} htmlFor="rubro">Rubro (*)</label>
                                <input
                                    className={styles.input}
                                    id="rubro"
                                    name="rubro"
                                    type="text"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.rubro}
                                />
                                {formik.touched.rubro && formik.errors.rubro ? (
                                    <div>{formik.errors.rubro}</div>
                                ) : null}
                            </div>

                            <div className={styles.formGroup}>
                                <label className={styles.label} htmlFor="enviosMensuales">Envíos Mensuales (*)</label>
                                <input
                                    className={styles.input}
                                    id="enviosMensuales"
                                    name="enviosMensuales"
                                    type="text"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.enviosMensuales}
                                />
                                {formik.touched.enviosMensuales && formik.errors.enviosMensuales ? (
                                    <div>{formik.errors.enviosMensuales}</div>
                                ) : null}
                            </div>
                        </div>

                        <div className={styles.formBlocks}>

                            <div className={styles.formGroup}>
                                <label className={styles.label} htmlFor="nombreContacto">Nombre Contacto (*)</label>
                                <input
                                    className={styles.input}
                                    id="nombreContacto"
                                    name="nombreContacto"
                                    type="text"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.nombreContacto}
                                />
                                {formik.touched.nombreContacto && formik.errors.nombreContacto ? (
                                    <div>{formik.errors.nombreContacto}</div>
                                ) : null}
                            </div>


                            <div className={styles.formGroup}>
                                <label className={styles.label} htmlFor="apellidosContacto">Apellidos Contacto (*)</label>
                                <input
                                    className={styles.input}
                                    id="apellidosContacto"
                                    name="apellidosContacto"
                                    type="text"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.apellidosContacto}
                                />
                                {formik.touched.apellidosContacto && formik.errors.apellidosContacto ? (
                                    <div>{formik.errors.apellidosContacto}</div>
                                ) : null}
                            </div>

                            <div className={styles.formGroup}>
                                <label className={styles.label} htmlFor="correoElectronico">Correo Electrónico (*)</label>
                                <input
                                    className={styles.input}
                                    id="correoElectronico"
                                    name="correoElectronico"
                                    type="email"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.correoElectronico}
                                />
                                {formik.touched.correoElectronico && formik.errors.correoElectronico ? (
                                    <div>{formik.errors.correoElectronico}</div>
                                ) : null}
                            </div>

                            <div className={styles.formGroup}>
                                <label className={styles.label} htmlFor="telefono">Teléfono (*)</label>
                                <input
                                    className={styles.input}
                                    id="telefono"
                                    name="telefono"
                                    type="tel"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.telefono}
                                />
                                {formik.touched.telefono && formik.errors.telefono ? (
                                    <div>{formik.errors.telefono}</div>
                                ) : null}
                            </div>
                            <button className={styles.button} type="submit">Enviar</button>

                        </div>


                    </form>
                </div>
            </div>
        </div>


    );
};

export default ParaEmpresas;
