import React from 'react'
import { Link } from 'react-router-dom'
import doNotEnter from '../assets/do_not_enter.jpg'
export function AccessDenied_adminpage() {
    return(
        <div>
            <h1>Доступ Запрещён</h1>
            <p style={{width: "480px"}}>Доступ к данной странице запрещен обычным пользователям! Если вы являйтесь администратором, то <Link to="/auth-admin"><b>войдите под учётной записью админа</b></Link></p>
            <img src={doNotEnter} alt='DO NOT ENTER' width={480} />
        </div>
    )
}