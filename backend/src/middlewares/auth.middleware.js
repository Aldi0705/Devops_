import jwt from 'jsonwebtoken';
import CONFIG from '../utils/config.js';
import { responseJson } from '../utils/utility.js';

const authorization = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) res.send(responseJson(true, 'Error! Token was not provided.'));
  jwt.verify(token.split(' ')[1], CONFIG.PRIVATE_KEY, (error, decoded) => {
    if (decoded) next();
    else res.send(responseJson(true, error.message));
  });
};

export default authorization;
