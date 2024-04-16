import { useParams } from "react-router";
import { Link } from "react-router-dom";
import axios from "axios";
import "../App.css"
import { useEffect, useState } from "react";
import ModalEstate from "../components/ModalEstate";

export default function PageOfEstate(){
    const {id} = useParams()
    const [data, setData] = useState([])
    const [imageArray, setimageArray] = useState([])
    const [dataProfile, setDataProfile] = useState([])
    const [dataModal, setDataModal] = useState('')
    const [idp, setIdp] = useState('')
    const [modalActive, setModalActive] = useState(false)

useEffect(() => {
    if ( id ) {
        axios.get(`http://localhost:8080/api/object/${id}`)
            .then(res => {
                console.log(res.data.rows)
                setData(res.data.rows)
                setimageArray(res.data.rows[0].image)
                console.log(res.data.rows[0].image)
                setIdp(res.data.rows[0].who_upload)
            })
            .catch(err => {
                console.log(err)
            })
    }
}, [ id ]);

useEffect(() => {
    if (idp){
        axios.get(`http://localhost:8080/api/user/${idp}`)
        .then(res => {
            console.log(res.data.rows)
            setDataProfile(res.data.rows)
        })
        .catch(err => {
            console.log(err)
        })
    }
},[ idp ])


function gethhh(iii){
        console.log(iii)
        setDataModal(iii)
}


    if(data.length === 0) {
        return<h2>Данные об объекте еще не занесены или не существуют</h2>
    }else{
    return(
        <div className="page-of-estate">
             {data.map((e) => {return <div className="parse" key={e.id}>
            <div className="page-of-estate__main-info">
            <div className="page-of-estate__left">
                <div className="page-of-estate__left_img">
                    <img className="page-of-estate__left_img_tag" src={e.image1} width="600" alt="estate" onClick={() => {
                    setModalActive(true)
                    gethhh(e.image1)}}/>
                    <div className="page-of-estate__left_img_carousel">
                    {/* {imageArray.map((imgSrc, index) => (<img src={imgSrc} key={index} className="page-of-estate__left_img_tag-thumb" width='144' alt="estate" onClick={() => {
                    setModalActive(true)
                    gethhh(index)}} />))} */}
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
                    {e.image6 &&  <img src={e.image5}  className="page-of-estate__left_img_tag-thumb" width='144' alt="estate" onClick={() => {
                    setModalActive(true)
                    gethhh(e.image6)}}/>}
                                <ModalEstate active={modalActive} setActive={setModalActive}>
            <div className="page-of-estate__main-info">
                <img src={dataModal} alt="mmm" width='1000'/>
            </div>
            </ModalEstate>
                    </div>
                </div>
                <div className="page-of-estate__desc" src="" alt="estate" >
                    <h3 className="page-of-estate__desc_h3">Описание</h3>
                    <p className="page-of-estate__desc_p">{e.description}</p>
                </div>

            </div>
            <div className="page-of-estate__right">
                <h3 className="page-of-estate__right_h3">{e.name_object}</h3>
                <h4 className="page-of-estate__right_h4">Краткое описание:</h4>
                <p className="page-of-estate__right_price">{e.price} {e.currency}</p>
                <p className="page-of-estate__right_location">{e.address}</p>
                <p className="page-of-estate__right_floor">{e.cnt_floors} этаж  {e.cnt_rooms} комн.</p>
                {dataProfile.map((e) => {return  <div className="page-of-estate__right_empl_info">
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
            <div className="page-of-estate__detail_info">
                <h2 className="page-of-estate__detail_info_h2">Подробная информация</h2>
                <div className="page-of-estate__detail_info__tech_info">
                    <h3 className="page-of-estate__detail_info__tech_info">Технические характеристики квартиры</h3>
                    <p className="page-of-estate__detail_info__tech_info">Ремонт: косметический</p>
                    <p className="page-of-estate__detail_info__tech_info">Площадь: {e.sq_meters}м^2</p>
                    <p className="page-of-estate__detail_info__tech_info">налог: 5 000 руб/год</p>
                    <p className="page-of-estate__detail_info__tech_info">количество комнат: {e.cnt_rooms}</p>
                    <p className="page-of-estate__detail_info__tech_info">Наличие интернета: да</p>
                    <p className="page-of-estate__detail_info__tech_info">Наличие каб. ТВ: {e.CATV_avail}</p>
                    <p className="page-of-estate__detail_info__tech_info">Возможность установки сплит системы/спут. тарекли: требуется разрешение от ЖКХ</p>
                </div>
                <div className="page-of-estate__detail_info__build_info">
                    <h3 className="page-of-estate__detail_info__build_info">информаиця о многоквартирном доме</h3>
                    <p className="page-of-estate__detail_info__build_info">Дом серии: {e.type_buildlng}</p>
                    <p className="page-of-estate__detail_info__build_info">Дата постройки: 1982</p>
                    <p className="page-of-estate__detail_info__build_info">Место для охраны/консъержи: </p>
                    <p className="page-of-estate__detail_info__build_info">кол-вл этажей: 16</p>
                    <p className="page-of-estate__detail_info__build_info">Наличие лифта: да</p>
                    <p className="page-of-estate__detail_info__build_info">Наличие г.п. лифта: да</p>
                    <p className="page-of-estate__detail_info__build_info">Наличие газопровода: нет</p>
                    <p className="page-of-estate__detail_info__build_info">Площадь парковки: 202.50</p>
                    <p className="page-of-estate__detail_info__build_info">Мусоропровод: возле лифтовой секции</p>
                    <p className="page-of-estate__detail_info__build_info">Состояние лифта(-ов): были заменены в 2016 году.</p>
                    <p className="page-of-estate__detail_info__build_info">ТСЖ/ЖКХ: Управляющая компания «Электростальская коммунальная компания»</p>
                    <Link className="page-of-estate__detail_info__build_info" to='/build/1/ests'>Аналогичные квартиры в этом доме</Link>
                    <Link className="page-of-estate__detail_info__build_info" to='https://dom.mingkh.ru//moskovskaya-oblast/elektrostal/344260'>Информация от МинЖКХ</Link>


                </div>
            </div>
            </div>})}

        </div>
    )
    }
}