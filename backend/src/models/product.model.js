import { db, DataTypes } from './model.js';

const ProductModel = db.define('tbl_products', {
  id_user: DataTypes.INTEGER,
  name: DataTypes.STRING,
  description: DataTypes.STRING,
  price: DataTypes.INTEGER,
  picture: DataTypes.BLOB,
  datetime: DataTypes.DATE,
}, {
  timestamps: false,
});

export default ProductModel;
