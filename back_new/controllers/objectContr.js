const db = require('../db');

console.log('controller is on (OBJECTS)')
class UserController {
//     async createUser(req, res){
//         const {name, sur, lastn, email, pass, pass_series, pass_num, passget, dept_code, tax_id, posid, taid } = req.body
//         var salt = bcrypt.genSaltSync(10);
// var hash = bcrypt.hashSync(pass, salt);
//         const newUser = await db.query(`insert into Employes(name, surname, last_name, email, password, pass_series, pass_num, who_get, dept_code, tax_id, PositionID, TypeAccessID) values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) RETURNING *`, [name, sur, lastn, email, hash, pass_series, pass_num, passget, dept_code, tax_id, posid, taid ])
//         console.log("data is added (user)")
//         res.json(newUser)

//     }
    async getObjects(req, res){
        const users = await db.query(`select * from catalog_estate`)
        res.json(users)
    }

    async getObject(req, res){
        const id = req.params.id
        const users = await db.query(`select * from catalog_estate where id_object =$1`, [id])
              res.json(users)

    }

    async getSeparateObject(req, res){
        const id = req.params.id
        const users = await db.query(`select * from catalog_estate where type_object =$1`, [id])
              res.json(users)

    }

    async delObject(req, res){
        const id = req.params.id
        const user = await db.query('DELETE FROM catalog_estate where id_object = $1', [id])
        res.json(user.rows[0])
    }
}

module.exports = new UserController