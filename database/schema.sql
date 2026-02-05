-- Create Database
CREATE DATABASE IF NOT EXISTS product_management;
USE product_management;

-- Users Table
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Products Table
CREATE TABLE IF NOT EXISTS products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2) NOT NULL,
    quantity INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert a default user (password: admin123)
-- Hash generated using bcrypt: $2a$10$wE0vYv.pA5k1k/vD7z/7OO9l8v6u6W1m8I5B1u/9vWwWwWwWwWwW
INSERT IGNORE INTO users (username, password) VALUES ('admin', '$2a$10$8.N9Xm8E3K7U.7d8n8F1u.fX/QyW/xU5rJ1yvQO8l9E.Qo8v9v9v.');
-- Note: The above hash is just a placeholder, I'll generate a real one in the logic.
