const db = require('../config/db.config.js');
const Departamento = db.Departamento;

// Crear un nuevo departamento
exports.create = (req, res) => {
    let departamento = {};

    try {
        departamento.id_departamento = req.body.id_departamento;
        departamento.descripcion = req.body.descripcion;

        Departamento.create(departamento).then(result => {
            res.status(200).json({
                message: "Uploaded successfully a departamento with id = " + result.id_departamento,
                departamento: result,
            });
        });
    } catch (error) {
        res.status(500).json({
            message: "Fail!",
            error: error.message
        });
    }
}

// Recuperar todos los departamentos
exports.findAll = (req, res) => {
    Departamento.findAll()
        .then(departamentos => {
            res.status(200).json({
                message: "Get all departamentos' Infos Successfully!",
                departamentos: departamentos
            });
        })
        .catch(error => {
            res.status(500).json({
                message: "Error!",
                error: error
            });
        });
}

// Encontrar un departamento por Id
exports.findById = (req, res) => {
    Departamento.findByPk(req.params.id)
        .then(departamento => {
            res.status(200).json({
                message: "Successfully retrieved a departamento with id = " + req.params.id,
                departamento: departamento
            });
        })
        .catch(error => {
            res.status(500).json({
                message: "Error!",
                error: error
            });
        });
}

// Actualizar un departamento por Id
exports.update = (req, res) => {
    let id = req.params.id;
    Departamento.update(req.body, { where: { id_departamento: id } })
        .then(() => {
            res.status(200).json({
                message: "Updated successfully a departamento with id = " + id
            });
        })
        .catch(error => {
            res.status(500).json({
                message: "Error -> Cannot update a departamento with id = " + id,
                error: error.message
            });
        });
}

// Eliminar un departamento por Id
exports.delete = (req, res) => {
    let id = req.params.id;
    Departamento.destroy({ where: { id_departamento: id } })
        .then(() => {
            res.status(200).json({
                message: "Deleted successfully a departamento with id = " + id
            });
        })
        .catch(error => {
            res.status(500).json({
                message: "Error -> Cannot delete a departamento with id = " + id,
                error: error.message
            });
        });
}

  