import { pool } from "../api/config/db.js";
//POST METHOD
export default async function handler(req, res) {
    if (req.method == "GET") {
        // const offerid = req.body.id;

        try {
            // query user info from DB
            const sql = "SELECT * FROM offer ";
            const [rows] = await pool.query(sql);
            return res.send(rows);
            // if (rows.length === 1) {
            //     res.send(rows);
            // }
            // else {
            //     throw Error("user not found");
            // }
        } catch (error) {
            console.error(error.message);
            res.status(500).send(error.message);
        }
    }
    res.status(400).send("Method not allowed");
}