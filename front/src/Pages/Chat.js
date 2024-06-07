import React, { useEffect, useState } from "react"
import osip from '../assets/osip.jpg' 
import valakas from '../assets/valakas.jpg'
import "./chat.css" 
import axios from "axios"
import { useParams } from "react-router"
import { v4 as uuid } from "uuid";

export default function Chat(){

    const {uid} = useParams()

    const [messages, setMessages]= useState([]);
    const [clientData, setClientData]= useState([]);
    const [idEmp, setIdEmp]= useState(0);
    const [idClient, setIdClient]= useState(0);
    const [messg, setMessg]= useState(0);
    const [isLoad, setIsLoad]= useState(false);
///

useEffect(()=>{
    if(uid){
    axios.get(`http://localhost:8080/api/chat/msg/${uid}`)
    .then(res=> {
        setMessages(res.data.rows)
        // console.log(res.data.rows)

    }).catch(err => {
        console.log(err)
    })}
})


    React.useEffect(()=>{
        axios.get(`http://localhost:8080/api/user_cli/${localStorage.getItem('email_client')}`)
        .then(res=> {
            setClientData(res.data.rows)
            setIdClient(res.data.rows[0].id)

        }).catch(err => {
            console.log(err)
        })}, []);


    const [data, setData] = useState({
        id_client: '',
        id_empl:  '',
        link:  '',
        msg:  '',
        id_chat:  ''
        })
console.log(idClient)
        function submit(e) {
            if(idEmp > 0 && idClient > 0){
                alert('Вы вошли как сортрудник и клиент в одном месте, пожалуйста выйдите в одной из системы чтобы отправить сообщение')
            }else{
            try{
            e.preventDefault();
            axios.post(`http://localhost:8080/api/chat/msg/`, {
                id_client: idClient,
                id_empl:  idEmp,
                link:  '',
                msg: messg,
                id_chat:  uid
            }).then(res => {
                console.log(res.data)
            })
        }catch(err){
                console.log('ошибка загрузки в базу\n', err)
                alert('ошибка загрузки данных')
            }
            }
        }

    return(
        <div className="chat">
            <div className="chat_wrapper">

            <h2 style={{textAlign: 'center'}}>Переписка</h2>
            <div className="chat_list">

                {messages.map((e) => {
                    return(
                    <div className="chat_list_item">
                        <div className="chat_list_item_userdata">
                            {/* <img className="chat_list_item_userdata_img" src={osip} alt="osip"/> */}
                            <span className="chat_list_item_userdata_name">{e.name_empl || e.name} {e.surname_empl || e.surname}</span>
                        </div>
                        <p className="chat_list_item_mesaage">{e.msg}</p>
                    </div>
                    )
                })}
            </div>
            <form className="chat_form" onSubmit={submit}>
                <input className="chat_form_inp" onChange={(e)=> setMessg(e.target.value)} type="text" placeholder="сообщение..."></input>
                <button className="chat_form_btn">отправить</button>
            </form>
            </div>
        </div>
    )
}

