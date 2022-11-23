import {pool} from "../../../config/db";
//POST METHOD
export default async function handler(req, res) {
    if(req.method == "POST") {
        const offerid = req.body.id;

        try {
            // query user info from DB
            const sql = "SELECT offer_date,offer_time,offer_origin,offer_destination,offer_seat,offer_price,offer_description,offer_status,offer_userOffer,offer_car FROM car WHERE offer_id=?";
            const [rows] = await pool.query(sql, [offerid]);
            if(rows.length === 1) {
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