import { db, DataTypes } from './model.js';

const UserModel = db.define('tbl_users', {
  name: DataTypes.STRING,
  username: DataTypes.STRING,
  password: DataTypes.STRING,
  email: DataTypes.STRING,
  avatar: DataTypes.BLOB,
}, {
  timestamps: false,
});

export default UserModel;
