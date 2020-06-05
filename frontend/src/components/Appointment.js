import React, { Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import clientAxios from '../config/axios';
import Swal from 'sweetalert2';

const Appointment = (props) => {

  if (!props.appointment) {
    props.history.push('/');
    return null;
  }

  // extraer por cita
  const { appointment: { _id, name, owner, date, hour, cellphone, symptoms }, saveConsult } = props;

  // eliminar un registro
  const deleteAppointment = (id) => {

    Swal.fire({
      title: '¿Estas seguro?',
      text: "Una cita eliminada no se puede recuperar",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {

        // Alerta de eliminado
        Swal.fire(
          'Eliminado!',
          'La cita fue eliminada',
          'success'
        )

        // Eliminado de la base de datos
        clientAxios.delete(`/patients/delete/${id}`)
          .then(response => {
            console.log(response.data);
            saveConsult(true);
            // Redireccionar
            props.history.push('/');
          })
          .catch(error => console.log(error))
      }
    })
  }


  return (
    <Fragment>
      <h1 className="my-5">Nombre cita: {name}</h1>

      <div className="container mt-2 py-3">
        <div className="row">

          <div className="col-12 mb-5 d-flex justify-content-center">
            <Link to={'/'} className="btn btn-success text-uppercase py-2 px-5 font-weight-bold">
              Volver
            </Link>
          </div>

          <div className="col-md-8 mx-auto">
            <div className="list-group">
              <div className="p-4 list-group-item list-group-item-action flex-column align-items-center">
                <div className="d-flex w-100 justify-content-between mb-3">
                  <h3 className="mb-3">{name}</h3>
                  <small className="fecha-alta">
                    {date} - {hour}
                  </small>
                </div>
                <p className="mb-0">
                  {symptoms}
                </p>
                <div className="contacto py-3">
                  <p>Dueño: {owner}</p>
                  <p>Teléfono: {cellphone}</p>
                </div>

                <div className="d-flex">
                  <button type="button"
                    className="text-uppercase py-2 px-5 font-weigth-bold btn btn-danger col"
                    onClick={() => deleteAppointment(_id)}>
                    Eliminar &times;
                  </button>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </Fragment>
  )
}

export default withRouter(Appointment);
