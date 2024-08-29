module.exports = (sequelize, Sequelize) => {
    const Cliente = sequelize.define('cliente', {
        id_cliente:{
            autoIncrement: true,
      type: Sequelize.INTEGER, 
      primaryKey: true,
      allowNull: false
        },
        nombre:{
            type: Sequelize.STRING,
        },
        apellido:{
            type: Sequelize.STRING,
        },
        razon_social:{
            type: Sequelize.STRING,
        },
        nit:{
            type: Sequelize.STRING(10),
        },
        direccion:{
            type: Sequelize.STRING,
        },
        telefono:{
            type: Sequelize.STRING,
        },
        email:{
            type: Sequelize.STRING,
        },
        fecha_ingreso: {
            type: Sequelize.DATE,
        },
        estatus: {
            type: Sequelize.INTEGER,
        }
    });

    return Cliente;
}