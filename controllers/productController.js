import Product from '../models/Product.js';

export const getProductsPage = async (req, res, next) => {
    try {
        const products = await Product.getAll();
        const stats = await Product.getStats();
        res.render('products', { products, stats, user: req.session.user });
    } catch (error) {
        next(error);
    }
};

export const getAllProducts = async (req, res, next) => {
    try {
        const products = await Product.getAll();
        res.json(products);
    } catch (error) {
        next(error);
    }
};

export const createProduct = async (req, res, next) => {
    try {
        const { name, description, price, quantity } = req.body;
        if (!name || !price || quantity === undefined) {
            return res.status(400).json({ message: 'Missing required fields' });
        }
        const productId = await Product.create({ name, description, price, quantity });
        res.status(201).json({ message: 'Product created', id: productId });
    } catch (error) {
        next(error);
    }
};

export const updateProduct = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { name, description, price, quantity } = req.body;
        const affectedRows = await Product.update(id, { name, description, price, quantity });
        if (affectedRows === 0) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.json({ message: 'Product updated' });
    } catch (error) {
        next(error);
    }
};

export const deleteProduct = async (req, res, next) => {
    try {
        const { id } = req.params;
        const affectedRows = await Product.delete(id);
        if (affectedRows === 0) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.json({ message: 'Product deleted' });
    } catch (error) {
        next(error);
    }
};

export const getReportSummary = async (req, res, next) => {
    try {
        const stats = await Product.getStats();
        res.json(stats);
    } catch (error) {
        next(error);
    }
};
