import React, { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
// import milana from './assets/milana.jpg'
import '../catalog_style.css'
import ModalEstate from "../components/ModalEstate";
import CardEstate from "../components/CardEstate";
import notfound from '../assets/objects_isnt_found.jpg'


export default function Catalog() {
    const [modalActive, setModalActive] = useState(false)
    const [isLoad, setIsLoad] = useState(false)
    const [modalData, setModalData] = useState([])
    const [modalDataImg, setModalDataImg] = useState([])
    const [esteList, seteEsteList] = useState([])
    const [text, seText] = useState('')



    useEffect(() => {
            axios.get(`http://localhost:8080/api/object`)
                .then(res => {
                    console.log(res.data.rows)
                    seteEsteList(res.data.rows)
                    setIsLoad(true)
                })
                .catch(err => {
                    console.log(err)
                    seText('Данные не загрузились из-за ошибки на сервере. Повторите попытку позже или напишите на почту, support@stromtrakt.ru');

                })
        
    }, []);

    function gethhh(iii){
        axios.get(`http://localhost:8080/api/object/${iii}`)
        .then(res => {
            console.log(res.data.rows)
            setModalData(res.data.rows)
        })
        axios.get(`http://localhost:8080/api/object_img/${iii}`)
        .then(res => {
            console.log(res.data.rows)
            setModalDataImg(res.data.rows)
        })

    }
    const [value, setValue] = useState('')

    console.log(esteList)
    const filterTable = esteList.filter(estate => {
        return estate.name_object.toLowerCase().includes(value.toLowerCase())
    })

    console.log(modalActive)
    if (!isLoad){
        return(
            <div className="catalog__loading">
                    <div className="catalog__loading_element">
                    {!text &&   <h2 className="catalog__loading_element_title">Загрузка данных</h2>}
                    {text &&   <h2 className="catalog__loading_element_title">{text}</h2>}
                    {!text &&     <img src="https://usagif.com/wp-content/uploads/loading-96.gif" alt="Loading" width={160}/>}
                        {/* <h2>{text}</h2> */}
                    </div>
            </div>
        )
    }else{
    return(
        <div className="catalog">
            <div className="catalog__set-sort">
                <h2>Настройка каталога</h2>
                <div className="catalog__set-sort_items">
                    <form>
                        <label className="catalog__set-sort_item">Цена </label><input className="catalog__set-sort_item" type="number" placeholder="от 3 500 000"></input><label> до </label><input type="number" placeholder="от 20 500 000"></input>
                        <br></br>
                        <label className="catalog__set-sort_item">Ремонт: </label>
                        <select className="catalog__set-sort_item">
                            <option value='Дизайнерский'>Дизайнерский</option>
                            <option value='Косметический'>Косметический</option>
                            <option value='Минимализм'>Минимализм</option>
                            <option value='Голый'>Голый</option>
                        </select>
                        <br></br>
                        <label className="catalog__set-sort_item">Тип стены: </label>
                        <select className="catalog__set-sort_item">
                            <option value='Дизайнерский'>Бетонные</option>
                            <option value='Косметический'>Кирпичные</option>
                            <option value='Минимализм'>Деревянные</option>
                        </select>
                        <br></br>
                        <label className="catalog__set-sort_item">Тип Жилья: </label>
                        <select className="catalog__set-sort_item">
                            <option value='Дизайнерский'>Под покупку</option>
                            <option value='Косметический'>Аренда</option>
                            <option value='Минимализм'>посуточно</option>
                        </select>
                        <br></br>
                        <label className="catalog__set-sort_item">кол-во комнат: </label>
                        <input className="catalog__set-sort_item" type="number" min='1' max='5'></input>
                        <br></br>
                        <label className="catalog__set-sort_item">Вид из окон: </label>
                        <select className="catalog__set-sort_item">
                            <option value='Дизайнерский'>Во двор</option>
                            <option value='Косметический'>на улицу</option>
                        </select>
                        <br></br>
                        <label className="catalog__set-sort_item">Этаж квартиры: </label>
                        <input className="catalog__set-sort_item" type="number" min='1' max='25'></input>
                        <br></br>
                        <label className="catalog__set-sort_item">Площадь квартиры: </label>
                        <input className="catalog__set-sort_item" type="number" min='10' max='100'></input><label> кв. м.</label>
                        <br></br>
                        <label className="catalog__set-sort_item">Вид из балкона: </label>
                        <select>
                            <option value='Дизайнерский'>Во двор</option>
                            <option value='Косметический'>на улицу</option>
                        </select>
                        <br></br>
                        <label className="catalog__set-sort_item">Ипотека: </label>
                        <input className="catalog__set-sort_item" type='checkbox'></input>
                    </form>
                </div>
            </div>
            <div className="catalog__list"> 
            <input className='admin_table__serach_holder' type='text' placeholder='Введите название объекта' onChange={(e) =>setValue(e.target.value)}/>
{/*Лист каталога */}
                {filterTable.map((e) => {
                    return (
                        <div className="catalog_list_item" key={e.id} onClick={() => {
                            setModalActive(true)
                            gethhh(e.id)}}>
                        <div className="catalog_list_item-img">
                                <img className="catalog_list_item-img-a" src={e.image1} width="320px" alt="estate"/>
                            </div>
                            <div className="catalog_list_item-short-info">
                                <h2 className="catalog_list_item-short-info__hdr-text">{e.name_object}</h2>
                                <p className="catalog_list_item-short-info__text">{e.price} {e.currency}</p>
                                <p className="catalog_list_item-short-info__location">{e.address}</p>
                                <p className="catalog_list_item-short-info__floor">{e.cnt_floors} этаж  {e.cnt_rooms} комн.</p>
                            </div>
                        </div>
                )
                    })}
            </div>
            <ModalEstate active={modalActive} setActive={setModalActive}>
            <div className="page-of-estate__main-info">
            {modalData.map((e) => {return <div className="page-of-estate__left">
                <div className="page-of-estate__left_img">
                {modalDataImg.map((e)=> { return <img className="page-of-estate__left_img_tag" src={e.image1} width="400" alt="estate" />})}
                </div>
                <div className="page-of-estate__desc" src="" alt="estate" >
                    <h3 className="page-of-estate__desc_h3">Описание</h3>
                    <p className="page-of-estate__desc_p">{e.description}</p>
                    <button className="page-of-estate__right_empl_info_to-chat btn-inf" onClick={() => window.location.href = `/catalog/${e.id}`}>ПОЛНАЯ ИНФОРМАЦИЯ ОБ ОБЪЕКТЕ</button>

                </div>

            </div>})}
            <div className="page-of-estate__right">
            {modalData.map((e) => {return <div key={e.id}>
                <div className="md_modal">
                <div className="wrapper_modal"></div>
                <h3 className="page-of-estate__right_h3">{e.name_object}</h3>
                <h4 className="page-of-estate__right_h4">Краткое описание:</h4>
                <p className="page-of-estate__right_price">{e.price} {e.currency}</p>
                <p className="page-of-estate__right_location">{e.address}</p>
                <p className="page-of-estate__right_floor">{e.cnt_floors} этаж  {e.cnt_rooms} комн.</p>
                </div>
                <div className="page-of-estate__right_empl_info">
                    <h2>Объект опубликовал(-а)</h2>
                    <div className="page-of-estate__right_empl_info_bage">
                        <Link className="page-of-estate__right_empl_info_bage_link" to="/users/1">{e.name} {e.surname}</Link>
                        <img  className="page-of-estate__right_empl_info_bage_image" src={e.image_profile} alt="user"/>
                    </div>
                    <button className="page-of-estate__right_empl_info_to-chat btn-inf">Написать сотруднику</button>
                    <button className="page-of-estate__right_empl_info_to-dial btn-inf">Позвонить сотруднику</button>
                </div>
                </div>
                })}

            </div>
            </div>
            </ModalEstate>
        </div>
    )
                }
}


// Каталог для отвельный типов недви
export function CatalogSepType() {
    const {id} = useParams()

    const [modalActive, setModalActive] = useState(false)
    const [isLoad, setIsLoad] = useState(false)
    const [modalData, setModalData] = useState([])
    const [modalDataImg, setModalDataImg] = useState([])
    const [esteList, seteEsteList] = useState([])
    const [text, seText] = useState('')


    useEffect(() => {
        if ( id ) {
            axios.get(`http://localhost:8080/api/object/sep/${id}`)
                .then(res => {
                    console.log(res.data.rows)
                    seteEsteList(res.data.rows)
                    setIsLoad(true)
                })
                .catch(err => {
                    console.log(err)
                    seText('Данные не загрузились из-за ошибки на сервере. Повторите попытку позже или напишите на почту, support@stromtrakt.ru');

                })
        }
    }, [ id ]);
    

    function gethhh(iii){
        axios.get(`http://localhost:8080/api/object/${iii}`)
        .then(res => {
            console.log(res.data.rows)
            setModalData(res.data.rows)
        })
        axios.get(`http://localhost:8080/api/object_img/${iii}`)
        .then(res => {
            console.log(res.data.rows)
            setModalDataImg(res.data.rows)
        })

    }
    const [value, setValue] = useState('')

    console.log(esteList)
    const filterTable = esteList.filter(estate => {
        return estate.name_object.toLowerCase().includes(value.toLowerCase())
    })

    console.log(modalActive)
    if (!isLoad){
        return(
            <div className="catalog__loading">
                    <h2>Загрузка данных</h2>
            </div>
        )
    }else if (esteList.length === 0){
        return(
            <div className="catalog__loading" style={{display: "flex", "flexDirection": "column"}}>
                <img src={notfound} alt="not found" width="480"/>
                    <h2>Объекты не найдены</h2>
            </div>
        )
    }else{
    return(
        <div className="catalog">
        <div className="catalog__set-sort">
            <h2>Настройка каталога</h2>
            <div className="catalog__set-sort_items">
                <form>
                    <label className="catalog__set-sort_item">Цена </label><input className="catalog__set-sort_item" type="number" placeholder="от 3 500 000"></input><label> до </label><input type="number" placeholder="от 20 500 000"></input>
                    <br></br>
                    <label className="catalog__set-sort_item">Ремонт: </label>
                    <select className="catalog__set-sort_item">
                        <option value='Дизайнерский'>Дизайнерский</option>
                        <option value='Косметический'>Косметический</option>
                        <option value='Минимализм'>Минимализм</option>
                        <option value='Голый'>Голый</option>
                    </select>
                    <br></br>
                    <label className="catalog__set-sort_item">Тип стены: </label>
                    <select className="catalog__set-sort_item">
                        <option value='Дизайнерский'>Бетонные</option>
                        <option value='Косметический'>Кирпичные</option>
                        <option value='Минимализм'>Деревянные</option>
                    </select>
                    <br></br>
                    <label className="catalog__set-sort_item">Тип Жилья: </label>
                    <select className="catalog__set-sort_item">
                        <option value='Дизайнерский'>Под покупку</option>
                        <option value='Косметический'>Аренда</option>
                        <option value='Минимализм'>посуточно</option>
                    </select>
                    <br></br>
                    <label className="catalog__set-sort_item">кол-во комнат: </label>
                    <input className="catalog__set-sort_item" type="number" min='1' max='5'></input>
                    <br></br>
                    <label className="catalog__set-sort_item">Вид из окон: </label>
                    <select className="catalog__set-sort_item">
                        <option value='Дизайнерский'>Во двор</option>
                        <option value='Косметический'>на улицу</option>
                    </select>
                    <br></br>
                    <label className="catalog__set-sort_item">Этаж квартиры: </label>
                    <input className="catalog__set-sort_item" type="number" min='1' max='25'></input>
                    <br></br>
                    <label className="catalog__set-sort_item">Площадь квартиры: </label>
                    <input className="catalog__set-sort_item" type="number" min='10' max='100'></input><label> кв. м.</label>
                    <br></br>
                    <label className="catalog__set-sort_item">Вид из балкона: </label>
                    <select>
                        <option value='Дизайнерский'>Во двор</option>
                        <option value='Косметический'>на улицу</option>
                    </select>
                    <br></br>
                    <label className="catalog__set-sort_item">Ипотека: </label>
                    <input className="catalog__set-sort_item" type='checkbox'></input>
                </form>
            </div>
        </div>
        <div className="catalog__list"> 
        <input className='admin_table__serach_holder' type='text' placeholder='Введите название объекта' onChange={(e) =>setValue(e.target.value)}/>
{/*Лист каталога */}
            {filterTable.map((e) => {
                return (
                    <div className="catalog_list_item" key={e.id} onClick={() => {
                        setModalActive(true)
                        gethhh(e.id)}}>
                    <div className="catalog_list_item-img">
                            <img className="catalog_list_item-img-a" src={e.image1} width="320px" alt="estate"/>
                        </div>
                        <div className="catalog_list_item-short-info">
                            <h2 className="catalog_list_item-short-info__hdr-text">{e.name_object}</h2>
                            <p className="catalog_list_item-short-info__text">{e.price} {e.currency}</p>
                            <p className="catalog_list_item-short-info__location">{e.address}</p>
                            <p className="catalog_list_item-short-info__floor">{e.cnt_floors} этаж  {e.cnt_rooms} комн.</p>
                        </div>
                    </div>
            )
                })}
        </div>
        <ModalEstate active={modalActive} setActive={setModalActive}>
        <div className="page-of-estate__main-info">
        {modalData.map((e) => {return <div className="page-of-estate__left">
            <div className="page-of-estate__left_img">
            {modalDataImg.map((e)=> { return <img className="page-of-estate__left_img_tag" src={e.image1} width="400" alt="estate" />})}
            </div>
            <div className="page-of-estate__desc" src="" alt="estate" >
                <h3 className="page-of-estate__desc_h3">Описание</h3>
                <p className="page-of-estate__desc_p">{e.description}</p>
                <button className="page-of-estate__right_empl_info_to-chat btn-inf" onClick={() => window.location.href = `/catalog/${e.id}`}>ПОЛНАЯ ИНФОРМАЦИЯ ОБ ОБЪЕКТЕ</button>

            </div>

        </div>})}
        <div className="page-of-estate__right">
        {modalData.map((e) => {return <div key={e.id}>
            <div className="md_modal">
            <div className="wrapper_modal"></div>
            <h3 className="page-of-estate__right_h3">{e.name_object}</h3>
            <h4 className="page-of-estate__right_h4">Краткое описание:</h4>
            <p className="page-of-estate__right_price">{e.price} {e.currency}</p>
            <p className="page-of-estate__right_location">{e.address}</p>
            <p className="page-of-estate__right_floor">{e.cnt_floors} этаж  {e.cnt_rooms} комн.</p>
            </div>
            <div className="page-of-estate__right_empl_info">
                <h2>Объект опубликовал(-а)</h2>
                <div className="page-of-estate__right_empl_info_bage">
                    <Link className="page-of-estate__right_empl_info_bage_link" to="/users/1">{e.name} {e.surname}</Link>
                    <img  className="page-of-estate__right_empl_info_bage_image" src={e.image_profile} alt="user"/>
                </div>
                <button className="page-of-estate__right_empl_info_to-chat btn-inf">Написать сотруднику</button>
                <button className="page-of-estate__right_empl_info_to-dial btn-inf">Позвонить сотруднику</button>
            </div>
            </div>
            })}

        </div>
        </div>
        </ModalEstate>
    </div>
    )
                }
}



export function CatalogRentalType(){
    const [modalActive, setModalActive] = useState(false)
    const [isLoad, setIsLoad] = useState(false)
    const [modalData, setModalData] = useState([])
    const [modalDataImg, setModalDataImg] = useState([])
    const [esteList, seteEsteList] = useState([])
    useEffect(() => {
            axios.get(`http://localhost:8080/api/object_buy/2`)
                .then(res => {
                    console.log(res.data.rows)
                    seteEsteList(res.data.rows)
                    setIsLoad(true)
                })
                .catch(err => {
                    console.log(err)
                })
    }, [ ]);

    function gethhh(iii){
        axios.get(`http://localhost:8080/api/object/${iii}`)
        .then(res => {
            console.log(res.data.rows)
            setModalData(res.data.rows)
        })
        axios.get(`http://localhost:8080/api/object_img/${iii}`)
        .then(res => {
            console.log(res.data.rows)
            setModalDataImg(res.data.rows)
        })

    }
    const [value, setValue] = useState('')

    console.log(esteList)
    const filterTable = esteList.filter(estate => {
        return estate.name_object.toLowerCase().includes(value.toLowerCase())
    })

    console.log(modalActive)
    if (!isLoad){
        return(
            <div className="catalog__loading">
                    <h2>Загрузка данных</h2>
            </div>
        )
    }else if (esteList.length === 0){
        return(
            <div className="catalog__loading" style={{display: "flex", "flexDirection": "column"}}>
                <img src={notfound} alt="not found" width="480"/>
                    <h2>Объекты не найдены</h2>
            </div>
        )
    }else{
    return(
        <div className="catalog">
        <div className="catalog__set-sort">
            <h2>Настройка каталога</h2>
            <div className="catalog__set-sort_items">
                <form>
                    <label className="catalog__set-sort_item">Цена </label><input className="catalog__set-sort_item" type="number" placeholder="от 3 500 000"></input><label> до </label><input type="number" placeholder="от 20 500 000"></input>
                    <br></br>
                    <label className="catalog__set-sort_item">Ремонт: </label>
                    <select className="catalog__set-sort_item">
                        <option value='Дизайнерский'>Дизайнерский</option>
                        <option value='Косметический'>Косметический</option>
                        <option value='Минимализм'>Минимализм</option>
                        <option value='Голый'>Голый</option>
                    </select>
                    <br></br>
                    <label className="catalog__set-sort_item">Тип стены: </label>
                    <select className="catalog__set-sort_item">
                        <option value='Дизайнерский'>Бетонные</option>
                        <option value='Косметический'>Кирпичные</option>
                        <option value='Минимализм'>Деревянные</option>
                    </select>
                    <br></br>
                    <label className="catalog__set-sort_item">Тип Жилья: </label>
                    <select className="catalog__set-sort_item">
                        <option value='Дизайнерский'>Под покупку</option>
                        <option value='Косметический'>Аренда</option>
                        <option value='Минимализм'>посуточно</option>
                    </select>
                    <br></br>
                    <label className="catalog__set-sort_item">кол-во комнат: </label>
                    <input className="catalog__set-sort_item" type="number" min='1' max='5'></input>
                    <br></br>
                    <label className="catalog__set-sort_item">Вид из окон: </label>
                    <select className="catalog__set-sort_item">
                        <option value='Дизайнерский'>Во двор</option>
                        <option value='Косметический'>на улицу</option>
                    </select>
                    <br></br>
                    <label className="catalog__set-sort_item">Этаж квартиры: </label>
                    <input className="catalog__set-sort_item" type="number" min='1' max='25'></input>
                    <br></br>
                    <label className="catalog__set-sort_item">Площадь квартиры: </label>
                    <input className="catalog__set-sort_item" type="number" min='10' max='100'></input><label> кв. м.</label>
                    <br></br>
                    <label className="catalog__set-sort_item">Вид из балкона: </label>
                    <select>
                        <option value='Дизайнерский'>Во двор</option>
                        <option value='Косметический'>на улицу</option>
                    </select>
                    <br></br>
                    <label className="catalog__set-sort_item">Ипотека: </label>
                    <input className="catalog__set-sort_item" type='checkbox'></input>
                </form>
            </div>
        </div>
        <div className="catalog__list"> 
        <input className='admin_table__serach_holder' type='text' placeholder='Введите название объекта' onChange={(e) =>setValue(e.target.value)}/>
{/*Лист каталога */}
            {filterTable.map((e) => {
                return (
                    <div className="catalog_list_item" key={e.id} onClick={() => {
                        setModalActive(true)
                        gethhh(e.id)}}>
                    <div className="catalog_list_item-img">
                            <img className="catalog_list_item-img-a" src={e.image1} width="320px" alt="estate"/>
                        </div>
                        <div className="catalog_list_item-short-info">
                            <h2 className="catalog_list_item-short-info__hdr-text">{e.name_object}</h2>
                            <p className="catalog_list_item-short-info__text">{e.price} {e.currency}</p>
                            <p className="catalog_list_item-short-info__location">{e.address}</p>
                            <p className="catalog_list_item-short-info__floor">{e.cnt_floors} этаж  {e.cnt_rooms} комн.</p>
                        </div>
                    </div>
            )
                })}
        </div>
        <ModalEstate active={modalActive} setActive={setModalActive}>
        <div className="page-of-estate__main-info">
        {modalData.map((e) => {return <div className="page-of-estate__left">
            <div className="page-of-estate__left_img">
            {modalDataImg.map((e)=> { return <img className="page-of-estate__left_img_tag" src={e.image1} width="400" alt="estate" />})}
            </div>
            <div className="page-of-estate__desc" src="" alt="estate" >
                <h3 className="page-of-estate__desc_h3">Описание</h3>
                <p className="page-of-estate__desc_p">{e.description}</p>
                <button className="page-of-estate__right_empl_info_to-chat btn-inf" onClick={() => window.location.href = `/catalog/${e.id}`}>ПОЛНАЯ ИНФОРМАЦИЯ ОБ ОБЪЕКТЕ</button>

            </div>

        </div>})}
        <div className="page-of-estate__right">
        {modalData.map((e) => {return <div key={e.id}>
            <div className="md_modal">
            <div className="wrapper_modal"></div>
            <h3 className="page-of-estate__right_h3">{e.name_object}</h3>
            <h4 className="page-of-estate__right_h4">Краткое описание:</h4>
            <p className="page-of-estate__right_price">{e.price} {e.currency}</p>
            <p className="page-of-estate__right_location">{e.address}</p>
            <p className="page-of-estate__right_floor">{e.cnt_floors} этаж  {e.cnt_rooms} комн.</p>
            </div>
            <div className="page-of-estate__right_empl_info">
                <h2>Объект опубликовал(-а)</h2>
                <div className="page-of-estate__right_empl_info_bage">
                    <Link className="page-of-estate__right_empl_info_bage_link" to="/users/1">{e.name} {e.surname}</Link>
                    <img  className="page-of-estate__right_empl_info_bage_image" src={e.image_profile} alt="user"/>
                </div>
                <button className="page-of-estate__right_empl_info_to-chat btn-inf">Написать сотруднику</button>
                <button className="page-of-estate__right_empl_info_to-dial btn-inf">Позвонить сотруднику</button>
            </div>
            </div>
            })}

        </div>
        </div>
        </ModalEstate>
    </div>
    )
                }
}
export function CatalogBuyType(){
    const [modalActive, setModalActive] = useState(false)
    const [isLoad, setIsLoad] = useState(false)
    const [modalData, setModalData] = useState([])
    const [modalDataImg, setModalDataImg] = useState([])
    const [esteList, seteEsteList] = useState([])
    useEffect(() => {
            axios.get(`http://localhost:8080/api/object_buy/1`)
                .then(res => {
                    console.log(res.data.rows)
                    seteEsteList(res.data.rows)
                    setIsLoad(true)
                })
                .catch(err => {
                    console.log(err)
                })
    }, [ ]);

    function gethhh(iii){
        axios.get(`http://localhost:8080/api/object/${iii}`)
        .then(res => {
            console.log(res.data.rows)
            setModalData(res.data.rows)
        })
        axios.get(`http://localhost:8080/api/object_img/${iii}`)
        .then(res => {
            console.log(res.data.rows)
            setModalDataImg(res.data.rows)
        })

    }
    const [value, setValue] = useState('')

    console.log(esteList)
    const filterTable = esteList.filter(estate => {
        return estate.name_object.toLowerCase().includes(value.toLowerCase())
    })

    console.log(modalActive)
    if (!isLoad){
        return(
            <div className="catalog__loading">
                    <h2>Загрузка данных</h2>
            </div>
        )
    }else if (esteList.length === 0){
        return(
            <div className="catalog__loading" style={{display: "flex", "flexDirection": "column"}}>
                <img src={notfound} alt="not found" width="480"/>
                    <h2>Объекты не найдены</h2>
            </div>
        )
    }else{
    return(
        <div className="catalog">
        <div className="catalog__set-sort">
            <h2>Настройка каталога</h2>
            <div className="catalog__set-sort_items">
                <form>
                    <label className="catalog__set-sort_item">Цена </label><input className="catalog__set-sort_item" type="number" placeholder="от 3 500 000"></input><label> до </label><input type="number" placeholder="от 20 500 000"></input>
                    <br></br>
                    <label className="catalog__set-sort_item">Ремонт: </label>
                    <select className="catalog__set-sort_item">
                        <option value='Дизайнерский'>Дизайнерский</option>
                        <option value='Косметический'>Косметический</option>
                        <option value='Минимализм'>Минимализм</option>
                        <option value='Голый'>Голый</option>
                    </select>
                    <br></br>
                    <label className="catalog__set-sort_item">Тип стены: </label>
                    <select className="catalog__set-sort_item">
                        <option value='Дизайнерский'>Бетонные</option>
                        <option value='Косметический'>Кирпичные</option>
                        <option value='Минимализм'>Деревянные</option>
                    </select>
                    <br></br>
                    <label className="catalog__set-sort_item">Тип Жилья: </label>
                    <select className="catalog__set-sort_item">
                        <option value='Дизайнерский'>Под покупку</option>
                        <option value='Косметический'>Аренда</option>
                        <option value='Минимализм'>посуточно</option>
                    </select>
                    <br></br>
                    <label className="catalog__set-sort_item">кол-во комнат: </label>
                    <input className="catalog__set-sort_item" type="number" min='1' max='5'></input>
                    <br></br>
                    <label className="catalog__set-sort_item">Вид из окон: </label>
                    <select className="catalog__set-sort_item">
                        <option value='Дизайнерский'>Во двор</option>
                        <option value='Косметический'>на улицу</option>
                    </select>
                    <br></br>
                    <label className="catalog__set-sort_item">Этаж квартиры: </label>
                    <input className="catalog__set-sort_item" type="number" min='1' max='25'></input>
                    <br></br>
                    <label className="catalog__set-sort_item">Площадь квартиры: </label>
                    <input className="catalog__set-sort_item" type="number" min='10' max='100'></input><label> кв. м.</label>
                    <br></br>
                    <label className="catalog__set-sort_item">Вид из балкона: </label>
                    <select>
                        <option value='Дизайнерский'>Во двор</option>
                        <option value='Косметический'>на улицу</option>
                    </select>
                    <br></br>
                    <label className="catalog__set-sort_item">Ипотека: </label>
                    <input className="catalog__set-sort_item" type='checkbox'></input>
                </form>
            </div>
        </div>
        <div className="catalog__list"> 
        <input className='admin_table__serach_holder' type='text' placeholder='Введите название объекта' onChange={(e) =>setValue(e.target.value)}/>
{/*Лист каталога */}
            {filterTable.map((e) => {
                return (
                    <div className="catalog_list_item" key={e.id} onClick={() => {
                        setModalActive(true)
                        gethhh(e.id)}}>
                    <div className="catalog_list_item-img">
                            <img className="catalog_list_item-img-a" src={e.image1} width="320px" alt="estate"/>
                        </div>
                        <div className="catalog_list_item-short-info">
                            <h2 className="catalog_list_item-short-info__hdr-text">{e.name_object}</h2>
                            <p className="catalog_list_item-short-info__text">{e.price} {e.currency}</p>
                            <p className="catalog_list_item-short-info__location">{e.address}</p>
                            <p className="catalog_list_item-short-info__floor">{e.cnt_floors} этаж  {e.cnt_rooms} комн.</p>
                        </div>
                    </div>
            )
                })}
        </div>
        <ModalEstate active={modalActive} setActive={setModalActive}>
        <div className="page-of-estate__main-info">
        {modalData.map((e) => {return <div className="page-of-estate__left">
            <div className="page-of-estate__left_img">
            {modalDataImg.map((e)=> { return <img className="page-of-estate__left_img_tag" src={e.image1} width="400" alt="estate" />})}
            </div>
            <div className="page-of-estate__desc" src="" alt="estate" >
                <h3 className="page-of-estate__desc_h3">Описание</h3>
                <p className="page-of-estate__desc_p">{e.description}</p>
                <button className="page-of-estate__right_empl_info_to-chat btn-inf" onClick={() => window.location.href = `/catalog/${e.id}`}>ПОЛНАЯ ИНФОРМАЦИЯ ОБ ОБЪЕКТЕ</button>

            </div>

        </div>})}
        <div className="page-of-estate__right">
        {modalData.map((e) => {return <div key={e.id}>
            <div className="md_modal">
            <div className="wrapper_modal"></div>
            <h3 className="page-of-estate__right_h3">{e.name_object}</h3>
            <h4 className="page-of-estate__right_h4">Краткое описание:</h4>
            <p className="page-of-estate__right_price">{e.price} {e.currency}</p>
            <p className="page-of-estate__right_location">{e.address}</p>
            <p className="page-of-estate__right_floor">{e.cnt_floors} этаж  {e.cnt_rooms} комн.</p>
            </div>
            <div className="page-of-estate__right_empl_info">
                <h2>Объект опубликовал(-а)</h2>
                <div className="page-of-estate__right_empl_info_bage">
                    <Link className="page-of-estate__right_empl_info_bage_link" to="/users/1">{e.name} {e.surname}</Link>
                    <img  className="page-of-estate__right_empl_info_bage_image" src={e.image_profile} alt="user"/>
                </div>
                <button className="page-of-estate__right_empl_info_to-chat btn-inf">Написать сотруднику</button>
                <button className="page-of-estate__right_empl_info_to-dial btn-inf">Позвонить сотруднику</button>
            </div>
            </div>
            })}

        </div>
        </div>
        </ModalEstate>
    </div>
    )
                }
}