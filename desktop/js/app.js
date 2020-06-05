// url api backend
const URL_API = 'http://localhost:4000';

const getPatients = async () => {
  const patients = await fetch(`${URL_API}/patients/list`);
  const results = await patients.json();
  return results;
}

const showAppointments = (appointments) => {
  const containerAppointments = document.querySelector('#appointments');
  let appointmentsHTML = '';

  appointments.forEach((appointment) => {
    appointmentsHTML += `<div class="p-4 list-group-item list-group-item-action flex-column align-items-start">
                            <div class="d-flex w-100 justify-content-between mb-3">
                              <h3 class="mb-3">${appointment.name}</h3>
                              <small class="fecha-alta">
                                ${appointment.date} - ${appointment.hour}
                              </small>
                            </div>
                            <p class="mb-0">${appointment.symptoms}</p>
                            <div class="contacto py-3">
                              <p>Dueño: ${appointment.owner}</p>
                              <p>Teléfono: ${appointment.cellphone}</p>
                            </div>
                          </div>`;
  });

  // Insertar html
  containerAppointments.innerHTML = appointmentsHTML;
}

getPatients()
  .then(response => showAppointments(response))
  .catch(error => console.log(error))

  console.log('Hola');
