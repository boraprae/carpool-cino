import bcrypt from "bcrypt";
import { pool } from "../config/db.js";
//POST METHOD
export default async function handler(req, res) {
    if (req.method == "POST") {
        const email = req.body.email;
        const raw_pass = req.body.password;

        // console.log(email, raw_pass);

        try {
            // query user info from DB
            const sql = "SELECT user_email , user_password FROM user WHERE user_email = ?";
            const [rows] = await pool.query(sql, [email]);
            if (rows.length === 1) {
                // user found and get the password
                // console.log(rows[0].user_password);
                const hash = rows[0].user_password;
                // return res.send("ok");
                const same = await bcrypt.compare(raw_pass, hash);
                if (same) {
                    return res.send("Login OK");
                }
                else {
                    return res.status(401).send("Wrong password");
                }
            }
            else {
                return res.status(400).send("Wrong username");
                // throw Error("Wrong username");
            }
        } catch (error) {
            console.error(error.message);
            res.status(500).send(error.message);
        }
    }
    res.status(400).send("Method not allowed");
}