import { pool } from "../api/config/db.js";
//POST METHOD
export default async function handler(req, res) {
    if (req.method == "POST") {
        const userid = req.body.id;

        try {
            // query user info from DB
            const sql = "SELECT user_name,user_phone,user_email,user_BirthDay,user_gender,user_date_register,car_id FROM user WHERE user_id=?";
            const [rows] = await pool.query(sql, [userid]);
            if (rows.length === 1) {
                res.send(rows);
            }
            else {
                throw Error("user not found");
            }
        } catch (error) {
            console.error(error.message);
            res.status(500).send(error.message);
        }
    }
    res.status(400).send("Method not allowed");
}