import CartModel from '../models/cart.model.js';
import { responseJson } from '../utils/utility.js';

const addToCart = async (iduser, {
  id_product, qty,
}) => {
  const isUpdate = await CartModel.findOne({ where: { id_product, id_user: iduser } });
  if (isUpdate) {
    const cart = await CartModel.update(
      { qty: isUpdate.qty + qty },
      { where: { id_product, id_user: iduser } },
    );
    if (cart > 0) return responseJson(false, 'Add to cart successfully');
    return responseJson(true, 'Add to cart failed');
  }
  const cart = await CartModel.create({
    id_product, id_user: iduser, qty,
  });
  if (cart) return responseJson(false, 'Add to cart successfully', cart);
  return responseJson(true, 'Add to cart failed');
};

const getCart = async (iduser) => {
  const cart = await CartModel.findAll({ where: { id_user: iduser } });
  if (cart) return responseJson(false, 'Get cart successfully', cart);
  return responseJson(true, 'Cart not found');
};

const editQuantity = async (iduser, {
  id, id_product, qty,
}) => {
  if (!id) throw new Error('Id cart required!');
  if (!id_product) throw new Error('Id product required!');
  if (qty) {
    const cart = await CartModel.update(
      { qty },
      { where: { id, id_product, id_user: iduser } },
    );
    if (cart > 0) return responseJson(false, 'Edit quantity successfully');
  }
  return responseJson(true, 'Edit quantity canceled');
};

const deleteCart = async (iduser, idcart) => {
  const cart = await CartModel.destroy({ where: { id: idcart, id_user: iduser } });
  if (cart > 0) return responseJson(false, 'Delete cart successfully');
  return responseJson(true, 'Delete cart failed');
};

export default {
  addToCart,
  getCart,
  editQuantity,
  deleteCart,
};