export function ChatEmpl(){

    const {uid} = useParams()

    const [messages, setMessages]= useState([]);
    const [clientData, setClientData]= useState([]);
    const [idEmp, setIdEmp]= useState(0);
    const [idClient, setIdClient]= useState(0);

    const [messg, setMessg]= useState(0);
    // const [isLoad, setIsLoad]= useState(false);

    let eee_id = localStorage.getItem('Emp_id')
///

useEffect(()=>{
    if(uid){
    axios.get(`http://localhost:8080/api/chat/msg/${uid}`)
    .then(res=> {
        setMessages(res.data.rows)
        setIdClient(res.data.rows[0].id_client)

        // console.log(res.data.rows)

    }).catch(err => {
        console.log(err)
    })}
})



    const [data, setData] = useState({
        id_client: '',
        id_empl:  '',
        link:  '',
        msg:  '',
        id_chat:  ''
        })
console.log(idClient)
        function submit(e) {
  
            try{
            e.preventDefault();
            axios.post(`http://localhost:8080/api/chat/msg/`, {
                id_client: idClient,
                id_empl:  eee_id,
                link:  '',
                msg: messg,
                id_chat:  uid
            }).then(res => {
                console.log(res.data)
            })
        }catch(err){
                console.log('ошибка загрузки в базу\n', err)
                alert('ошибка загрузки данных')
            
            }
        }

    return(
        <div className="chat">
        <div className="chat_wrapper">

        <h2 style={{textAlign: 'center'}}>Переписка</h2>
        <div className="chat_list">
            {messages.map((e) => {
                return(
                <div className="chat_list_item">
                    <div className="chat_list_item_userdata">
                        {/* <img className="chat_list_item_userdata_img" src={osip} alt="osip"/> */}
                        <span className="chat_list_item_userdata_name">{e.name_empl || e.name} {e.surname_empl || e.surname}</span>
                    </div>
                    <p className="chat_list_item_mesaage">{e.msg}</p>
                </div>
                )
            })}
        </div>
        <form className="chat_form" onSubmit={submit}>
            <input className="chat_form_inp" onChange={(e)=> setMessg(e.target.value)} type="text" placeholder="сообщение..."></input>
            <button className="chat_form_btn">отправить</button>
        </form>
        </div>
    </div>
    )
}

export function ChatList_client(){
    const [idClient, setIdClient]= useState(0);
    const [msgList, setMsgList]= useState([]);

    React.useEffect(()=>{
        axios.get(`http://localhost:8080/api/user_cli/${localStorage.getItem('email_client')}`)
        .then(res=> {
            setIdClient(res.data.rows[0].id)
            console.log(res.data.rows[0].id)

        }).catch(err => {
            console.log(err)
        })}, []);

        React.useEffect(()=>{
            axios.get(`http://localhost:8080/api/chat/msg_list/${idClient}`)
            .then(res=> {
                setMsgList(res.data.rows)
                // console.log(res.data.rows)
    
            }).catch(err => {
                console.log(err)
            })});

    const unique_id = uuid();

    function StrtChat(){
        axios.get(`http://localhost:8080/api/chat/msg_new/${unique_id}`).then(res=> {
            console.log(res.data)

        }).catch(err => {
            console.log(err)
        })
        window.location.href=`/client/chat/${unique_id}`

    }

    return(
        <div className="chat_list_a">
            <h2>Чат сайта</h2>
            <button onClick={() =>StrtChat()}>Начать новую переписку</button>
            <div className="chat_list_wrapper">
                {msgList.map((e) => {
                    return(
                    <div className="chat_list_item" onClick={ ()=>window.location.href = `/client/chat/${e.uid_msg}`}>
                        <h3 className="chat_item_title">Сообщение {e.uid_msg}</h3>
                        <p className="chat_item_last_message">{e.msg}</p>
                    </div>
                    )
                })}

                
            </div>
        </div>
    )
}


export function ChatList_empl(){
    const [idClient, setIdClient]= useState(0);
    const [msgList, setMsgList]= useState([]);



        React.useEffect(()=>{
            axios.get(`http://localhost:8080/api/chat/msg_list_empl/`)
            .then(res=> {
                setMsgList(res.data.rows)
    
            }).catch(err => {
                console.log(err)
            })});

    const unique_id = uuid();

    function StrtChat(){
        axios.get(`http://localhost:8080/api/chat/msg_new/${unique_id}`).then(res=> {
            console.log(res.data)

        }).catch(err => {
            console.log(err)
        })
        window.location.href=`/client/chat/${unique_id}`

    }

    return(
        <div className="chat_list_a">
            <h2>Чат сайта</h2>
            <button onClick={() =>StrtChat()}>Начать новую переписку</button>
            <div className="chat_list_wrapper">
                {msgList.map((e) => {
                    return(
                    <div className="chat_list_item" onClick={ ()=>window.location.href = `/admin/chat/${e.uid_msg}`}>
                        <h3 className="chat_item_title">Сообщение {e.uid_msg}</h3>
                        <p className="chat_item_last_message">{e.msg}</p>
                    </div>
                    )
                })}

                
            </div>
        </div>
    )
}


