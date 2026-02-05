import bcrypt from 'bcryptjs';
import User from './models/User.js';
import pool from './config/db.js';

async function seed() {
    try {
        const username = 'admin';
        const password = 'admin123';

        const existingUser = await User.findByUsername(username);
        if (existingUser) {
            console.log('Admin user already exists.');
        } else {
            const hashedPassword = await bcrypt.hash(password, 10);
            await User.create(username, hashedPassword);
            console.log('Admin user created successfully!');
            console.log('Username: admin');
            console.log('Password: admin123');
        }
    } catch (error) {
        console.error('Error seeding data:', error);
    } finally {
        process.exit();
    }
}

seed();
