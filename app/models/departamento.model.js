module.exports = (sequelize, Sequelize) => {
  const Departamento = sequelize.define('departamento', {
    id_departamento: {
      autoIncrement: true,
      type: Sequelize.INTEGER, 
      primaryKey: true,
      allowNull: false
    },
    descripcion: {
      type: Sequelize.STRING(80),
      allowNull: false
    }
  }, {
    tableName: 'departamento',
    timestamps: false // Desactiva createdAt y updatedAt si no los usas
  });

  return Departamento;
};
