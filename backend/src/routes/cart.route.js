import { Router } from 'express';
import CartController from '../controllers/cart.controller.js';
import authorization from '../middlewares/auth.middleware.js';

const router = Router();

router.post('/', authorization, CartController.addToCart);
router.get('/', authorization, CartController.getCart);
router.put('/', authorization, CartController.editQuantity);
router.delete('/:idcart', authorization, CartController.deleteCart);

export default router;
