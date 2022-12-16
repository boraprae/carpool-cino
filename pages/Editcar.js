import bcrypt from "bcrypt";
import { pool } from "../api/config/db.js";
//POST METHOD
export default async function handler(req, res) {
    // console.log(carbrand , carcolor , carmodel , carlicense);
    if (req.method == "POST") {
        const carbrand = req.body.carbrand;
        const carcolor = req.body.carcolor;
        const carmodel = req.body.carmodel;
        const carlicense = req.body.carlicense;
        // const image = req.body.image;

        // console.log(carbrand, carcolor, carmodel, carlicense);

        try {
            // // query user info from DB
            // const sql = "SELECT car_color FROM car WHERE car_license=?";
            // const [rows] = await pool.query(sql, [carlicense]);
            // // console.log(rows.length);
            // if (rows.length === 0) {
            //     // user not found 



            // }
            // //found user
            // else {
            //     throw Error("car license found!! Please add other car license");
            // }
            //post data to database
            const sql = "UPDATE car SET car_brand=?,car_model=?,car_color=?,car_license=?,car_update_date=? WHERE car_license=?";
            const result = await pool.query(sql, [carbrand, carmodel, carcolor, carlicense],);

            return res.send("ok");
        } catch (error) {
            console.error(error.message);
            res.status(500).send(error.message);
        }
    }
    res.status(400).send("Method not allowed");
}