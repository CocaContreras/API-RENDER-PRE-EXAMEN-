module.exports = (sequelize, Sequelize) => {
    const Producto = sequelize.define('producto', {
        id_producto:{
            autoIncrement: true,
            type: Sequelize.INTEGER, 
            primaryKey: true,
            allowNull: false
        },
        descripcion:{
            type: Sequelize.STRING,
        },
        stock:{
            type: Sequelize.INTEGER,
        },
        stock_minimo:{
            type: Sequelize.INTEGER,
        },
        precio_unitario:{
            type: Sequelize.FLOAT,
        }
    });

    return Producto;
}