import fs from 'fs';
import { generate, isHashed, verify } from 'password-hash';
import UserModel from '../models/user.model.js';
import { createToken, passwordValidation, responseJson } from '../utils/utility.js';

const login = async ({
  email, password,
}) => {
  const user = await UserModel.findOne({ where: { email } });
  if (user) {
    const verifyPassword = verify(password, user.password);
    const token = createToken(user.id);
    if (verifyPassword) return responseJson(false, 'Login successfully', { user, token });
    return responseJson(true, 'Try again, Password is wrong!');
  }
  return responseJson(true, 'Try again, Email or Password is wrong!');
};

const register = async ({
  email, name, username, password,
}) => {
  passwordValidation(password);
  const hashPassword = generate(password);
  const user = await UserModel.create({
    email, name, username, password: hashPassword,
  });
  const token = createToken(user.id);
  if (user) return responseJson(false, 'Register successfully', { user, token });
  return responseJson(true, 'Register failed');
};

const editUser = async (iduser, {
  email, name, username,
}, { avatar }) => {
  const data = {};
  if (email) data.email = email[0];
  if (name) data.name = name[0];
  if (username) data.username = username[0];
  if (avatar) {
    const { filepath } = avatar[0];
    const userImage = fs.readFileSync(filepath);
    data.avatar = userImage;
  }
  const user = await UserModel.update(data, { where: { id: iduser } });
  if (user > 0) return responseJson(false, 'Edit user successfully');
  return responseJson(true, 'Edit user failed');
};

const forgetPassword = async ({
  email, username, password,
}) => {
  passwordValidation(password);
  const hashPassword = generate(password);
  const user = await UserModel.update({
    password: hashPassword,
  }, { where: { email, username } });
  if (user > 0) return responseJson(false, 'Reset password successfully');
  return responseJson(true, 'Reset password failed');
};

const changePassword = async (iduser, { password }) => {
  const isUpdate = !isHashed(password);
  if (isUpdate) {
    passwordValidation(password);
    const hashPassword = generate(password);
    const user = await UserModel.update({
      password: hashPassword,
    }, { where: { id: iduser } });
    if (user > 0) return responseJson(false, 'Change password successfully');
    return responseJson(true, 'Change password failed');
  }
  return responseJson(true, 'Change password canceled');
};

export default {
  login,
  register,
  editUser,
  forgetPassword,
  changePassword,
};
