const db = require('../config/db.config.js');
const Empleado = db.Empleado;

// Crear un nuevo empleado
exports.create = (req, res) => {
    let empleado = {};

    try {
        empleado.id_empleado = req.body.id_empleado;
        empleado.primer_nombre = req.body.primer_nombre;
        empleado.segundo_nombre = req.body.segundo_nombre;
        empleado.primer_apellido = req.body.primer_apellido;
        empleado.segundo_apellido = req.body.segundo_apellido;
        empleado.nit = req.body.nit;
        empleado.salario = req.body.salario;
        empleado.estatus = req.body.estatus;
        empleado.id_departamento = req.body.id_departamento;

        Empleado.create(empleado).then(result => {
            res.status(200).json({
                message: "Uploaded successfully an empleado with id = " + result.id_empleado,
                empleado: result,
            });
        });
    } catch (error) {
        res.status(500).json({
            message: "Fail!",
            error: error.message
        });
    }
}

// Recuperar todos los empleados
exports.findAll = (req, res) => {
    Empleado.findAll()
        .then(empleados => {
            res.status(200).json({
                message: "Get all empleados' Infos Successfully!",
                empleados: empleados
            });
        })
        .catch(error => {
            res.status(500).json({
                message: "Error!",
                error: error
            });
        });
}

// Encontrar un empleado por Id
exports.findById = (req, res) => {
    Empleado.findByPk(req.params.id)
        .then(empleado => {
            res.status(200).json({
                message: "Successfully retrieved an empleado with id = " + req.params.id,
                empleado: empleado
            });
        })
        .catch(error => {
            res.status(500).json({
                message: "Error!",
                error: error
            });
        });
}

// Actualizar un empleado por Id
exports.update = (req, res) => {
    let id = req.params.id;
    Empleado.update(req.body, { where: { id_empleado: id } })
        .then(() => {
            res.status(200).json({
                message: "Updated successfully an empleado with id = " + id
            });
        })
        .catch(error => {
            res.status(500).json({
                message: "Error -> Cannot update an empleado with id = " + id,
                error: error.message
            });
        });
}

/// Eliminar un empleado por Id
exports.delete = (req, res) => {
    let id = req.params.id;
    Empleado.destroy({ where: { id_empleado: id } })
        .then(() => {
            res.status(200).json({
                message: "Deleted successfully an empleado with id = " + id
            });
        })
        .catch(error => {
            res.status(500).json({  // Aquí estaba el error, faltaba un punto
                message: "Error -> Cannot delete an empleado with id = " + id,
                error: error.message
            });
        });
}
