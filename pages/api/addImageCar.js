import bcrypt from "bcrypt";
import { pool } from "../api/config/db.js";
import formidable from "formidable";
import fs from "fs";

export const config = {
    api: {
        bodyParser: false
    }
};

const uploadimg = async (req, res) => {
    const form = new formidable.IncomingForm();
    form.parse(req, async function (err, fields, files) {
        await saveFile(files.file);
        return res.status(201).send("");
    });
};

const saveFile = async (file) => {
    const data = fs.readFileSync(file.path);
    fs.writeFileSync(`./public/uploadimg/${file.name}`, data);
    await fs.unlinkSync(file.path);
    return;
};
//POST METHOD
export default async function handler(req, res) {
    // console.log(carbrand , carcolor , carmodel , carlicense);

    if (req.method == "POST") {

        uploadimg(req, res);

        return res.send("ok");

        // try {
        //     // query user info from DB
        //     const sql = "SELECT car_color FROM car WHERE car_license=?";
        //     const [rows] = await pool.query(sql, [carlicense]);
        //     // console.log(rows.length);
        //     if (rows.length === 0) {
        //         // user not found 

        //         //post data to database
        //         const sql = "INSERT INTO car(car_brand , car_model , car_color , car_license , user_id ) VALUES(?,?,?,?,?)";
        //         const result = await pool.query(sql, [carbrand, carmodel, carcolor, carlicense, userid],);

        //         return res.send("ok");

        //     }
        //     //found user
        //     else {
        //         throw Error("car license found!! Please add other car license");
        //     }
        // } catch (error) {
        //     console.error(error.message);
        //     res.status(500).send(error.message);
        // }
    }
    // res.send("test");
    res.status(400).send("Method not allowed");
}