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

const Cliente = require('../controllers/cliente.controller.js');

// Rutas para el controlador de Cliente

router.post('/api/clientes/create', Cliente.create);
router.get('/api/clientes/all', Cliente.findAll);
router.get('/api/clientes/onebyid/:id', Cliente.findById);
router.put('/api/clientes/update/:id', Cliente.update);
router.delete('/api/clientes/delete/:id', Cliente.delete);

const Proveedor = require('../controllers/proveedor.controller.js');

// Rutas para el controlador de Proveedor

router.post('/api/proveedores/create', Proveedor.create);
router.get('/api/proveedores/all', Proveedor.findAll);
router.get('/api/proveedores/onebyid/:id', Proveedor.findById);
router.put('/api/proveedores/update/:id', Proveedor.update);
router.delete('/api/proveedores/delete/:id', Proveedor.delete);

const Producto = require('../controllers/producto.controller.js');

// Rutas para el controlador de Producto

router.post('/api/productos/create', Producto.create);
router.get('/api/productos/all', Producto.findAll);
router.get('/api/productos/onebyid/:id', Producto.findById);
router.put('/api/productos/update/:id', Producto.update);
router.delete('/api/productos/delete/:id', Producto.delete);


const Factura = require('../controllers/factura.controller.js');

// Rutas para el controlador de Factura

router.post('/api/facturas/create', Factura.create);
router.get('/api/facturas/all', Factura.findAll);
router.get('/api/facturas/onebyid/:id', Factura.findById);
router.put('/api/facturas/update/:id', Factura.update);
router.delete('/api/facturas/delete/:id', Factura.delete);

const Factura_detalle = require('../controllers/factura_detalle.controller.js');

// Rutas para el controlador de Factura_detalle

router.post('/api/factura_detalle/create', Factura_detalle.create);
router.get('/api/factura_detalle/all', Factura_detalle.findAll);
router.get('/api/factura_detalle/onebyid/:id', Factura_detalle.findById);
router.put('/api/factura_detalle/update/:id', Factura_detalle.update);
router.delete('/api/factura_detalle/delete/:id', Factura_detalle.delete);

module.exports = router;
