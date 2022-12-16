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
            //post data to database
            const sql = "INSERT INTO offer(offer_date , offer_time , offer_origin , offer_destination , offer_seat , offer_price , offer_description  , offer_car ) VALUES (?,?,?,?,?,?,?,?)";
            const result = await pool.query(sql, [date, time, origin, destination, seat, price, description, carid]);

            return res.send();

        } catch (error) {
            console.error(error.message);
            res.status(500).send(error.message);
        }
    }
    res.status(400).send("Method not allowed");
}