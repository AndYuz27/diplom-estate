import { useParams } from "react-router";
import { Link } from "react-router-dom";
import axios from "axios";
import "../App.css"
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

    const [modalActive, setModalActive] = useState(false)
    const [data_phone, setData_phone] = useState('')
    const [IDEst, setIDEst] = useState(0)
useEffect(() => {
    if ( id ) {
        axios.get(`http://localhost:8080/api/object/${id}`)
            .then(res => {
                console.log(res.data.rows)
                // console.log(Number((res.data.rows[0].coords).slice(0, 9)))
                setData(res.data.rows)
                setCATV(res.data.rows[0].catv_avail)
                setSecurity(res.data.rows[0].security_avail)
                setCrdLt(Number((res.data.rows[0].coords).slice(0, 9)))
                setCrdLg(Number((res.data.rows[0].coords).slice(10, 19)))


            })

            /*Number("1000") */
            .catch(err => {
                console.log(err)
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
    if ( IDEst ) {
        axios.get(`http://localhost:8080/api/cnt/${IDEst}`)
            .then(res => {
                console.log(res.data.rows)
            })
            .catch(err => {
                console.log(err)
            })
    }
}, [ IDEst ]);

console.log('камеры',catv)
console.log('охрана' ,security)


let ddd;
let ddf;
if(security){
     ddd = 50
}else{
    ddd = 0
}
if(catv){
    ddf = 50
}else{
    ddf = 0
}
// console.log('ff', ddf)
// console.log('dd', ddd)




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
                <p className="page-of-estate__right_price">{e.price} {e.currency}</p>
                <p className="page-of-estate__right_location">{e.address}</p>
                <p className="page-of-estate__right_floor">{e.cnt_floors} этаж  {e.cnt_rooms} комн.</p>
                <div className="page-of-estate__right_empl_info">
                    <h2>Объект опубликовал(-а)</h2>
                    <div className="page-of-estate__right_empl_info_bage">
                    <Link className="page-of-estate__right_empl_info_bage_link" to="/users/1">{e.name} {e.surname}</Link>
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
                    <p className="page-of-estate__detail_info__tech_info">Ремонт: косметический</p>
                    <p className="page-of-estate__detail_info__tech_info">Площадь: {e.sq_meters}м^2</p>
                    <p className="page-of-estate__detail_info__tech_info">налог: 5 000 руб/год</p>
                    <p className="page-of-estate__detail_info__tech_info">количество комнат: {e.cnt_rooms}</p>
                    <p className="page-of-estate__detail_info__tech_info">Наличие интернета: да</p>
                    <p className="page-of-estate__detail_info__tech_info">Наличие каб. ТВ: {e.CATV_avail}</p>
                    <p className="page-of-estate__detail_info__tech_info">Возможность установки сплит системы/спут. тарекли: требуется разрешение от ЖКХ</p>
                    <ProgressBar bgcolor={"lime"} completed={ddd + ddf} />

                </div>
                <div className="page-of-estate__detail_info">
                {e.type_videohost && <h2>Видео</h2>}
                    {e.type_videohost && <VideoPlug type_vidhost={e.type_videohost} link={e.link_videohost} w={512} h={360}/>}

                </div>
                <div className="page-of-estate__detail_info">
              {e.coords &&
              <YMaps>
              <div>
                My awesome application with maps!
                <Map width={512} height={360} defaultState={{ center: [coordLog, coordLat], zoom: 18 }} >
                <Placemark geometry={[coordLog, coordLat]} />
          
                  </Map>
              </div>
            </YMaps>
              }  
                </div>
                <div className="page-of-estate__detail_info__build_info">
                    <h3 className="page-of-estate__detail_info__build_info">информаиця о многоквартирном доме</h3>
                    <p className="page-of-estate__detail_info__build_info">Дом серии: {e.type_buildlng}</p>
                    <p className="page-of-estate__detail_info__build_info">Дата постройки: 1982</p>
                    <p className="page-of-estate__detail_info__build_info">Место для охраны/консъержи: </p>
                    <p className="page-of-estate__detail_info__build_info">Этаж квартиры: {e.cnt_floors}</p>
                    <p className="page-of-estate__detail_info__build_info">Наличие лифта: {e.elevator_norm && <p>Есть</p>}</p>
                    <p className="page-of-estate__detail_info__build_info">Наличие г.п. лифта: {e.elevator_large && <p>Есть</p>}</p>
                    <p className="page-of-estate__detail_info__build_info">Наличие газопровода: нет</p>
                    <p className="page-of-estate__detail_info__build_info">Площадь парковки: 202.50</p>
                    <p className="page-of-estate__detail_info__build_info">Мусоропровод: возле лифтовой секции</p>
                    <p className="page-of-estate__detail_info__build_info">Состояние лифта(-ов): были заменены в 2016 году.</p>
                    <p className="page-of-estate__detail_info__build_info">ТСЖ/ЖКХ: Управляющая компания «Электростальская коммунальная компания»</p>
                    <Link className="page-of-estate__detail_info__build_info" to='/build/1/ests'>Аналогичные квартиры в этом доме</Link>
                    <Link className="page-of-estate__detail_info__build_info" to='https://dom.mingkh.ru//moskovskaya-oblast/elektrostal/344260'>Информация от МинЖКХ</Link>


                </div>
                <div className="page-of-estate__detail_info__build_info">
                    
                </div>
            </div>
            </div>})}
<BuyComp/>
        </div>
    )
    }
}