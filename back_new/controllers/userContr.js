const db = require('../db');
var bcrypt = require('bcrypt');
// var salt = bcrypt.genSaltSync(10);
// var hash = bcrypt.hashSync("B4c0/\/", salt);
// console.log(hash)
console.log('controller is on')
class UserController {
    async createUser(req, res){
        const {name, sur, lastn, email, pass, pass_series, pass_num, passget, dept_code, tax_id, posid, taid } = req.body
        var salt = bcrypt.genSaltSync(10);
var hash = bcrypt.hashSync(pass, salt);
        const newUser = await db.query(`insert into Employes(name, surname, last_name, email, password, pass_series, pass_num, who_get, dept_code, tax_id, PositionID, TypeAccessID) values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) RETURNING *`, [name, sur, lastn, email, pass, pass_series, pass_num, passget, dept_code, tax_id, posid, taid ])
        console.log("data is added (user)")
        res.json(newUser)

    }
    async getUsersRstrct(req, res){
        const users = await db.query(`select * from Employes`)
        res.json(users)
    }

    async getUser(req, res){
        const id = req.params.id
        const users = await db.query(`select * from Employes where id_emp =$1`, [id])
              res.json(users)

    }
    async getUserByEmail(req, res){
        const id = req.params.id
        const users = await db.query(`select * from Employes where email =$1`, [id])
              res.json(users)

    }

  
    // async updUser(req, res){
    //     const {id ,fio, nick, exp, prtf, city, phone, email, ps_id} = req.body
    //     const user = await db.query(`update finders set full_name_fndr = $1, nik_name = $2, experience = $3, portfolio = $4, city = $5, phone = $6, email = $7, position_id = $8 where id = $9 RETURNING *`, [fio, nick, exp, prtf, city, phone, email, ps_id, id])
    //     res.json(user.rows[0])
    // }

    async delUser(req, res){
        const id = req.params.id
        const user = await db.query('DELETE FROM Employes where id = $1', [id])
        res.json(user.rows[0])
    }
    // async getAdmins(req, res){
    //     const users = await db.query(`select * from admin_conf`)
    //     res.json(users)
    // }
    // async getAdmin(req, res){
    //     const id = req.params.id
    //       const users = await db.query(`select * from admin where name_admin =$1`, [id])
    //       res.json(users)

    // }
    // async createVacancy(req, res){}
    // async getVacancies(req, res){}
    // async getVacancy(req, res){}
    // async updVacancy(req, res){}
    // async createCompany(req, res){}
    // async getCompanies(req, res){}
    // async getCompany(req, res){}
    // async updCompany(req, res){}
    // async createPosition(req, res){}
    // async getPositions(req, res){}
    // async getPosition(req, res){}
    // async updPosition(req, res){}
}

module.exports = new UserController