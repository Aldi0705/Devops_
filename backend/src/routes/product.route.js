import { Router } from 'express';
import ProductController from '../controllers/product.controller.js';
import authorization from '../middlewares/auth.middleware.js';

const router = Router();

router.post('/', authorization, ProductController.addProduct);
router.get('/', ProductController.getProducts);
router.get('/search', ProductController.searchProduct);
router.get('/:idproduct', ProductController.getProduct);
router.put('/', authorization, ProductController.editProduct);
router.delete('/:idproduct', authorization, ProductController.deleteProduct);

export default router;
