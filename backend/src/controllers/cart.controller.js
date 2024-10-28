import CartService from '../services/cart.service.js';
import { getIdUser } from '../utils/utility.js';

const addToCart = async (req, res) => {
  const data = req.body;
  const token = req.headers.authorization.split(' ')[1];
  const iduser = getIdUser(token);
  const response = await CartService.addToCart(iduser, data);
  return res.send(response);
};

const getCart = async (req, res) => {
  const token = req.headers.authorization.split(' ')[1];
  const iduser = getIdUser(token);
  const response = await CartService.getCart(iduser);
  return res.send(response);
};

const editQuantity = async (req, res) => {
  const data = req.body;
  const token = req.headers.authorization.split(' ')[1];
  const iduser = getIdUser(token);
  const response = await CartService.editQuantity(iduser, data);
  return res.send(response);
};

const deleteCart = async (req, res) => {
  const { idcart } = req.params;
  const token = req.headers.authorization.split(' ')[1];
  const iduser = getIdUser(token);
  const response = await CartService.deleteCart(iduser, idcart);
  return res.send(response);
};

export default {
  addToCart,
  getCart,
  editQuantity,
  deleteCart,
};
