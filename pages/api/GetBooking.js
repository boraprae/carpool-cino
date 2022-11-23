import {pool} from "../../../config/db";
//POST METHOD
export default async function handler(req, res) {
    if(req.method == "POST") {
        const userid = req.body.userid;
        const offerid = req.body.userid;

        try {
            // query user info from DB
            const sql = "SELECT booking_status FROM Booking WHERE booking_id=?,offer_id=?";
            const [rows] = await pool.query(sql, [userid,offerid]);
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