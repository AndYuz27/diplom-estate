const db = require('../db');

console.log('controller is on (OBJECTS)')
class UserController {
    async setObject(req, res){
        const {nm, type, cnt_r, cnt_flr, adrs, catv, secr, el_n, el_l, sq_m, t_bld, img, img2, img3, img4, img5, img6,cnt_type, price, crnc, upload, descr, date, istbld, t_bld_r, link_videohost, type_videohost, coords } = req.body
        const newUser = await db.query(`insert into catalog_estate(name_object, type_object, cnt_rooms, cnt_floors, address, catv_avail, security_avail, elevator_norm, elevator_large, sq_meters, type_building,image1,image2,image3,image4,image5,image6,content_type, price, currency, who_upload, description, date_of_upload, istypebuilding, typebuild_room, link_videohost, type_videohost, coords) values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25, $26, $27, $28) RETURNING *`, [nm, type, cnt_r, cnt_flr, adrs, catv, secr, el_n, el_l, sq_m, t_bld, img, img2, img3, img4, img5, img6,cnt_type, price, crnc, upload, descr, date, istbld, t_bld_r, link_videohost, type_videohost, coords ])
        console.log("data is added (catalog)")
        console.log(newUser)
        res.json(newUser)



    }

    /*
    select favorite_client.id, catalog_estate.name_object,
catalog_estate.price,catalog_estate.address,
catalog_estate.cnt_rooms, catalog_estate.cnt_floors from favorite_client
join catalog_estate ON catalog_estate.id = favorite_client.id_estate
where favorite_client.id_user = 3;
    */
    async getObjects(req, res){
        const users = await db.query(`select * from catalog_estate`)
        res.json(users)
    }
    async getNews(req, res){
        const users = await db.query(`select * from news`)
        res.json(users)
    }
    async getNewsById(req, res){
        let id = req.params.id
        const users = await db.query(`select * from news where id = $1`, [id])
        res.json(users)
    }
    async getObjsClient(req, res){
        let id = req.params.id
        const users = await db.query(`select favorite_client.id, catalog_estate.name_object,
        catalog_estate.price,catalog_estate.address,
        catalog_estate.cnt_rooms, catalog_estate.cnt_floors, catalog_estate.image1 from favorite_client
        join catalog_estate ON catalog_estate.id = favorite_client.id_estate
        where favorite_client.id_user = $1`, [id])
        res.json(users)
    }
    async sendFback(req, res){
        try{
                    const {nm, email, phone, theme, object, message } = req.body
        const newUser = await db.query(`insert into feedback(name,email, phone, theme, object, message ) values ($1, $2, $3, $4, $5, $6) RETURNING *`, [nm, email, phone, theme, object, message ])
        console.log("data is added (catalog)")
        console.log(newUser)
        res.status(200).json(newUser)
        }catch(err){
            res.status(400)
            console.log('Ошибка на с запросом\nкод\n', err)
        }


    }
    async getFeedback(req, res) {
        try{
            const aaa = await db.query('select * from feedback')
        res.status(200).json(aaa)
        }catch(err){
            res.status(400)
            console.log('Ошибка на с запросом\nкод\n', err)
        }
        
    }
    async getFeedbackSingle(req, res) {
        try{
            const id = req.params.id
            const aaa = await db.query('select * from feedback where id = $1', [id])
        res.status(200).json(aaa)
        }catch(err){
            res.status(400)
            console.log('Ошибка на с запросом\nкод\n', err)
        }
        
    }



    async delFeedback(req, res){
        const id = req.params.id
        const user = await db.query('DELETE FROM feedback where id = $1', [id])
        res.json(user.rows[0])
    }

    async getObjectsServe(req, res){
        const users = await db.query(`select * from services_estate`)
        res.json(users)
    }

    async getTypesEstate(req, res){
        const users = await db.query(`select * from type_estate`)
        res.json(users)
    }
    
    async getCurrency(req, res){
        const users = await db.query(`select * from type_estate`)
        res.json(users)
    }

    async getOjectByEmpl(req, res){
        let id = req.params.id
        const users = await db.query(`select * from catalog_estate where who_upload = ${id}`)
        res.json(users)
    }

    async getObject(req, res){
        try{
            const id = req.params.id
            const users = await db.query(`select id, catalog_estate.name_object,catalog_estate.type_object,catalog_estate.cnt_rooms,catalog_estate.cnt_floors,catalog_estate.address,catalog_estate.catv_avail,catalog_estate.security_avail, catalog_estate.elevator_norm, catalog_estate.elevator_large, catalog_estate.sq_meters, catalog_estate.type_building, catalog_estate.price, catalog_estate.currency, employes.name, employes.surname, employes.image_profile ,catalog_estate.description,catalog_estate.date_of_upload,catalog_estate.istypebuilding,catalog_estate.typebuild_room, catalog_estate.link_videohost, type_videohost, coords from catalog_estate INNER JOIN employes ON catalog_estate.who_upload = employes.id_emp where id =$1`, [id])
                  res.json(users)
        }catch(err){
            console.log(err)
            res.sendCode(400)
        }


    }

    async getObjectImg(req, res){
        try{
            const id = req.params.id
            const users = await db.query(`select id, image1, image2, image3, image4, image5, image6 from catalog_estate where id =$1`, [id])
                  res.json(users)
        }catch(err){
            console.log(err)
            res.sendCode(400)
        }


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
//DELETE FROM Products WHERE id='Apple';
module.exports = new UserController