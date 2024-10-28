import fs from 'fs';
import { Op } from 'sequelize';
import { responseJson } from '../utils/utility.js';
import ProductModel from '../models/product.model.js';

const addProduct = async (iduser, {
  name, description, price,
}, { picture }) => {
  const data = { id_user: iduser };
  if (name) data.name = name[0];
  if (description) data.description = description[0];
  if (price) data.price = price[0];
  if (picture) {
    const { filepath } = picture[0];
    const userImage = fs.readFileSync(filepath);
    data.picture = userImage;
  }
  const product = await ProductModel.create(data);
  if (product) return responseJson(false, 'Add product successfully', product);
  return responseJson(true, 'Add product failed');
};

const getProducts = async () => {
  const products = await ProductModel.findAll();
  if (products) return responseJson(false, 'Get product successfully', products);
  return responseJson(true, 'Product not found');
};

const getProduct = async (idproduct) => {
  const product = await ProductModel.findOne({ where: { id: idproduct } });
  if (product) return responseJson(false, 'Get product successfully', product);
  return responseJson(true, 'Product not found');
};

const searchProduct = async (keyword) => {
  const product = await ProductModel.findAll({ where: { name: { [Op.like]: `%${keyword}%` } } });
  if (product.length > 0) return responseJson(false, 'Search product successfully', product);
  return responseJson(true, `Product '${keyword}' not found`);
};

const editProduct = async (iduser, {
  id, name, description, price,
}, { picture }) => {
  const data = { datetime: Date.now() };
  if (!id) throw new Error('Id product required!');
  if (name) data.name = name[0];
  if (description) data.description = description[0];
  if (price) data.price = price[0];
  if (picture) {
    const { filepath } = picture[0];
    const userImage = fs.readFileSync(filepath);
    data.picture = userImage;
  }
  const product = await ProductModel.update(data, { where: { id, id_user: iduser } });
  if (product > 0) return responseJson(false, 'Edit product successfully');
  return responseJson(true, 'Edit product failed');
};

const deleteProduct = async (iduser, idproduct) => {
  const product = await ProductModel.destroy({ where: { id: idproduct, id_user: iduser } });
  if (product > 0) return responseJson(false, 'Delete product successfully');
  return responseJson(true, 'Delete product failed');
};

export default {
  addProduct,
  getProducts,
  getProduct,
  searchProduct,
  editProduct,
  deleteProduct,
};
