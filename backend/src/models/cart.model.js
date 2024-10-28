import { db, DataTypes } from './model.js';

const CartModel = db.define('tbl_carts', {
  id_product: DataTypes.INTEGER,
  id_user: DataTypes.INTEGER,
  qty: DataTypes.INTEGER,
}, {
  timestamps: false,
});

export default CartModel;
