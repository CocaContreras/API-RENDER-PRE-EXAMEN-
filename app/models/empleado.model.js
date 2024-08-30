module.exports = (sequelize, Sequelize) => {
  const Empleado = sequelize.define('empleado', {
    id_empleado: {
      autoIncrement: true,
      type: Sequelize.INTEGER, // Tipo de dato para el identificador
      primaryKey: true,
      allowNull: false
    },
    primer_nombre: {
      type: Sequelize.STRING(100),
      allowNull: false
    },
    segundo_nombre: {
      type: Sequelize.STRING(100)
    },
    primer_apellido: {
      type: Sequelize.STRING(100),
      allowNull: false
    },
    segundo_apellido: {
      type: Sequelize.STRING(100)
    },
    nit: {
      type: Sequelize.STRING(10),
      allowNull: false
    },
    salario: {
      type: Sequelize.NUMERIC,
      allowNull: false
    },
    estatus: {
      type: Sequelize.NUMERIC,
      allowNull: false
    },
    id_departamento: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'departamento', 
        key: 'id_departamento' 
      }
    }
  });

  return Empleado;
};
