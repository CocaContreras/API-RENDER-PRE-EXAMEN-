const env = require('./env.js');
const Sequelize = require('sequelize');

const sequelize = new Sequelize(env.database, env.username, env.password, {
  host: env.host,
  dialect: env.dialect,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  },
  operatorsAliases: false,
  pool: {
    max: env.max,
    min: env.pool.min,
    acquire: env.pool.acquire,
    idle: env.pool.idle,
  }
});

const db = {};

// Importar modelos
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Departamento = require('../models/departamento.model.js')(sequelize, Sequelize);
db.Empleado = require('../models/empleado.model.js')(sequelize, Sequelize);

// Configurar relaciones
db.Departamento.hasMany(db.Empleado, { foreignKey: 'id_departamento' });
db.Empleado.belongsTo(db.Departamento, { foreignKey: 'id_departamento' });

// Sincronizar modelos
sequelize.sync({ force: true })  // Esto eliminará las tablas existentes y las volverá a crear
  .then(() => {
    console.log('Database & tables created!');
  })
  .catch(error => {
    console.error('Error syncing database:', error);
  });

module.exports = db;

