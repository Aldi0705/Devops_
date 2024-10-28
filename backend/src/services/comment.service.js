import CommentModel from '../models/comment.model.js';
import { responseJson } from '../utils/utility.js';

const addComment = async (iduser, {
  id_product, comment_text,
}) => {
  const comment = await CommentModel.create({
    id_product, id_user: iduser, comment_text,
  });
  if (comment) return responseJson(false, 'Add comment successfully', comment);
  return responseJson(true, 'Add comment failed');
};

const getComments = async (idproduct) => {
  const comments = await CommentModel.findAll({ where: { id_product: idproduct } });
  if (comments) return responseJson(false, 'Get product successfully', comments);
  return responseJson(true, 'Product not found');
};

const editComment = async (iduser, {
  id, id_product, comment_text,
}) => {
  const data = { datetime: Date.now() };
  if (!id) throw new Error('Id comment required!');
  if (!id_product) throw new Error('Id product required!');
  if (comment_text) data.comment_text = comment_text;
  const comment = await CommentModel.update(data, { where: { id, id_product, id_user: iduser } });
  if (comment > 0) return responseJson(false, 'Edit comment successfully');
  return responseJson(true, 'Edit comment failed');
};

const deleteComment = async (iduser, idcomment) => {
  const comment = await CommentModel.destroy({ where: { id: idcomment, id_user: iduser } });
  if (comment > 0) return responseJson(false, 'Delete comment successfully');
  return responseJson(true, 'Delete comment failed');
};

export default {
  addComment,
  getComments,
  editComment,
  deleteComment,
};
