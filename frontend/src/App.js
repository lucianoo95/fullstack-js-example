import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Axios
import clientAxios from './config/axios';

// Componentes
import Patients from './components/Patients';
import NewAppointment from './components/NewAppointment';
import Appointment from './components/Appointment';

function App() {

  // State de la app
  const [appointments, saveAppointments] = useState([]);
  const [consult, saveConsult] = useState(true);

  useEffect(() => {
    if (consult) {
      const queryAPI = () => {
        clientAxios.get('/patients/list')
          .then(result => {
            // Colocar en el state el resultado
            saveAppointments(result.data);
            // Deshabilitar la consulta
            saveConsult(false);
          })
          .catch(error => console.log(error))
      }
      queryAPI();
    }
  }, [consult]);//El valor de los corchetes le dice a React que este pendiente
  //  de los cambios que se generen en el 'state' de 'consult'

  return (
    <Router>
      <Switch>
        {/* Routing */}
        <Route exact path="/" component={() => <Patients appointments={appointments} />} />
        <Route exact path="/new" component={() => <NewAppointment saveConsult={saveConsult} />} />
        <Route exact path="/appointment/:id"
          render={(props) => {

            const appointment = appointments.filter(item => item._id === props.match.params.id);
            // console.log(appointment);
            return (
              <Appointment appointment={appointment[0]}
                saveConsult={saveConsult}
              />
            )

          }} />

      </Switch>
    </Router>
  );
}

export default App;