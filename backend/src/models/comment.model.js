import { db, DataTypes } from './model.js';

const CommentModel = db.define('tbl_comments', {
  id_product: DataTypes.INTEGER,
  id_user: DataTypes.INTEGER,
  comment_text: DataTypes.STRING,
  datetime: DataTypes.DATE,
}, {
  timestamps: false,
});

export default CommentModel;
