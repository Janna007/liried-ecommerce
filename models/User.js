import pool from '../config/db.js';

class User {
    static async findByUsername(username) {
        const [rows] = await pool.execute('SELECT * FROM users WHERE username = ?', [username]);
        return rows[0];
    }

    static async create(username, password) {
        const [result] = await pool.execute(
            'INSERT INTO users (username, password) VALUES (?, ?)',
            [username, password]
        );
        return result.insertId;
    }
}

export default User;
