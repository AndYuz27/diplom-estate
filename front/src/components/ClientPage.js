import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";import { Link } from "react-router-dom";
import '../Pages/adminstyle.css'


export default function ClientPage(){
    // let {id} = useParams()
    const [dataUser, setDataUser] = useState([])
    const [dataEst, setDataEst] = useState([])
    const [id_user, setID] = useState('')

    let emailDataUser = localStorage.getItem('email_client')
    let auth_staus = localStorage.getItem('isAuthClient')

    React.useEffect(() => {
        if ( emailDataUser ) {
            axios.get(`http://localhost:8080/api/user_cli/${emailDataUser}`)
                .then(res => {
                    console.log(res.data.rows)
                    setDataUser(res.data.rows)
                    setID(res.data.rows[0].id)
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }, [ emailDataUser ]);

    React.useEffect(() => {
        if ( id_user ) {
            axios.get(`http://localhost:8080/api/object_cl/${id_user}`)
                .then(res => {
                    console.log(res.data.rows)
                    setDataEst(res.data.rows)
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }, [ id_user ]);
    
    let ghfgh67546 = {
        display: "flex",
        justifyContent: "center",
        alignItems: 'flex-start',
        textAlign: 'center'

    }

    function DeAuth(){ // Функция выхода из системы
        localStorage.removeItem('email_client')
        localStorage.removeItem('isAuthClient')
        window.location.href=`/`;
    }


    return(
        <div className="admin-page" >
            <div className="admin_wrapper" style={ghfgh67546}>
                            <div className="admin-page__left_a" >
                                <h2>Избранное</h2>
                                <div className="admin_page_info_objects_wrapper">
                    {dataEst.map((e) => {return <div className="catalog_list_item" key={e.id} onClick={() => window.location.href =  `/catalog/${e.id}`}>
                <div className="catalog_list_item-img">
                        <img className="catalog_list_item-img-a" src={e.image1} width="320px" alt="estate"/>
                    </div>
                    <div className="catalog_list_item-short-info">
                        <h2 className="catalog_list_item-short-info__hdr-text">{e.name_object}</h2>
                        <p className="catalog_list_item-short-info__text">{e.price} {e.currency}</p>
                        <p className="catalog_list_item-short-info__location">{e.address}</p>
                        <p className="catalog_list_item-short-info__floor">{e.cnt_floors} этаж  {e.cnt_rooms} комн.</p>
                    </div>
                            </div>})}
                    </div>
            </div>
            {dataUser.map((e) => {
                return( 
                    <div className="admin-page__right">
                <img className="admin-page__right_img" src={e.image !== null ? e.image : "https://velaxom.ru/assets/images/rasprodazha/kessler-parts/no-image.png"}alt="avatar"/>
                <h3 className="admin-page__right_fio">{e.surname} {e.name} {e.last_name}</h3>
                <div className="admin-page__right_menu">
                    <button className="admin-page__right_menu_btn" onClick={() => DeAuth()}><i className="fa-solid fa-door-open"></i>Выйти из ЛК</button>
                    <button className="admin-page__right_menu_btn" onClick={() => window.location.href="/client/chatlist"}><i className="fa-solid fa-message"></i>Сообщения</button>
                </div>
            </div>
                )
            })}
            </div>
        </div>
    )
}
