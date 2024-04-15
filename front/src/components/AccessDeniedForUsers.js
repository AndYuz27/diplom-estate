import React from 'react'
import { Link } from 'react-router-dom'
import doNotEnter from '../assets/do_not_enter.jpg'
import "../App.css"
export function AccessDenied_adminpage() {
    return(
        <div className='admin_denied'>
            <h2>Доступ Запрещён</h2>
            <p style={{width: "480px"}}>Доступ к данной странице запрещен обычным пользователям! Если вы являйтесь администратором, то <Link to="/auth/empl"><b>войдите под учётной записью админа</b></Link></p>
            <img src={doNotEnter} alt='DO NOT ENTER' width={480} />
        </div>
    )
}