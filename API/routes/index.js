const router = require('express').Router();
const patientController = require('../controllers/patientController');

// Agregar nuevos pacientes (post)
router.post('/patients/create', patientController.newPatient);

// Obtener todos los pacientes (get)
router.get('/patients/list', patientController.getAllPatients);

// Obtener un paciente por ID (get)
router.get('/patients/list/:id', patientController.getOnePatient);

// Modificar paciente (put)
router.put('/patients/update/:id', patientController.updatePatient);

// Eliminar un paciente (delete)
router.delete('/patients/delete/:id', patientController.deletePatient);

module.exports = router;