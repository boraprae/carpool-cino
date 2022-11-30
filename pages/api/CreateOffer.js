import bcrypt from "bcrypt";
import { pool } from "../api/config/db.js";
//POST METHOD
export default async function handler(req, res) {
    if (req.method == "POST") {
        const date = req.body.date;
        const time = req.body.time;
        const origin = req.body.origin;
        const destination = req.body.destination;
        const seat = req.body.seat;
        const price = req.body.price;
        const description = req.body.description;
        const carid = req.body.carid;
        
        try {
            // query user info from DB
            const sql = "SELECT username FROM car WHERE car_license=?";
            const [rows] = await pool.query(sql, [license]);
            if (rows.length === 0) {
                // user not found 
                // can register

                //hash pass
                const hash = await bcrypt.hash(pass, 10);
                res.send("Can register");

                //post data to database
                const sql = "INSERT INTO offer(,`car_model`,`car_color`,`car_license`,`car_image`,`userid`) VALUES(?,?,?,?,?,?)";
                const result = await pool.query({
                    query: 'INSERT INTO `post`(`car_brand`,`car_model`,`car_color`,`car_license`,`car_image`,`userid`) VALUES(?,?,?,?,?,?)',
                    values: [brand, model, color, license, image, userid],
                });
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