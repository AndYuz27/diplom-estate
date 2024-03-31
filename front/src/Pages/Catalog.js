import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
// import milana from './assets/milana.jpg'
import '../catalog_style.css'
import ModalEstate from "../components/ModalEstate";

export default function Catalog() {
    const [modalActive, setModalActive] = useState(false)
    const [isLoad, setIsLoad] = useState(false)
    const [modalData, setModalData] = useState([])
    const [modalDataProfile, setModalDataProfile] = useState([])
    const [esteList, seteEsteList] = useState([])

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

    function gethhh(iii, ty){
        axios.get(`http://localhost:8080/api/object/${iii}`)
        .then(res => {
            console.log(res.data.rows)
            setModalData(res.data.rows)
        })
        axios.get(`http://localhost:8080/api/user/${ty}`)
        .then(res => {
            console.log(res.data.rows)
            setModalDataProfile(res.data.rows)
        })
        .catch(err => {
            console.log(err)
        })
    }
    console.log(esteList)
    

    console.log(modalActive)
    if (!isLoad){
        return(
            <div className="catalog__loading">
                    <h2>Загрузка данных</h2>
            </div>
        )
    }else{
    return(
        <div className="catalog">
            <div className="catalog__set-sort">
                <h2>Настройка каталога</h2>
                <button onClick={() => {setModalActive(true) 
                    alert('ха попался')}}>4444</button>
            </div>
            <div className="catalog__list"> {/*Лист каталога */}
                {/* <div className="catalog_list_item" key="1" onClick={() => window.location.href = "/catalog/1"}> 
                    <div className="catalog_list_item-img">
                        <img className="catalog_list_item-img-a" src="http://photos.wikimapia.org/p/00/04/14/74/10_full.jpg" width="320px" alt="estate"/>
                    </div>
                    <div className="catalog_list_item-short-info">
                        <h2 className="catalog_list_item-short-info__hdr-text">Двушка в Электростали</h2>
                        <p className="catalog_list_item-short-info__text">15 000 000 руб.</p>
                        <p className="catalog_list_item-short-info__location">Электросталь, МО</p>
                        <p className="catalog_list_item-short-info__floor">15/17 этаж  2 комн.</p>
                    </div>
                </div> */}
                {esteList.map((e) => {return <div className="catalog_list_item" key={e.id_object} onClick={() => {
                    setModalActive(true)
                    gethhh(e.id_object, e.who_upload)}}>
                <div className="catalog_list_item-img">
                        <img className="catalog_list_item-img-a" src={e.image} width="320px" alt="estate"/>
                    </div>
                    <div className="catalog_list_item-short-info">
                        <h2 className="catalog_list_item-short-info__hdr-text">{e.name_object}</h2>
                        <p className="catalog_list_item-short-info__text">{e.price} {e.currency}</p>
                        <p className="catalog_list_item-short-info__location">{e.address}</p>
                        <p className="catalog_list_item-short-info__floor">{e.cnt_floors} этаж  {e.cnt_rooms} комн.</p>
                    </div>
                            </div>})}
            </div>
            <ModalEstate active={modalActive} setActive={setModalActive}>
            <div className="page-of-estate__main-info">
            {modalData.map((e) => {return <div className="page-of-estate__left">
                <div className="page-of-estate__left_img">
                    <img className="page-of-estate__left_img_tag" src={e.image} width="400" alt="estate" />
                </div>
                <div className="page-of-estate__desc" src="" alt="estate" >
                    <h3 className="page-of-estate__desc_h3">Описание</h3>
                    <p className="page-of-estate__desc_p">Продаётся 2-х комнатная квартира в Электростали, которая находится на улице Жулябина, 18. Квартира в хорошем состоянии, ремонт был сделан 3 года назад.</p>
                    <button className="page-of-estate__right_empl_info_to-chat btn-inf" onClick={() => window.location.href = `/catalog/${e.id_object}`}>ПОЛНАЯ ИНФОРМАЦИЯ ОБ ОБЪЕКТЕ</button>

                </div>

            </div>})}
            <div className="page-of-estate__right">
            {modalData.map((e) => {return <div key={e.id_object}>
                <h3 className="page-of-estate__right_h3">{e.name_object}</h3>
                <h4 className="page-of-estate__right_h4">Краткое описание:</h4>
                <p className="page-of-estate__right_price">{e.price} {e.currency}</p>
                <p className="page-of-estate__right_location">{e.address}</p>
                <p className="page-of-estate__right_floor">{e.cnt_floors} этаж  {e.cnt_rooms} комн.</p>
                </div>})}
                {modalDataProfile.map((e) => {return <div className="page-of-estate__right_empl_info">
                    <h2>Объект опубликовал(-а)</h2>
                    <div className="page-of-estate__right_empl_info_bage">
                        <Link className="page-of-estate__right_empl_info_bage_link" to="/users/1">{e.name} {e.surname}</Link>
                        <img  className="page-of-estate__right_empl_info_bage_image" src={e.image_profile} alt="user"/>
                    </div>
                    <button className="page-of-estate__right_empl_info_to-chat btn-inf">Написать сотруднику/покупателю</button>
                    <button className="page-of-estate__right_empl_info_to-dial btn-inf">Позвонить сотруднику/покупателю</button>
                </div>})}

            </div>
            </div>
            </ModalEstate>
        </div>
    )
                }
}