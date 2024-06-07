const db = require('../db');

console.log('controller is on (Chat)')
class ChatController {
//     async setObject(req, res){
//         const {nm, type, cnt_r, cnt_flr, adrs, catv, secr, el_n, el_l, sq_m, t_bld, img, img2, img3, img4, img5, img6,cnt_type, price, crnc, upload, descr, date, istbld, t_bld_r, link_videohost, type_videohost, coords } = req.body
//         const newUser = await db.query(`insert into catalog_estate(name_object, type_object, cnt_rooms, cnt_floors, address, catv_avail, security_avail, elevator_norm, elevator_large, sq_meters, type_building,image1,image2,image3,image4,image5,image6,content_type, price, currency, who_upload, description, date_of_upload, istypebuilding, typebuild_room, link_videohost, type_videohost, coords) values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25, $26, $27, $28) RETURNING *`, [nm, type, cnt_r, cnt_flr, adrs, catv, secr, el_n, el_l, sq_m, t_bld, img, img2, img3, img4, img5, img6,cnt_type, price, crnc, upload, descr, date, istbld, t_bld_r, link_videohost, type_videohost, coords ])
//         console.log("data is added (catalog)")
//         console.log(newUser)
//         res.json(newUser)


/*

/*select id, uid_msg, (SELECT msg FROM message where id_chat = uid_msg ORDER BY Id DESC LIMIT 1), (SELECT id_client FROM message where id_chat = uid_msg AND id_client=1 ORDER
    BY id_client DESC
 LIMIT 1) from chat */
 /*


       id_client: '',
        id_empl:  '',
        link:  '',
        msg:  '',
        id_chat:  ''
*/
//     }
    async StartChat(req, res){
        let id = req.params.id
        try{
        const data = await db.query(`insert into chat(uid_msg) values('${id}')`)
            res.json(data)
        }catch(err){
            res.json(err)
        }
    }
    async ChatlistClient(req, res){
        let id = req.params.id
        try{
            const data = await db.query(`SELECT  ch.id, ch.uid_msg, mo.msg, mo.id_client, mo.id_empl
FROM    chat as ch
JOIN    message as mo
ON      mo.id =
        (
        SELECT  id
        FROM    message as mi
        WHERE   mi.id_chat = ch.uid_msg
        ORDER BY
                mi.id_chat DESC, mi.id DESC
        LIMIT 1
        ) where mo.id_client = ${id}
`)
            // const data = await db.query(`select id, uid_msg, (SELECT msg FROM message where id_chat = uid_msg ORDER BY Id DESC LIMIT 1), (SELECT id_client FROM message where id_chat = uid_msg AND id_client=${id} ORDER BY id_client DESC LIMIT 1) from chat`)
            res.json(data)
        }catch(err){
            res.json(err)
        }
    }
    
    async ChatlistEmpl(req, res){
        try{
            const data = await db.query(`SELECT  ch.id, ch.uid_msg, mo.msg, mo.id_client, mo.id_empl
FROM    chat as ch
JOIN    message as mo
ON      mo.id =
        (
        SELECT  id
        FROM    message as mi
        WHERE   mi.id_chat = ch.uid_msg
        ORDER BY
                mi.id_chat DESC, mi.id DESC
        LIMIT 1
        )
`)
            // const data = await db.query(`select id, uid_msg, (SELECT msg FROM message where id_chat = uid_msg ORDER BY Id DESC LIMIT 1), (SELECT id_client FROM message where id_chat = uid_msg AND id_client=${id} ORDER BY id_client DESC LIMIT 1) from chat`)
            res.json(data)
        }catch(err){
            res.json(err)
        }
    }

    async SetMessage(req, res){
        let {id_client, id_empl, link,msg,id_chat} = req.body
        try{
        const data = await db.query(`insert into message(id_client,id_empl,link, msg, id_chat) values($1, $2, $3, $4, $5)`, [id_client, id_empl, link,msg,id_chat])
            res.json(data)
        }catch(err){
            res.json(err)
        }
    }
    async getMessagesByUUID(req, res){
        let id = req.params.id
        try{
            const newUser = await db.query(`select message.id, message.id_empl, message.id_client, message.msg, employes.name as name_empl, employes.surname as surname_empl, clients.name, clients.surname, message.link from message
            LEFT JOIN employes ON employes.id_emp = message.id_empl
            LEFT JOIN clients ON clients.id = message.id_client where message.id_chat = $1;
            `, [id])
            console.log("data is added (catalog)")
            console.log(newUser)
            res.json(newUser)
        }catch(err){
            res.json(err)
        }




    }

    async getMessagesLastByID(req, res){
        let id = req.params.id
        try{
            const newUser = await db.query(`select message.id, message.msg, employes.name as name_empl, employes.surname as surname_empl, clients.name, clients.surname, message.link from message
            LEFT JOIN employes ON employes.id_emp = message.id_empl
            LEFT JOIN clients ON clients.id = message.id_client where message.id_client = $1 ORDER BY message.id DESC LIMIT 1;;
            `, [id])
            console.log("data is added (catalog)")
            console.log(newUser)
            res.json(newUser)
        }catch(err){
            res.json(err)
        }




    }
}


module.exports = new ChatController