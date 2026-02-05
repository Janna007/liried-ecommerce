import pool from "./config/db.js";

(async () => {
    try {
        const [rows] = await pool.query("SELECT 1");
        console.log("✅ MySQL connected", rows);
        process.exit(0);
    } catch (err) {
        console.error("❌ Connection failed", err);
        process.exit(1);
    }
})();
