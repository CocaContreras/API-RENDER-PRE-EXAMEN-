const express = require('express');
const router = express.Router();

const Departamento = require('../controllers/departamento.controller.js');

// Rutas para el controlador de Departamento
router.post('/api/departamentos/create', Departamento.create);
router.get('/api/departamentos/all', Departamento.findAll);
router.get('/api/departamentos/onebyid/:id', Departamento.findById);
router.put('/api/departamentos/update/:id', Departamento.update);
router.delete('/api/departamentos/delete/:id', Departamento.delete);

const Empleado = require('../controllers/empleado.controller.js');

// Rutas para el controlador de Empleado
router.post('/api/empleados/create', Empleado.create);
router.get('/api/empleados/all', Empleado.findAll);
router.get('/api/empleados/onebyid/:id', Empleado.findById);
router.put('/api/empleados/update/:id', Empleado.update);
router.delete('/api/empleados/delete/:id', Empleado.delete);


module.exports = router;
