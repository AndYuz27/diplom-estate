import React from "react";
import { AccessDenied_adminpage } from "../components/AccessDeniedForUsers";
import { Link } from "react-router-dom";


export default function AdminPage() {

    let admin_status = "1"

    let ghfgh67546 = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: 'center',
        textAlign: 'center'

    }

if (admin_status === null){
    return <AccessDenied_adminpage/>
}else{
    return(
        <div className="admin-page" style={ghfgh67546}>
            <Link to="/admin/upload">Загрузка данных</Link>
            <Link to="/admin/add-users">Добавление Пользователей</Link>
            <Link to="/admin/est_table">Таблица объявлений недвижимости</Link>
        </div>
    )
}
} 