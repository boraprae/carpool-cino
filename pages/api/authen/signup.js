import bcrypt from "bcrypt";
import { pool } from "../config/db";

export default async function handler(req, res) {
    if (req.method == "POST") {
        const name = req.body.name;
        const pass = req.body.pass;
        const phone = req.body.phone;
        const email = req.body.email;
        const BirthDay = req.body.BirthDay;
        const gender = req.body.gender;

        // console.log(name, pass, phone, email, BirthDay, gender);


        // return res.send("ok");

        try {
            // query user info from DB
            const sql = "SELECT user_name FROM user WHERE user_email=?";
            const [rows] = await pool.query(sql, [email]);
            if (rows.length === 0) {
                // user not found 
                // can register

                //hash pass
                const hash = await bcrypt.hash(pass, 10);

                const sql = "INSERT INTO user( user_name , user_password , user_phone , user_email ,user_gender) VALUES(?,?,?,?,?)";
                //user data to database
                const result = await pool.query(sql, [name, hash, phone, email, gender]);

                return res.send("ok");
            }
            //found user
            else {
                return res.status(400).send("Email is already used");
            }
        } catch (error) {
            console.error(error.message);
            res.status(500).send(error.message);
        }
    }
    res.status(400).send("Method not allowed");
}