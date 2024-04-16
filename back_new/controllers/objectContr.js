const db = require('../db');

console.log('controller is on (OBJECTS)')
class UserController {
    async setObject(req, res){
        const {nm, type, cnt_r, cnt_flr, adrs, catv, secr, el_n, el_l, sq_m, t_bld, city, img, img2, img3, img4, img5, img6, price, crnc, upload, descr, date, istbld, t_bld_r } = req.body
        const newUser = await db.query(`insert into catalog_estate(name_object, type_object, cnt_rooms, cnt_floors, address, catv_avail, security_avail, elevator_norm, elevator_large, sq_meters, type_building, city,image1,image2,image3,image4,image5,image6, price, currency, who_upload, desription, date_of_upload, istypebuilding, typebuild_room) values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25) RETURNING *`, [nm, type, cnt_r, cnt_flr, adrs, catv, secr, el_n, el_l, sq_m, t_bld, city, img, img2, img3, img4, img5, img6, price, crnc, upload, descr, date, istbld, t_bld_r ])
        console.log("data is added (catalog)")
        console.log(newUser)
        res.json(newUser)

    }
    async getObjects(req, res){
        const users = await db.query(`select * from catalog_estate`)
        res.json(users)
    }

    async getObjectsServe(req, res){
        const users = await db.query(`select * from services_estate`)
        res.json(users)
    }

    async getObject(req, res){
        const id = req.params.id
        const users = await db.query(`select * from catalog_estate where id =$1`, [id])
              res.json(users)

    }

    async getObjectServe(req, res){
        const id = req.params.id
        const users = await db.query(`select * from services_estate where id =$1`, [id])
              res.json(users)

    }

    async getSeparateObject(req, res){
        const id = req.params.id
        const users = await db.query(`select * from catalog_estate where type_object =$1`, [id])
              res.json(users)

    }

    async delObject(req, res){
        const id = req.params.id
        const user = await db.query('DELETE FROM catalog_estate where id = $1', [id])
        res.json(user.rows[0])
    }
}

module.exports = new UserController