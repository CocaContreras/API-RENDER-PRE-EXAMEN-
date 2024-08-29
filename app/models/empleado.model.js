module.exports = (sequelize, Sequelize) => {
    const Empleado = sequelize.define('empleado', {
      id_empleado: {
        type: Sequelize.NUMERIC,
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
        type: Sequelize.NUMERIC,
        references: {
          model: 'DEPARTAMENTO', // Nombre del modelo referenciado
          key: 'id_departamento'
        },
        allowNull: false
      }
    }, {
      tableName: 'EMPLEADO',
      timestamps: false // Desactiva createdAt y updatedAt si no los usas
    });
  
    return Empleado;
  };
  