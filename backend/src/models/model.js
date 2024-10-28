import { Sequelize, DataTypes } from 'sequelize';

const db = new Sequelize('ecommerce', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

export { db, DataTypes };
