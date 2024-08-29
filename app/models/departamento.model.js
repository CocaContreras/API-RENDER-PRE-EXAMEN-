module.exports = (sequelize, Sequelize) => {
    const Departamento = sequelize.define('departamento', {
      id_departamento: {
        type: Sequelize.NUMERIC,
        primaryKey: true,
        allowNull: false
      },
      descripcion: {
        type: Sequelize.STRING(80),
        allowNull: false
      }
    }, {
      tableName: 'departamento',
      timestamps: false // Si no utilizas createdAt y updatedAt
    });
  
    return Departamento;
  };