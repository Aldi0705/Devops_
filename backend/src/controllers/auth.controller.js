import formidable from "formidable";
import AuthService from "../services/auth.service.js";
import { getIdUser } from "../utils/utility.js";

const login = async (req, res) => {
  const data = req.body;
  const response = await AuthService.login(data);
  return res.send(response);
};

const register = async (req, res) => {
  const data = req.body;
  const response = await AuthService.register(data);
  return res.send(response);
};

const forgetPassword = async (req, res) => {
  const data = req.body;
  const response = await AuthService.forgetPassword(data);
  return res.send(response);
};

const changePassword = async (req, res) => {
  const data = req.body;
  const token = req.headers.authorization.split(" ")[1];
  const iduser = getIdUser(token);
  const response = await AuthService.changePassword(iduser, data);
  return res.send(response);
};

export default {
  register,
  login,
  forgetPassword,
  changePassword,
};
