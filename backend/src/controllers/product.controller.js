import formidable from 'formidable';
import ProductService from '../services/product.service.js';
import { getIdUser } from '../utils/utility.js';

const addProduct = async (req, res) => {
  const form = formidable({});
  const [fields, files] = await form.parse(req);
  const token = req.headers.authorization.split(' ')[1];
  const iduser = getIdUser(token);
  const response = await ProductService.addProduct(iduser, fields, files);
  return res.send(response);
};

const getProducts = async (req, res) => {
  const response = await ProductService.getProducts();
  return res.send(response);
};

const getProduct = async (req, res) => {
  const { idproduct } = req.params;
  const response = await ProductService.getProduct(idproduct);
  return res.send(response);
};

const searchProduct = async (req, res) => {
  const { keyword } = req.query;
  const response = await ProductService.searchProduct(keyword);
  return res.send(response);
};

const editProduct = async (req, res) => {
  const form = formidable({});
  const [fields, files] = await form.parse(req);
  const token = req.headers.authorization.split(' ')[1];
  const iduser = getIdUser(token);
  const response = await ProductService.editProduct(iduser, fields, files);
  return res.send(response);
};

const deleteProduct = async (req, res) => {
  const { idproduct } = req.params;
  const token = req.headers.authorization.split(' ')[1];
  const iduser = getIdUser(token);
  const response = await ProductService.deleteProduct(iduser, idproduct);
  return res.send(response);
};

export default {
  addProduct,
  getProducts,
  getProduct,
  searchProduct,
  editProduct,
  deleteProduct,
};
