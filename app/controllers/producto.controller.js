const db = require('../config/db.config.js');
const Producto = db.Producto;

// Crear un nuevo producto
exports.create = (req, res) => {
    let producto = {};

    try {
        producto.id_producto = req.body.id_producto;
        producto.descripcion = req.body.descripcion;
        producto.stock = req.body.stock;
        producto.stock_minimo = req.body.stock_minimo;
        producto.precio_unitario = req.body.precio_unitario;

        Producto.create(producto).then(result => {
            res.status(200).json({
                message: "Uploaded successfully a producto with id = " + result.id_producto,
                producto: result,
            });
        });
    } catch (error) {
        res.status(500).json({
            message: "Fail!",
            error: error.message
        });
    }
}

// Recuperar todos los productos
exports.findAll = (req, res) => {
    Producto.findAll()
        .then(productos => {
            res.status(200).json({
                message: "Get all productos' Infos Successfully!",
                productos: productos
            });
        })
        .catch(error => {
            res.status(500).json({
                message: "Error!",
                error: error
            });
        });
}

// Encontrar un producto por Id
exports.findById = (req, res) => {
    Producto.findByPk(req.params.id)
        .then(producto => {
            res.status(200).json({
                message: "Successfully retrieved a producto with id = " + req.params.id,
                producto: producto
            });
        })
        .catch(error => {
            res.status(500).json({
                message: "Error!",
                error: error
            });
        });
}

// Actualizar un producto por Id
exports.update = (req, res) => {
    let id = req.params.id;
    Producto.update(req.body, { where: { id_producto: id } })
        .then(() => {
            res.status(200).json({
                message: "Updated successfully a producto with id = " + id
            });
        })
        .catch(error => {
            res.status(500).json({
                message: "Error -> Cannot update a producto with id = " + id,
                error: error.message
            });
        });
}

// Eliminar un producto por Id
exports.delete = (req, res) => {
    let id = req.params.id;
    Producto.destroy({ where: { id_producto: id } })
        .then(() => {
            res.status(200).json({
                message: "Deleted successfully a producto with id = " + id
            });
        })
        .catch(error => {
            res.status(500).json({
                message: "Error -> Cannot delete a producto with id = " + id,
                error: error.message
            });
        });
}
