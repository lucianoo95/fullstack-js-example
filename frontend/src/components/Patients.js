import React, { Fragment } from 'react';
import { Link } from 'react-router-dom'


const Patients = ({ appointments }) => {
  if (appointments.length === 0) return null;

  return (
    <Fragment>
      <h1 className="mt-1 mb-0">Administrador de Pacientes</h1>

      <div className="container mt-2 py-3">
        <div className="row">

          <div className="col-12 mb-5 d-flex justify-content-center">
            <Link to={'/new'} className="btn btn-success text-uppercase py-2 px-5 font-weight-bold">
              Crear cita
            </Link>
          </div>

          <div className="col-md-8 mx-auto">
            <div className="list-group">

              {appointments.map(appointment => (
                <Link to={`/appointment/${appointment._id}`}
                  key={appointment._id} className="p-4 list-group-item list-group-item-action flex-column align-items-start">
                  <div className="d-flex w-100 justify-content-between mb-3">
                    <h3 className="mb-3">{appointment.name}</h3>
                    <small className="fecha-alta">
                      {appointment.date} - {appointment.hour}
                    </small>
                  </div>
                  <p className="mb-0">
                    {appointment.symptoms}
                  </p>
                  <div className="contacto py-3">
                    <p>Dueño: {appointment.owner}</p>
                    <p>Teléfono: {appointment.cellphone}</p>
                  </div>
                </Link>
              ))}

            </div>
          </div>

        </div>
      </div>
    </Fragment>
  )
}

export default Patients;
