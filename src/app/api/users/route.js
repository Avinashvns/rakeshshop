import pool from "@/utils/db";

export async function GET() {
  try {
    const [rows] = await pool.query("SELECT * FROM users");
    return new Response(JSON.stringify(rows), {
      headers: { "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Database error" }), {
      headers: { "Content-Type": "application/json" },
      status: 500,
    });
  }
}