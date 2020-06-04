// Obtener modelo para interactuar con la bd
const Patient = require('../models/Patient');

// Cuando se CREA un nuevo cliente
exports.newPatient = async (request, response, next) => {

  const patient = new Patient(request.body);

  try {
    await patient.save();
    response.json({
      message: 'Se agrego un paciente!'
    });
  } catch (error) {
    console.log(error);
    next();
  }

}

// Obtener pacientes
exports.getAllPatients = async (request, response) => {

  try {
    const patients = await Patient.find();
    response.json(patients);
  } catch (error) {
    console.log(error);
    next();
  }

}

// Obtener paciente por ID 
exports.getOnePatient = async (request, response, next) => {
  // Obtener id de la url
  const id = request.params.id;

  try {
    const patient = await Patient.findById(id);
    response.json(patient);
  } catch (error) {
    console.log(error);
    next();
  }

}

// Actualizar un paciente (put)
exports.updatePatient = async (request, response, next) => {

  try {
    const patient = await Patient.findByIdAndUpdate({ _id: request.params.id }, request.body, {
      new: true
    });
    response.json(patient);
  } catch (error) {
    console.log(error);
    next();
  }

}

// Eliminar un paciente
exports.deletePatient = async (request, response, next) => {

  try {
    await Patient.findByIdAndDelete({ _id: request.params.id }, request.body);
    response.json({
      message: 'Se elimino el paciente de la bd'
    });
  } catch (error) {
    console.log(error);
    next();
  }

}

