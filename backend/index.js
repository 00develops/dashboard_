import express from "express";
import cors from "cors";
import mysql from "mysql2/promise";
import dotenv from "dotenv";
import dns from "dns";

dotenv.config();
dns.setDefaultResultOrder("ipv4first");

const app = express();
const PORT = process.env.PORT || 5000;

let db; // pool instance


async function initDB() {
  try {
    db = mysql.createPool({
      host: process.env.DB_HOST,       // e.g. auth-db1832.hstgr.io
      user: process.env.DB_USER,       // your DB username
      password: process.env.DB_PASS,   // your DB password
      database: process.env.DB_NAME,   // your DB name
      port: process.env.DB_PORT || 3306,
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0,
      // ssl: { rejectUnauthorized: true } // enable if Hostinger requires SSL
    });
    console.log("✅ MySQL pool created");
  } catch (err) {
    console.error("❌ DB pool creation failed:");
    console.error("Code:", err.code);
    console.error("SQL State:", err.sqlState);
    console.error("Message:", err.message);
    process.exit(1); // stop server if DB fails
  }
}

app.use(cors());
app.use(express.json());


app.get("/test-db", async (req, res) => {
  try {
    const [rows] = await db.query("SELECT NOW() AS now");
    res.json({ now: rows[0].now });
  } catch (err) {
    res.status(500).json({
      error: err.message,
      code: err.code,
      sqlState: err.sqlState,
    });
  }
});


async function startServer() {
  await initDB();
  app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
  });
}

startServer();
