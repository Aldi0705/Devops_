import { Router } from 'express';
import CommentController from '../controllers/comment.controller.js';
import authorization from '../middlewares/auth.middleware.js';

const router = Router();

router.post('/', authorization, CommentController.addComment);
router.get('/:idproduct', CommentController.getComments);
router.put('/', authorization, CommentController.editComment);
router.delete('/:idcomment', authorization, CommentController.deleteComment);

export default router;
