import bcrypt from "bcrypt";
import {pool} from "../../../config/db";

export default async function handler(req, res) {
    if(req.method == "POST") {
        const username = req.body.username;
        const pass = req.body.password;
        const phone = req.body.phone;
        const email = req.body.email;
        const BirthDay = req.body.BirthDay;
        const gender = req.body.gender;

        
        try {
            // query user info from DB
            const sql = "SELECT username FROM user WHERE username=?";
            const [rows] = await pool.query(sql, [username]);
            if(rows.length === 0) {
                // user not found 
                // can register
                
                //hash pass
                const hash = await bcrypt.hash(pass, 10);
                res.send("Can register");

                //post data to database
                const result = await pool({
                    query: 'INSERT INTO `post`( `user_name`,`user_phone`,`user_email`,`user_BirthDay`,`user_gender`,`user_date_register`) VALUES(?,?,?,?,?,?)',
                    values: [username,pass,phone,email,BirthDay,gender],
                });
            }
            //found user
            else {
                throw Error("username found!! Please go to Login");
            }
        } catch (error) {
            console.error(error.message);
            res.status(500).send(error.message);
        }
    }
    res.status(400).send("Method not allowed");
}