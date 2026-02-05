import pool from '../config/db.js';

class Product {
    static async getAll() {
        const [rows] = await pool.execute('SELECT * FROM products ORDER BY created_at DESC');
        return rows;
    }

    static async getById(id) {
        const [rows] = await pool.execute('SELECT * FROM products WHERE id = ?', [id]);
        return rows[0];
    }

    static async create(productData) {
        const { name, description, price, quantity } = productData;
        const [result] = await pool.execute(
            'INSERT INTO products (name, description, price, quantity) VALUES (?, ?, ?, ?)',
            [name, description, price, quantity]
        );
        return result.insertId;
    }

    static async update(id, productData) {
        const { name, description, price, quantity } = productData;
        const [result] = await pool.execute(
            'UPDATE products SET name = ?, description = ?, price = ?, quantity = ? WHERE id = ?',
            [name, description, price, quantity, id]
        );
        return result.affectedRows;
    }

    static async delete(id) {
        const [result] = await pool.execute('DELETE FROM products WHERE id = ?', [id]);
        return result.affectedRows;
    }

    static async getStats() {
        const [rows] = await pool.execute(`
            SELECT 
                COUNT(*) as totalProducts,
                IFNULL(SUM(quantity), 0) as totalStock,
                IFNULL(SUM(price * quantity), 0) as totalValue
            FROM products
        `);
        return rows[0];
    }
}

export default Product;
