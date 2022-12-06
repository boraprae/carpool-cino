import { pool } from "../api/config/db.js";
//POST METHOD
export default async function handler(req, res) {

    
    if (req.method == "POST") {
        const userid = req.body.userid;

        // console.log(userid);

        try {
            // query user info from DB
            const sql = "SELECT car_brand,car_model,car_color,car_license,car_image,car_update_date FROM car WHERE user_id=?";
            const [rows] = await pool.query(sql, [userid]);

            // if (res.) {
            return res.send(rows);
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
    // res.send("test");
}