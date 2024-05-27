import React, { useEffect } from "react";
import './feedback.css'
import { AccessDenied_adminpage } from "../components/AccessDeniedForUsers";
import axios from "axios";
import { useState } from "react";
import { FBackList } from "../components/api";
import { useParams } from "react-router";

export function FeedbackAdminList(){

    const [tabl, setTable] = useState([])
    
    useEffect(() =>{
        axios.get(FBackList).then(res => {
            setTable(res.data.rows)
        }).catch(err=>{
            console.log(err)
        })
    })

    let admin_status = localStorage.getItem('isAuthCmp')

    if (admin_status === null){ // если нет админки, то запрещай доступ
        return <AccessDenied_adminpage/>
    }else{
    return(
        <div className="fback_list">
            <table className="fback_list_table">
                <tr>
                    <th>пользователь</th>
                    <th>Тема</th>
                    <th>Удалить?</th>
                </tr>
                {tabl.map((e) => {
                    return (
                <tr key={e.id}>
                    <td>{e.name}</td>
                    <td onClick={() => window.location.href=`/admin/feedback/${e.id}`}>{e.theme}</td>
                    <td><button>ДА</button></td>
                </tr>
                    )
                })}

            </table>            
        </div>
    )
    }
}
export function FeedbackAdminPageQestion() {
    const {id} = useParams()
    const [data, setData]= useState([])

    useEffect(()=>{
        axios.get('http://localhost:8080/api/fback/'+id).then(res => {
            console.log(res.data.rows[0])
            setData(res.data.rows)
        }).catch(err=>{
            console.log('Ошибка вывода',err)
        })
    })

    return(
        <div className="fback_quest">
            {data.map((e) => {
                return(
                                <div className="fback_quest_wrapper">
                <h2>Обратная связь от пользователя {e.name}</h2>

            <div className="fback_quest_wrapper_message">
                <h3>{e.theme}</h3>
                <h4>Объект: {e.object}</h4>
                <p>{e.message}</p>
            </div>
            <div className="fback_quest_wrapper_btns">
                <button className="fback_quest_wrapper_btns_link" onClick={() => alert('test')}>ответить по Email</button>
                <button className="fback_quest_wrapper_btns_link" onClick={() => alert('test')}>отобразить номер телефона</button>
            </div>
            </div>
                )
            })}

        </div>
    )
}