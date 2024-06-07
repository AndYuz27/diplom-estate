import React, { useState } from "react";
import { AccessDenied_adminpage } from "../components/AccessDeniedForUsers";
import { Link, useParams } from "react-router-dom";
import './adminstyle.css'
import axios from "axios";

export default function AdminPage() {

    const [data, setData] = React.useState([])
    const [est_emp, setest_emp] = React.useState([])
    const [id_user, setID] = React.useState(0)

let id = localStorage.getItem('cmp_name')
    React.useEffect(() => {
        if ( id ) {
            axios.get(`http://localhost:8080/api/user/em/${id}`)
                .then(res => {
                    console.log(res.data.rows)
                    setData(res.data.rows)
                    setID(res.data.rows[0].id_emp)
                    setID(res.data.rows[0].id_emp)
                    localStorage.setItem('Emp_id', (res.data.rows[0].id_emp))
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }, [ id ]);

    React.useEffect(() => {
        if ( id_user ) {
            axios.get(`http://localhost:8080/api/object_emp/${id_user}`)
                .then(res => {
                    console.log(res.data.rows)
                    setest_emp(res.data.rows)
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }, [ id_user ]);
// console.log(localStorage.getItem('id_u'))
    let admin_status = localStorage.getItem('isAuthCmp')
    console.log(admin_status)

    let ghfgh67546 = {
        display: "flex",
        justifyContent: "center",
        alignItems: 'center',
        textAlign: 'center'

    }

    function DeAuth(){ // Функция выхода из системы
        localStorage.removeItem('isAuthCmp')
        window.location.href=`/`;
    }

if (admin_status === null){ // если нет админки, то запрещай доступ
    return <AccessDenied_adminpage/>
}else{
    return(
        <div className="admin-page" >
            <div className="admin_wrapper" style={ghfgh67546}>
                            <div className="admin-page__left" >
                <Link className="admin-page__left_btn"  to="/admin/upload"><i class="fa-solid fa-download"></i> Загрузка данных</Link>
                <Link className="admin-page__left_btn"  to="/admin/add-users"> <i class="fa-solid fa-user-plus"></i>Добавление Пользователей</Link>
                <Link className="admin-page__left_btn"  to="/admin/table"><i class="fa-solid fa-table"></i> Таблица объявлений недвижимости</Link>
                {/* <Link className="admin-page__left_btn" to="/admin/chat"> <i className="fa-solid fa-message"></i>Чат с клиентами</Link> */}
                <Link className="admin-page__left_btn" to="/admin/feedback"> <i className="fa-solid fa-comments"></i>Обратная связь</Link>
            </div>
            {data.map((e) => {
                return( 
                    <div className="admin-page__right">
                <img className="admin-page__right_img" src={e.image_profile} alt="woman"/>
                <h3 className="admin-page__right_fio">{e.surname} {e.name} {e.last_name}</h3>
                <h4 className="admin-page__right_position">Должность: Риелтор</h4>
                <div className="admin-page__right_menu">
                    <button className="admin-page__right_menu_btn" onClick={() => DeAuth()}><i className="fa-solid fa-door-open"></i>Выйти из ЛК</button>
                    <button className="admin-page__right_menu_btn" onClick={()=> window.location.href='/admin/chatlist'}><i className="fa-solid fa-message" ></i>Сообщения</button>
                </div>
            </div>
                )
            })}
            </div>
            <div className="admin_page_info">
                <div className="admin_page_info_objects">
                    <h2>Ваши объявления</h2>
                    <div className="admin_page_info_objects_wrapper">
                    {est_emp.map((e) => {return <div className="catalog_list_item" key={e.id} onClick={() => window.location.href =  `/catalog/${e.id}`}>
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
                <div className="chat_list">
            <h2>Чат сайта</h2>
            <div className="chat_list_wrapper">
                <div className="chat_list_item">
                    <h3 className="chat_item_title">Павел Щаников</h3>
                    <p className="chat_item_last_message">ОК, я понял, спасибо за совет!!!</p>
                </div>
            </div>
        </div>
            </div>
        </div>
    )
}
} 