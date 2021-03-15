import React, { Fragment, useState } from 'react';
import uuid from 'uuid/dist/v4';

const Formulario = () => {

    //Crear State de citas
    const [cita, actualizarCita] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
    }); 

    const [error, actualizarError] = useState(false);

    //Funcion que se ejecuta cada que el usuario escribe en un input
    const actualizarState = evento => {  //En evento se guardan los cambios del state
        actualizarCita({
            ...cita,
            [evento.target.name]: evento.target.value //escribir la informacion del input dentro de la propiedad que deba ser agregada
            //Basicamente, se hace una copia del objeto cita y se reescriben los datos en el campo que se esra escribiendo
        })
    }

    //Extraer los valores
    const { mascota, propietario, fecha, hora, sintomas } = cita;

    //Cuando el usuario presiona enviar cita
    const submitCita = evento => {
        evento.preventDefault(); //Cancela la opcion por default que es enviar el formulario

        //Validar
        if (mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === '') {
            //Trim Quita espacios en blanco
            actualizarError(true); 
            return; //Es importante el return para que no siga el flujo de ejecucion de la funcion.
        }

        //Eliminar mensaje de error
        actualizarError(false);

        //Asignar un id
        cita.id = uuid();
        console.log(cita);

        //Crear la cita

        //Reiniciar el form
    }

    return ( 
        <Fragment>
            <h2>Crear Cita</h2>
            { error ? <p className="alerta-error">Todos los campos son obligatorios</p> : null}
            <form
                onSubmit={submitCita}
            >
                <label>Nombre Mascota</label>
                <input
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre mascota"
                    onChange={actualizarState}
                    value={mascota}
                />

                <label>Nombre Propietario</label>
                <input
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre propietario mascota"
                    onChange={actualizarState}
                    value={propietario}
                />

                <label>Fecha</label>
                <input
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={fecha}   
                />

                <label>Hora</label>
                <input
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={hora}
                />

                <label>Sintomas</label>
                <textarea
                    className="u-full-width"
                    name="sintomas"
                    onChange={actualizarState}
                    value={sintomas}
                ></textarea>

                <button
                    type="submit"
                    className="u-full-width button-primary"
                >Agregar cita</button>
            </form>
        </Fragment>
     );
}
 
export default Formulario;