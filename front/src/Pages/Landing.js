import React from "react"
import '../App.css'
import '../AAA.css'
import bg_img from "../assets/bg.jpg"
import house_img from "../assets/house.png"
import field_img from "../assets/field.png"
import sumhouse_img from "../assets/summer_house.png"
import aprt_img from "../assets/building.png"
import prlst_img from "../assets/price_list.png"
import ChooseItem from "../components/ChooseItem"
import Advantage from "../components/Advantage"
import same_planing from '../assets/same_planing.jpg'
export default function Landing(){
    let get_img = {
        backgroundImage: `url(${bg_img})`,
        backgroundPosition: "center",
        backgroundSize: "cover"
    }
    // alert('Данный проект разрабатывается, в учебных целях, и данные об объявлении случайны...')
    return(
        <div className="Landing">
            <div className="img_1" style={get_img}>
                <h2 className="fgg">Добро пожаловать на сайт агентсва недвижимости "Стромынский тракт"</h2>
                <div className="btns_img">
                <button style={{margin: "32px", fontSize: "14pt", padding: "8px", border:"none", borderRadius:"12px", backgroundColor: "lightgreen", boxShadow: "0px 0px 25px black", cursor: "pointer"}} onClick={() => window.location.href = "/catalog"}>Найти недвижимость</button>
                <button style={{margin: "32px", fontSize: "14pt", padding: "8px", border:"none", borderRadius:"12px", backgroundColor: "lightgreen", boxShadow: "0px 0px 25px black", cursor: "pointer"}} onClick={() => alert('Under Construction')}>Связаться с сотрудниками</button>

                </div>
            </div>
            <div className="choose_type">
                <h2>Выберите тип недвижимости</h2>
                <div className="choose_type_items">
                    <ChooseItem icon={house_img} name_icon="Частные дома" link_icon="/catalog/sep/Загородный дом"/>
                    <ChooseItem icon={aprt_img} name_icon="Квартиры" link_icon="/catalog/sep/квартира"/>
                    <ChooseItem icon={sumhouse_img} name_icon="Дачи" link_icon="/catalog/sep/Дачи"/>
                    <ChooseItem icon={field_img} name_icon="Земельные Участки" link_icon="/catalog/sep/Земельные участки"/>
                </div>
            </div>
            <div className="choose_type">
                <h2>Услуги Агентства Недвижимости</h2>
                <div className="choose_type_items">
                    <ChooseItem icon={house_img} name_icon="Частные дома" link_icon="/catalog/sep/Загородный дом"/>
                    <ChooseItem icon={aprt_img} name_icon="Квартиры" link_icon="/catalog/sep/квартира"/>
                    <ChooseItem icon={sumhouse_img} name_icon="Дачи" link_icon="/catalog/sep/Дачи"/>
                    <ChooseItem icon={prlst_img} name_icon="Прайс-лист услуг" link_icon="/6789"/>
                </div>
            </div>
            <div className="advantage">
                <h2 className="advantage_name">Наши преимущества</h2> 
                <div className="advantage_list">
                    <Advantage name='Внесение аванса онлайн' img="https://6422570.ru/media/uploads/2018/12/05/thumbnail-f5d80777051662bb589d265acd227538.jpeg" desr="На нашем сайте вы можете внести аванс онлайн"/>
                    <Advantage name='поиск аналогичных объектов с той же планировкой' img={same_planing} desr="поиск аналогичных объектов с той же планировкой"/>
                    <Advantage name='Внесение аванса онлайн' img="https://6422570.ru/media/uploads/2018/12/05/thumbnail-f5d80777051662bb589d265acd227538.jpeg" desr="На нашем сайте вы можете внести аванс онлайн"/>
                    <Advantage name='Внесение аванса онлайн' img="https://6422570.ru/media/uploads/2018/12/05/thumbnail-f5d80777051662bb589d265acd227538.jpeg" desr="На нашем сайте вы можете внести аванс онлайн"/>
                </div>
            </div>
        </div>
    )
}