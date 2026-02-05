import express from 'express';
import * as productController from '../controllers/productController.js';
import isAuth from '../middleware/authMiddleware.js';
const router = express.Router();

// Page routes (protected)
router.get('/products', isAuth, productController.getProductsPage);

// API routes (protected)
router.get('/api/products', isAuth, productController.getAllProducts);
router.post('/api/products', isAuth, productController.createProduct);
router.put('/api/products/:id', isAuth, productController.updateProduct);
router.delete('/api/products/:id', isAuth, productController.deleteProduct);
router.get('/api/reports/summary', isAuth, productController.getReportSummary);

export default router;
