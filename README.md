# Simple Product Management System

A production-ready Product Management System built with Node.js, Express, and MySQL.

## Features
- **Authentication**: Session-based login/logout.
- **Product CRUD**: Create, Read, Update, and Delete products.
- **Reporting**: Dashboard showing total products, stock, and inventory value.
- **Security**: Protected routes requiring authentication.
- **RESTful API**: Clean API endpoints for product management.
- **Aesthetics**: Premium UI built with pure HTML and CSS.

## Tech Stack
- **Backend**: Node.js, Express.js
- **Database**: MySQL
- **Frontend**: HTML, CSS, EJS
- **Authentication**: bcryptjs, express-session

---

## Setup Instructions

### 1. Database Configuration
1. Create a MySQL database named `product_management`.
2. Import the schema using the provided SQL file:
   ```bash
   mysql -u your_username -p product_management < database/schema.sql
   ```
   *Alternatively, copy the contents of `database/schema.sql` and run them in your MySQL client.*

### 2. Environment Variables
1. Create a `.env` file in the root directory (or use the existing one).
2. Configure your database credentials:
   ```env
   PORT=3000
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=your_password
   DB_NAME=product_management
   SESSION_SECRET=your_secret_key
   ```

### 3. Installation
Install dependencies:
```bash
npm install
```

### 4. Seed Admin User
Create the default admin user by running the seed script:
```bash
node seed.js
```
**Default Credentials:**
- **Username**: `admin`
- **Password**: `admin123`

### 5. Run the Application
Start the server:
```bash
node app.js
```
The application will be available at [http://localhost:3000](http://localhost:3000).

---

## API Documentation

### Authentication
- `POST /login`: Authenticate user.
- `POST /logout`: End session.

### Products
- `GET /api/products`: Fetch all products.
- `POST /api/products`: Add a new product.
- `PUT /api/products/:id`: Update an existing product.
- `DELETE /api/products/:id`: Delete a product.

### Reports
- `GET /api/reports/summary`: Get inventory summary statistics.

---

## Project Structure
- `app.js`: Entry point.
- `routes/`: Express routers.
- `controllers/`: Business logic.
- `models/`: Database interactions.
- `middleware/`: Auth and error handling.
- `public/`: CSS and static assets.
- `views/`: EJS templates.
- `database/`: MySQL schema files.
- `seed.js`: Initial data setup.
