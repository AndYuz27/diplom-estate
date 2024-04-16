import { useState } from "react"
import osip from '../assets/osip.jpg' 
import valakas from '../assets/valakas.jpg'
import "./chat.css" 
export default function Chat(){

    const [messages, setMessages]= useState([]);
    const [isEmp, setIsEmp]= useState(false);
    const [isLoad, setIsLoad]= useState(false);

    return(
        <div className="chat">
            <h2>Переписка с Jane Mainson</h2>
            <div className="chat_list">
                <div className="chat_list_item">
                    <div className="chat_list_item_userdata">
                        <img className="chat_list_item_userdata_img" src={osip} alt="osip"/>
                        <span className="chat_list_item_userdata_name">Кириллов Осип</span>
                    </div>
                    <p className="chat_list_item_mesaage">Здраствуйте, у вас есть квартиры, которые могут подойти под ремонт?</p>
                </div>
                <div className="chat_list_item">
                    <div className="chat_list_item_userdata">
                        <img className="chat_list_item_userdata_img" src={valakas} alt="valakas"/>
                        <span className="chat_list_item_userdata_name">Глад Валакас</span>
                    </div>
                    <p className="chat_list_item_mesaage">Здраствуйте, у нас есть квартиры под ремонт, мы скоро зальём в сайт</p>
                </div>
            </div>
            <form className="chat_form">
                <input className="chat_form_inp" type="text" placeholder="сообщение..."></input>
                <button className="chat_form_btn">отправить</button>
            </form>
        </div>
    )
}