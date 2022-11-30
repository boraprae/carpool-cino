import bcrypt from "bcrypt";
import { pool } from "../api/config/db.js";
//POST METHOD
export default async function handler(req, res) {
    if (req.method == "POST") {
        const userid = req.body.userid;
        const brand = req.body.brand;
        const model = req.body.model;
        const color = req.body.color;
        const license = req.body.license;
        // const image = req.body.image;

        console.log(userid, brand, model, color, license);

        try {
            // query user info from DB
            const sql = "SELECT car_color FROM car WHERE car_license=?";
            const [rows] = await pool.query(sql, [license]);
            if (rows.length === 0) {
                // user not found 


                //post data to database
                const sql = "INSERT INTO car(car_brand , car_model , car_color , car_license , user_id ) VALUES(?,?,?,?,?)";
                const result = await pool.query(sql, [brand, model, color, license, userid],);

                return res.send("ok");


            }
            //found user
            else {
                throw Error("car license found!! Please add other car license");
            }
        } catch (error) {
            console.error(error.message);
            res.status(500).send(error.message);
        }
    }
    res.status(400).send("Method not allowed");
}