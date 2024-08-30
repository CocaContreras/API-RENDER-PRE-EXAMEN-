module.exports = (sequelize, Sequelize) => {
    const Factura = sequelize.define('factura', {
        id_factura:{
            autoIncrement: true,
            type: Sequelize.INTEGER, 
            primaryKey: true,
            allowNull: false
        },
        No_Factura:{
            type: Sequelize.INTEGER,
        },
        serie:{
            type: Sequelize.STRING,
        },
        id_cliente:{
            type: Sequelize.INTEGER,
        },
        fecha_factura:{
            type: Sequelize.DATE,
        }
    });

    return Factura;
}