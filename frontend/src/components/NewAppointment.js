import React, { Fragment, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import clientAxios from '../config/axios';

const NewAppointment = (props) => {

  // Generar state como objeto
  const [appointment, saveAppointment] = useState({
    name: '',
    owner: '',
    date: '',
    hour: '',
    cellphone: '',
    symptoms: ''
  })

  // Leer datos del form y cambiar el valor del state 'appointment '
  const updateState = (e) => {
    saveAppointment({
      ...appointment,
      [e.target.name]: e.target.value
    })
  }

  // Enviar peticion a la API
  const createNewAppointment = (e) => {
    e.preventDefault();

    // enviar peticion por axios
    clientAxios.post('/patients/create', appointment)
      .then(response => {
        console.log(response);
        // cambiar state de 'consult'
        props.saveConsult(true);
        // Redireccionar
        props.history.push('/');
      })
      .catch(error => console.log(error))
  }


  return (
    <Fragment>
      <h1 className="mt-1 mb-0">Administrador de Pacientes</h1>

      <div className="container mt-2 py-3">
        <div className="row">

          <div className="col-12 mb-5 d-flex justify-content-center">
            <Link to={'/'} className="btn btn-success text-uppercase py-2 px-5 font-weight-bold">
              Volver
            </Link>
          </div>

          <div className="col-md-8 mx-auto">
            <form onSubmit={createNewAppointment} className="bg-white p-3 bordered">
              <div className="form-group">
                <label htmlFor="name">Nombre Mascota</label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  id="name"
                  name="name"
                  placeholder="Nombre Mascota"
                  onChange={updateState}
                />
              </div>

              <div className="form-group">
                <label htmlFor="owner">Nombre Propietario</label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  id="owner"
                  name="owner"
                  placeholder="Nombre Propietario"
                  onChange={updateState}
                />
              </div>

              <div className="form-group">
                <label htmlFor="cellphone">Teléfono</label>
                <input
                  type="tel"
                  className="form-control form-control-lg"
                  id="cellphone"
                  name="cellphone"
                  placeholder="Teléfono"
                  onChange={updateState}
                />
              </div>

              <div className="form-group">
                <label htmlFor="date">Fecha Alta</label>
                <input
                  type="date"
                  className="form-control form-control-lg"
                  id="date"
                  name="date"
                  onChange={updateState}
                />
              </div>

              <div className="form-group">
                <label htmlFor="hour">Hora Alta</label>
                <input
                  type="time"
                  className="form-control form-control-lg"
                  id="hour"
                  name="hour"
                  onChange={updateState}
                />
              </div>

              <div className="form-group">
                <label htmlFor="symptoms">Síntomas</label>
                <textarea
                  className="form-control"
                  name="symptoms"
                  rows="6"
                  onChange={updateState}
                ></textarea>
              </div>

              <input type="submit" className="btn btn-primary mt-3 w-100 p-3 text-uppercase font-weight-bold" value="Crear Cita" />
            </form>
          </div>

        </div>
      </div>
    </Fragment>
  )
}

export default withRouter(NewAppointment);
