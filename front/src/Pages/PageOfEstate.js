import { useParams } from "react-router";
import { Link } from "react-router-dom";
import axios from "axios";
import "../App.css"
import "../catalog_style.css"
import { useEffect, useState } from "react";
import ModalEstate from "../components/ModalEstate";
import VideoPlug from "../components/VideoPlug";
import { BuyComp } from "../components/BuyComp";
import { YMaps, Map,Placemark} from '@pbe/react-yandex-maps';
import ProgressBar from "../components/Progressbar";



export default function PageOfEstate(){
    const {id} = useParams()
    const [data, setData] = useState([])
    const [coordLat, setCrdLt] = useState(0)
    const [coordLog, setCrdLg] = useState(0)
    const [imageArray, setimageArray] = useState([])
    const [dataModal, setDataModal] = useState('')
    const [catv, setCATV] = useState('')
    const [security, setSecurity] = useState('')
    const [ralrm, setFirealarm] = useState('')
    const [intcom, setIntercom] = useState('')
    const [rrr, setTBROOm] = useState('')
    const [estyy, setestli] = useState([])

    const [modalActive, setModalActive] = useState(false)
    const [data_phone, setData_phone] = useState('')
    const [IDEst, setIDEst] = useState(0)
    const [text, seText] = useState('')

useEffect(() => {
    if ( id ) {
        axios.get(`http://localhost:8080/api/object/${id}`)
            .then(res => {
                console.log(res.data.rows)
                // console.log(Number((res.data.rows[0].coords).slice(0, 9)))
                setData(res.data.rows)
                setCATV(res.data.rows[0].catv_avail)
                setSecurity(res.data.rows[0].security_avail)
                setIntercom(res.data.rows[0].intercom_avail)
                setFirealarm(res.data.rows[0].firealarm)
                setTBROOm(res.data.rows[0].typebuild_room)
                setCrdLt(Number((res.data.rows[0].coords).slice(0, 9)))
                setCrdLg(Number((res.data.rows[0].coords).slice(10, 19)))


            })

            /*Number("1000") */
            .catch(err => {
                console.log(err)
                seText('Данные не загрузились из-за ошибки на сервере. Повторите попытку позже или напишите на почту, support@stromtrakt.ru');

            })
    }
}, [ id ]);

useEffect(() => {
    if ( id ) {
        axios.get(`http://localhost:8080/api/object_img/${id}`)
            .then(res => {
                console.log(res.data.rows)
                setimageArray(res.data.rows)
                setIDEst(res.data.rows[0].id)

            })
            .catch(err => {
                console.log(err)
            })
    }
}, [ id ]);
useEffect(() => {
    if ( rrr ) {
        axios.get(`http://localhost:8080/api/object_aprtsim/${rrr}`)
            .then(res => {
                console.log(res.data.rows)
                setestli(res.data.rows)

            })
            .catch(err => {
                console.log(err)
            })
    }
}, [ rrr ]);
useEffect(() => {
    if ( id ) {
        axios.get(`http://localhost:8080/api/cnt/${id}`)
            .then(res => {
                console.log(res.data.rows)
            })
            .catch(err => {
                console.log(err)
            })
    }
}, [ id ]);

console.log('камеры',catv)
console.log('охрана' ,security)


let ddd;
let ddf;
let dda;
let ddy;
if(security){
     ddd = 25
}else{
    ddd = 0
}
if(catv){
    ddf = 25
}else{
    ddf = 0
}
if(intcom){
    dda = 25
}else{
    dda = 0
}
if(ralrm){
    ddy = 25
}else{
    ddy = 0
}
// console.log('ff', ddf)
// console.log('dd', ddd)




function gethhh(iii){
        console.log(iii)
        setDataModal(iii)
}


    if(data.length === 0) {
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
        <div className="page-of-estate">
             {data.map((e) => {return <div className="parse" key={e.id}>
            <div className="page-of-estate__main-info">
            <div className="page-of-estate__left">
               {imageArray.map((e)=>{
                return(
                    <div className="page-of-estate__left_img">
                    <img className="page-of-estate__left_img_tag" src={e.image1} alt="estate" onClick={() => {
                    setModalActive(true)
                    gethhh(e.image1)}}/>
                    <div className="page-of-estate__left_img_carousel">
                   {e.image2 &&  <img src={e.image2}  className="page-of-estate__left_img_tag-thumb" width='144' alt="estate" onClick={() => {
                    setModalActive(true)
                    gethhh(e.image2)}}/>}
                    {e.image3 &&  <img src={e.image3}  className="page-of-estate__left_img_tag-thumb" width='144' alt="estate" onClick={() => {
                    setModalActive(true)
                    gethhh(e.image3)}}/>}
                    {e.image4 &&  <img src={e.image4}  className="page-of-estate__left_img_tag-thumb" width='144' alt="estate" onClick={() => {
                    setModalActive(true)
                    gethhh(e.image4)}}/>}
                    {e.image5 &&  <img src={e.image5}  className="page-of-estate__left_img_tag-thumb" width='144' alt="estate" onClick={() => {
                    setModalActive(true)
                    gethhh(e.image5)}}/>}
                    {e.image6 &&  <img src={e.image6}  className="page-of-estate__left_img_tag-thumb" width='144' alt="estate" onClick={() => {
                    setModalActive(true)
                    gethhh(e.image6)}}/>}
                                <ModalEstate active={modalActive} setActive={setModalActive}>
            <div className="page-of-estate__main-info">
                <img className="page-of-estate__main-info_iimg" src={dataModal} alt="mmm" width='640'/>
            </div>
            </ModalEstate>
                    </div>
                </div>
                )
               } )} 
                <div className="page-of-estate__desc" src="" alt="estate" >
                    <h3 className="page-of-estate__desc_h3">Описание</h3>
                    <p className="page-of-estate__desc_p">{e.description}</p>
                </div>

            </div>
            <div className="page-of-estate__right">
                <h3 className="page-of-estate__right_h3">{e.name_object}</h3>
                <h4 className="page-of-estate__right_h4">Краткое описание:</h4>
                <p className="page-of-estate__right_price">{e.price} руб.</p>
                <p className="page-of-estate__right_location"><b>Вид сделки: </b>{(e.type_buy===1) ? <span>Покупка</span>: (e.type_buy===2) ? <span>Аренда</span> : <span>n/a</span>}</p>

                <p className="page-of-estate__right_location"><b>Адрес: </b>{e.address}</p>
                <p className="page-of-estate__right_floor">{e.cnt_floors} этаж  {e.cnt_rooms} комн.</p>
                <p className="page-of-estate__right_floor"><b>Площадь:</b> {e.sq_meters} м2</p> 
                <p className="page-of-estate__right_floor"><b>Дата публикации: </b>{(e.date_of_upload).slice(8, 10)}.{(e.date_of_upload).slice(5, 7)}.{(e.date_of_upload).slice(0, 4)}</p> 
                <div className="page-of-estate__right_empl_info">
                    <h2>Объект опубликовал(-а)</h2>
                    <div className="page-of-estate__right_empl_info_bage">
                    <h2 className="page-of-estate__right_empl_info_bage_link">{e.name} {e.surname}</h2>
                        <img  className="page-of-estate__right_empl_info_bage_image" src={e.image_profile} alt="user"/>
                    </div>
                    <button className="page-of-estate__right_empl_info_to-chat btn-inf">Написать сотруднику/покупателю</button>
                    <button className="page-of-estate__right_empl_info_to-dial btn-inf" onClick={() => setData_phone('89991224545')}>Позвонить сотруднику/покупателю</button>
                    <p>{data_phone}</p>
                </div>

            </div>
            </div>
            <div className="page-of-estate__detail_info">
                <h2 className="page-of-estate__detail_info_h2">Подробная информация</h2>
                <div className="page-of-estate__detail_info__tech_info">
                    <h3 className="page-of-estate__detail_info__tech_info">Технические характеристики квартиры</h3>
                    <p className="page-of-estate__detail_info__tech_info">Площадь: {e.sq_meters}м^2</p>
                    <p className="page-of-estate__detail_info__tech_info">количество комнат: {e.cnt_rooms}</p>
                    <p className="page-of-estate__detail_info__tech_info">Площадь гостиной: {e.sqm_lvroom}</p>
                    <p className="page-of-estate__right_floor">Средняя площадь квартир: {e.avg_sqm_room} м2</p> 
                    <p className="page-of-estate__detail_info__tech_info">Противопожарная сигнализация: {e.firealarm ? <span>Есть</span> : <span>Нет</span>}</p>
                    <p className="page-of-estate__detail_info__tech_info">Наличие домофона: {e.intercom_avail ? <span>Есть</span> : <span>Нет</span>}</p>
                    <h3 className="page-of-estate__detail_info__tech_info">Рейтинг безопасности</h3>
                    <ProgressBar bgcolor={"lime"} completed={ddd + ddf+dda+ddy} />

                </div>
                <div className="page-of-estate__detail_info">
                {e.type_videohost && <h2>Видео</h2>}
                    {e.type_videohost && <VideoPlug type_vidhost={e.type_videohost} link={e.link_videohost} w={512} h={360}/>}

                </div>
                <div className="page-of-estate__detail_info">
              {e.coords &&
              <YMaps>
              <div>
                <h2>Местоположение на карте</h2>
                <Map width={512} height={360} defaultState={{ center: [coordLog, coordLat], zoom: 18 }} >
                <Placemark geometry={[coordLog, coordLat]} />
          
                  </Map>
              </div>
            </YMaps>
              }  
                </div>
                <div className="page-of-estate__detail_info__build_info">
                    <h3 className="page-of-estate__detail_info__build_info_text">информаиця о многоквартирном доме</h3>
                    <p className="page-of-estate__detail_info__build_info_text">Дом серии: {e.name_building}</p>
                    <p className="page-of-estate__detail_info__build_info_text">Дата постройки: {e.year_of_realise} год</p>
                    <p className="page-of-estate__detail_info__build_info_text">Максимальное кол-во этажей: {e.floor_cnt}</p>
                    <p className="page-of-estate__detail_info__build_info_text">Наличие лифта: {e.elevator_norm && <span>Есть</span>}</p>
                    <p className="page-of-estate__detail_info__build_info_text">Наличие г.п. лифта: {e.elevator_large && <span>Есть</span>}</p>
                    <p className="page-of-estate__detail_info__build_info_text">Наличие газопровода: {e.gas_avail ? <span>Есть</span> : <span>Нет</span>}</p>
                    {/* <p className="page-of-estate__detail_info__build_info">Площадь парковки: 202.50</p> */}
                    <p className="page-of-estate__detail_info__build_info_text">Мусоропровод: {e.trash ? <span>Есть</span> : <span>Нет</span>}</p>
                    {/* <p className="page-of-estate__detail_info__build_info">Состояние лифта(-ов): были заменены в 2016 году.</p> */}
                    {/* <p className="page-of-estate__detail_info__build_info">ТСЖ/ЖКХ: Управляющая компания «Электростальская коммунальная компания»</p> */}
                    {/* <Link className="page-of-estate__detail_info__build_info" to='/build/1/ests'>Аналогичные квартиры в этом доме</Link>
                    <Link className="page-of-estate__detail_info__build_info" to='https://dom.mingkh.ru//moskovskaya-oblast/elektrostal/344260'>Информация от МинЖКХ</Link> */}


                </div>
                <div className="page-of-estate__detail_info__build_info">
                    <h2>Аналогичные объявления квартир</h2>
                    <div className="catalog__list"> 
{/*Лист каталога */}
                {estyy.map((e) => {
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
                </div>
            </div>
            </div>})}
<BuyComp/>
        </div>
    )
    }
}