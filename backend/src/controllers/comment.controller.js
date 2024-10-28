import CommentService from '../services/comment.service.js';
import { getIdUser } from '../utils/utility.js';

const addComment = async (req, res) => {
  const data = req.body;
  const token = req.headers.authorization.split(' ')[1];
  const iduser = getIdUser(token);
  const response = await CommentService.addComment(iduser, data);
  return res.send(response);
};

const getComments = async (req, res) => {
  const { idproduct } = req.params;
  const response = await CommentService.getComments(idproduct);
  return res.send(response);
};

const editComment = async (req, res) => {
  const data = req.body;
  const token = req.headers.authorization.split(' ')[1];
  const iduser = getIdUser(token);
  const response = await CommentService.editComment(iduser, data);
  return res.send(response);
};

const deleteComment = async (req, res) => {
  const { idcomment } = req.params;
  const token = req.headers.authorization.split(' ')[1];
  const iduser = getIdUser(token);
  const response = await CommentService.deleteComment(iduser, idcomment);
  return res.send(response);
};

export default {
  addComment,
  getComments,
  editComment,
  deleteComment,
};
