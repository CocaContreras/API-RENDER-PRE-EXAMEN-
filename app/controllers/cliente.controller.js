const db = require('../config/db.config.js');
const Cliente = db.Cliente;

// Crear un nuevo cliente
exports.create = (req, res) => {
    let cliente = {};

    try {
        cliente.id_cliente = req.body.id_cliente;
        cliente.nombre = req.body.nombre;
        cliente.apellido = req.body.apellido;
        cliente.razon_social = req.body.razon_social;
        cliente.nit = req.body.nit;
        cliente.direccion = req.body.direccion;
        cliente.telefono = req.body.telefono;
        cliente.email = req.body.email;
        cliente.fecha_ingreso = req.body.fecha_ingreso;
        cliente.estatus = req.body.estatus;

        Cliente.create(cliente).then(result => {
            res.status(200).json({
                message: "Uploaded successfully a cliente with id = " + result.id_cliente,
                cliente: result,
            });
        });
    } catch (error) {
        res.status(500).json({
            message: "Fail!",
            error: error.message
        });
    }
}

// Recuperar todos los clientes
exports.findAll = (req, res) => {
    Cliente.findAll()
        .then(clientes => {
            res.status(200).json({
                message: "Get all clientes' Infos Successfully!",
                clientes: clientes
            });
        })
        .catch(error => {
            res.status(500).json({
                message: "Error!",
                error: error
            });
        });
}

// Encontrar un cliente por Id
exports.findById = (req, res) => {
    Cliente.findByPk(req.params.id)
        .then(cliente => {
            res.status(200).json({
                message: "Successfully retrieved a cliente with id = " + req.params.id,
                cliente: cliente
            });
        })
        .catch(error => {
            res.status(500).json({
                message: "Error!",
                error: error
            });
        });
}

// Actualizar un cliente por Id
exports.update = (req, res) => {
    let id = req.params.id;
    Cliente.update(req.body, { where: { id_cliente: id } })
        .then(() => {
            res.status(200).json({
                message: "Updated successfully a cliente with id = " + id
            });
        })
        .catch(error => {
            res.status(500).json({
                message: "Error -> Cannot update a cliente with id = " + id,
                error: error.message
            });
        });
}

// Eliminar un cliente por Id
exports.delete = (req, res) => {
    let id = req.params.id;
    Cliente.destroy({ where: { id_cliente: id } })
        .then(() => {
            res.status(200).json({
                message: "Deleted successfully a cliente with id = " + id
            });
        })
        .catch(error => {
            res.status(500).json({
                message: "Error -> Cannot delete a cliente with id = " + id,
                error: error.message
            });
        });
}
