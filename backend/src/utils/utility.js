import jwt from "jsonwebtoken";
import CONFIG from "./config.js";

const isContainANumber = (value) => /\d/.test(value);
const isContainALetter = (value) => /[a-zA-Z]/.test(value);
const isContainALowerCaseLetter = (value) => /[a-z]/.test(value);
const isContainAUpperCaseLetter = (value) => /[A-Z]/.test(value);
const getIdUser = (token) => jwt.verify(token, CONFIG.PRIVATE_KEY).iduser;
const responseJson = (error, message, data) => ({
  error,
  message,
  data,
});
const createToken = (iduser) => {
  return jwt.sign({ iduser }, CONFIG.PRIVATE_KEY);
};
const passwordValidation = (value) => {
  if (!value) throw new Error("Password is required!");
  if (value.length < 6)
    throw new Error("Password must contain at least 6 characters!");
};

export {
  isContainANumber,
  isContainALetter,
  isContainALowerCaseLetter,
  isContainAUpperCaseLetter,
  getIdUser,
  responseJson,
  createToken,
  passwordValidation,
};
