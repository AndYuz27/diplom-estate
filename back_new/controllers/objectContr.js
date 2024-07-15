const db = require('../db');

console.log('controller is on (OBJECTS)')
class UserController {
    async setObject(req, res){
        const {nm, type, cnt_r, cnt_flr, adrs, catv, secr, sq_m, tbld, img, img2, img3, img4, img5, img6,cnt_type, price, crnc, upload, descr, date, tp_ap, link_videohost, type_videohost, coords, tBuy, intercom_avail,firealarm } = req.body
        const newUser = await db.query(`insert into catalog_estate(name_object, type_object, cnt_rooms, cnt_floors, address, catv_avail, security_avail,  sq_meters, tb_id,image1,image2,image3,image4,image5,image6,content_type, price, currency, who_upload, description, date_of_upload, typebuild_room, link_videohost, type_videohost, coords, type_buy,intercom_avail,firealarm) values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25, $26, $27, $28) RETURNING *`, [nm, type, cnt_r, cnt_flr, adrs, catv, secr, sq_m, tbld, img, img2, img3, img4, img5, img6,cnt_type, price, crnc, upload, descr, date, tp_ap, link_videohost, type_videohost, coords, tBuy, intercom_avail, firealarm ])
        console.log("data is added (catalog)")
        console.log(newUser)
        res.json(newUser)



    }
    async setNews(req, res){
        try{
        const {title, date, description, image } = req.body
        const data = await db.query(`insert into news(title, date, description, image) values ($1, $2, $3, $4) RETURNING *`, [title, date, description, image ])
        console.log("data is added (news)")
        console.log(data)
        res.json(data)
        }catch(err){
            console.log(err)
            res.json(err)
        }
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
    async getObjectsBySimlarAprt(req, res){
        let id = req.params.id
        const users = await db.query(`select catalog_estate.id, catalog_estate.image1, catalog_estate.price, catalog_estate.currency, catalog_estate.address, catalog_estate.cnt_floors, catalog_estate.cnt_rooms, type_building.id as id_bld,apartment.id as id_apr from catalog_estate INNER JOIN employes ON catalog_estate.who_upload = employes.id_emp inner join type_building on catalog_estate.tb_id = type_building.id
inner join apartment on catalog_estate.typebuild_room = apartment.id where apartment.id =$1`, [id])
        res.json(users)
    }

    async getTypeBuilds(req, res){
        const users = await db.query(`select * from type_building`)
        res.json(users)
    }
    async getTypeBuildsAprt(req, res){
        let id = req.params.id
        const users = await db.query(`select * from apartment where build_id = ${id}`)
        res.json(users)
    }
    async getObjectsType(req, res){
        let id = req.params.id
        const users = await db.query(`select * from catalog_estate where type_buy = ${id}`)
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
    
    async getTypesBuy(req, res){
        const users = await db.query(`select * from type_buy`)
        res.json(users)
    }

    async getOjectByEmpl(req, res){
        let id = req.params.id
        const users = await db.query(`select * from catalog_estate where who_upload = ${id}`)
        res.json(users)
    }

    async getObject(req, res){
            const id = req.params.id
            const users = await db.query(`select catalog_estate.id,
                 catalog_estate.name_object,
                 catalog_estate.type_object,
                 catalog_estate.cnt_rooms,
                 catalog_estate.cnt_floors,
                 catalog_estate.address,
                 catalog_estate.catv_avail,
                 catalog_estate.security_avail,
                 catalog_estate.sq_meters,
                 catalog_estate.tb_id,
                 catalog_estate.price,
                 catalog_estate.currency,
                 employes.name,
                 employes.surname,
                 employes.image_profile,
                 catalog_estate.description,
                 catalog_estate.date_of_upload,
                 catalog_estate.typebuild_room,
                 catalog_estate.link_videohost,
                 catalog_estate.intercom_avail,
                 catalog_estate.firealarm,
                 type_videohost,
                 coords,
                 type_buy,
                 type_building.id as id_tbld,
                 type_building.name_building,
                 type_building.floor_cnt,
                 type_building.elevator_norm,
                 type_building.elevator_large,
                 type_building.trash,
                 type_building.year_of_realise,
                 type_building.place_of_security,
                 type_building.gas_avail,
                 type_building.type_wall,
                 type_building.noise_isolation,
                 type_building.balcony,
                apartment.id as id_aprt,apartment.rooms,
                 apartment.sqm_lvroom,
                 apartment.avg_sqm_room,
                 apartment.balcony_type,
                 apartment.view_window,
                 apartment.view_balcony,
                 apartment.img_planing,
                 apartment.sep_bathroom
from catalog_estate INNER JOIN employes ON catalog_estate.who_upload = employes.id_emp full join type_building on catalog_estate.tb_id = type_building.id
full join apartment on catalog_estate.typebuild_room = apartment.id where catalog_estate.id =$1`, [id])
                  res.json(users)
        // }catch(err){
        //     console.log(err)
        //     res.json(err)
        // }


    }

    async getObjectImg(req, res){
        try{
            const id = req.params.id
            const users = await db.query(`select id, image1, image2, image3, image4, image5, image6 from catalog_estate where id =$1`, [id])
                  res.json(users)
        }catch(err){
            console.log(err)
            res.json(err)
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
    async delNews(req, res){
        const id = req.params.id
        const user = await db.query('DELETE FROM news where id = $1', [id])
        res.json(user.rows[0])
    }
}


//DELETE FROM Products WHERE id='Apple';
module.exports = new UserController