import express from "express";
import cors from "cors";
import mysql from "mysql2/promise";
import dotenv from "dotenv";
import dns from "dns";

dotenv.config();

// 👇 force Node to prefer IPv4 (avoids IPv6 access denied issues)
dns.setDefaultResultOrder("ipv4first");

const app = express();
const PORT = process.env.PORT || 5000;

let db;

async function initDB() {
  try {
    db = await mysql.createConnection({
      host: process.env.DB_HOST,       // e.g. auth-db1832.hstgr.io
      user: process.env.DB_USER,       // your DB username
      password: process.env.DB_PASS,   // your DB password
      database: process.env.DB_NAME,   // your DB name
      port: process.env.DB_PORT || 3306,
      // ssl: { rejectUnauthorized: true } // enable if Hostinger requires SSL
    });
    console.log("✅ Connected to Hostinger MySQL DB");
  } catch (err) {
    console.error("❌ DB connection failed:");
    console.error("Code:", err.code);
    console.error("SQL State:", err.sqlState);
    console.error("Message:", err.message);
  }
}

app.use(cors());
app.use(express.json());

// Simple route to check DB
app.get("/test-db", async (req, res) => {
  try {
    if (!db) {
      return res.status(500).json({ error: "DB not connected" });
    }
    const [rows] = await db.query("SELECT NOW() AS now");
    res.json({ now: rows[0].now });
  } catch (err) {
    res.status(500).json({
      error: err.message,
      code: err.code,
      sqlState: err.sqlState
    });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
  initDB();
});
