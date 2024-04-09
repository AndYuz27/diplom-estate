import React from "react";
import { AccessDenied_adminpage } from "../components/AccessDeniedForUsers";
import { Link } from "react-router-dom";
import './adminstyle.css'


export default function AdminPage() {

    let admin_status = "1"

    let ghfgh67546 = {
        display: "flex",
        justifyContent: "center",
        alignItems: 'center',
        textAlign: 'center'

    }

if (admin_status === null){
    return <AccessDenied_adminpage/>
}else{
    return(
        <div className="admin-page" style={ghfgh67546}>
            <div className="admin-page__left">
                <Link className="admin-page__left_btn"  to="/admin/upload"><i class="fa-solid fa-download"></i> Загрузка данных</Link>
                <Link className="admin-page__left_btn"  to="/admin/add-users"> <i class="fa-solid fa-user-plus"></i>Добавление Пользователей</Link>
                <Link className="admin-page__left_btn"  to="/admin/table"><i class="fa-solid fa-table"></i> Таблица объявлений недвижимости</Link>
                <Link className="admin-page__left_btn" to="/admin/chat"> <i className="fa-solid fa-message"></i>Чат с клиентами</Link>
            </div>
            <div className="admin-page__right">
                <img className="admin-page__right_img" src="https://img.freepik.com/free-photo/enchanting-glamorous-girl-looking-shoulder-with-shy-smile-fashionable-young-caucasian-woman-black-clothes_197531-8465.jpg?t=st=1711919080~exp=1711922680~hmac=3d82874722a2fd10212501ffe627ce683dd1141bb4739d467529c825afa96f5b&w=900" alt="woman"/>
                <h3 className="admin-page__right_fio">Маркова Снежана Максимовна</h3>
                <h4 className="admin-page__right_position">Должность: Риелтор</h4>
                <div className="admin-page__right_menu">
                    <button className="admin-page__right_menu_btn"><i className="fa-solid fa-door-open"></i>Выйти из ЛК</button>
                    <button className="admin-page__right_menu_btn"><i className="fa-solid fa-message"></i>Сообщения</button>
                </div>
            </div>

        </div>
    )
}
} 