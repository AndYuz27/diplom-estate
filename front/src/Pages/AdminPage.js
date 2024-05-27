import React, { useState } from "react";
import { AccessDenied_adminpage } from "../components/AccessDeniedForUsers";
import { Link, useParams } from "react-router-dom";
import './adminstyle.css'
import axios from "axios";

export default function AdminPage() {

    const [data, setData] = React.useState([])
    const [id_user, setID] = React.useState()

let id = localStorage.getItem('cmp_name')
    React.useEffect(() => {
        if ( id ) {
            axios.get(`http://localhost:8080/api/user/em/${id}`)
                .then(res => {
                    console.log(res.data.rows)
                    setData(res.data.rows)
                    setID(localStorage.setItem('id_u', res.data.rows[0].id_emp))
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }, [ id ]);
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
        <div className="admin-page" style={ghfgh67546}>
            <div className="admin-page__left">
                <Link className="admin-page__left_btn"  to="/admin/upload"><i class="fa-solid fa-download"></i> Загрузка данных</Link>
                <Link className="admin-page__left_btn"  to="/admin/add-users"> <i class="fa-solid fa-user-plus"></i>Добавление Пользователей</Link>
                <Link className="admin-page__left_btn"  to="/admin/table"><i class="fa-solid fa-table"></i> Таблица объявлений недвижимости</Link>
                <Link className="admin-page__left_btn" to="/admin/chat"> <i className="fa-solid fa-message"></i>Чат с клиентами</Link>
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
                    <button className="admin-page__right_menu_btn"><i className="fa-solid fa-message"></i>Сообщения</button>
                </div>
            </div>
                )
            })}
            

        </div>
    )
}
} 