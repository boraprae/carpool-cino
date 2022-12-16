import bcrypt from "bcrypt";
import { pool } from "../api/config/db.js";
//POST METHOD
export default async function handler(req, res) {
    // console.log(carbrand , carcolor , carmodel , carlicense);
    if (req.method == "POST") {
        const userid = req.body.userid;
        const carbrand = req.body.carbrand;
        const carcolor = req.body.carcolor;
        const carmodel = req.body.carmodel;
        const carlicense = req.body.carlicense;
        const image = req.body.carimage;

        console.log(image[0].blob , carbrand, carcolor, carmodel, carlicense);

        // return res.send("ok");

        try {
            // query user info from DB
            const sql = "SELECT car_color FROM car WHERE car_license=?";
            const [rows] = await pool.query(sql, [carlicense]);
            // console.log(rows.length);
            if (rows.length === 0) {
                // user not found 

                //post data to database
                const sql = "INSERT INTO car(car_brand , car_model , car_color , car_license , user_id ) VALUES(?,?,?,?,?)";
                const result = await pool.query(sql, [carbrand, carmodel, carcolor, carlicense, userid],);

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
    // res.send("test");
    res.status(400).send("Method not allowed");
}