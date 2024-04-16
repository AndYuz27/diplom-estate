import React,{ useEffect, useState } from "react"
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
import axios from "axios"


export default function Landing(){
    const [isLoad, setIsLoad] = useState(false)
    const [estateList, seteEsteList] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:8080/api/object`)
            .then(res => {
                console.log(res.data.rows)
                seteEsteList(res.data.rows)
                setIsLoad(true)
            })
            .catch(err => {
                console.log(err)
            })
    
}, []);



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
                <button className="btn_land" onClick={() => window.location.href = "/catalog"}>Найти недвижимость</button>
                <button className="btn_land" onClick={() => alert('Under Construction')}>Связаться с сотрудниками</button>

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
                    <ChooseItem icon={prlst_img} name_icon="Прайс-лист услуг" link_icon="/services-price-List"/>
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
            <div className="last_ad_estate">
                <h2 className="last_ad_estate__h2">Последние объявления на сайте</h2>
            <div className="last_ad_estate__list"> {/*Лист каталога */}

                {(estateList.slice(-4)).map((e) => {return <div className="catalog_list_item" key={e.id} onClick={() => window.location.href =  `/catalog/${e.id}`}>
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
        </div>
    )
}