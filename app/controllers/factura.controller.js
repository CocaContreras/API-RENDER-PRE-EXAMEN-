const db = require('../config/db.config.js');
const Factura = db.Factura;

// Crear una nueva factura
exports.create = (req, res) => {
    let factura = {};

    try {
        factura.id_factura = req.body.id_factura;
        factura.No_Factura = req.body.No_Factura;
        factura.serie = req.body.serie;
        factura.id_cliente = req.body.id_cliente;
        factura.fecha_factura = req.body.fecha_factura;

        Factura.create(factura).then(result => {
            res.status(200).json({
                message: "Uploaded successfully a factura with id = " + result.id_factura,
                factura: result,
            });
        });
    } catch (error) {
        res.status(500).json({
            message: "Fail!",
            error: error.message
        });
    }
}

// Recuperar todas las facturas
exports.findAll = (req, res) => {
    Factura.findAll()
        .then(facturas => {
            res.status(200).json({
                message: "Get all facturas' Infos Successfully!",
                facturas: facturas
            });
        })
        .catch(error => {
            res.status(500).json({
                message: "Error!",
                error: error
            });
        });
}

// Encontrar una factura por Id
exports.findById = (req, res) => {
    Factura.findByPk(req.params.id)
        .then(factura => {
            res.status(200).json({
                message: "Successfully retrieved a factura with id = " + req.params.id,
                factura: factura
            });
        })
        .catch(error => {
            res.status(500).json({
                message: "Error!",
                error: error
            });
        });
}

// Actualizar una factura por Id
exports.update = (req, res) => {
    let id = req.params.id;
    Factura.update(req.body, { where: { id_factura: id } })
        .then(() => {
            res.status(200).json({
                message: "Updated successfully a factura with id = " + id
            });
        })
        .catch(error => {
            res.status(500).json({
                message: "Error -> Cannot update a factura with id = " + id,
                error: error.message
            });
        });
}

// Eliminar una factura por Id
exports.delete = (req, res) => {
    let id = req.params.id;
    Factura.destroy({ where: { id_factura: id } })
        .then(() => {
            res.status(200).json({
                message: "Deleted successfully a factura with id = " + id
            });
        })
        .catch(error => {
            res.status(500).json({
                message: "Error -> Cannot delete a factura with id = " + id,
                error: error.message
            });
        });
}
