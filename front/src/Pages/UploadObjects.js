import { useState, useEffect } from "react"
import './adminstyle.css'
import axios from "axios"
import { useParams } from "react-router"

export default function UploadObject() {
    const url='http://localhost:8080/api/object'
    const [iimg1, SetImg1] = useState()
    const [iimg2, SetImg2] = useState()
    const [iimg3, SetImg3] = useState()
    const [iimg4, SetImg4] = useState()
    const [iimg5, SetImg5] = useState()
    const [iimg6, SetImg6] = useState()
    const [crds, SetCoords] = useState()
    // const [id_tb, set_id_tb] = useState()
    const [isTB, SetisTB] = useState('none')
    const [isTBa, SetisTBa] = useState('none')
    const [Types_estate, setTypes_estate] = useState([])
    const [Types_buy, setTypes_buy] = useState([])
    const [Types_bld, setTypes_bld] = useState([])
    const [Types_bld_ap, setTypes_bld_ap] = useState([])

    // const idObj = localStorage.getItem('idObj')
     
    useEffect(() => {
            axios.get(`http://localhost:8080/api/types_est/`)
                .then(res => {
                    console.log(res.data.rows)
                    setTypes_estate(res.data.rows)
                })
                .catch(err => {
                    console.log(err)
                })}, []
            );
    useEffect(() => {
            axios.get(`http://localhost:8080/api/types_buy/`)
                .then(res => {
                    console.log(res.data.rows)
                    setTypes_buy(res.data.rows)
                })
                .catch(err => {
                    console.log(err)
                })}, []
            );
            useEffect(() => {
                axios.get(`http://localhost:8080/api/types_bld/`)
                    .then(res => {
                        console.log(res.data.rows)
                        setTypes_bld(res.data.rows)
                    })
                    .catch(err => {
                        console.log(err)
                    })}, []
                );
                // useEffect(() => {
                //     axios.get(`http://localhost:8080/api/types_bld_ap/${data.tbld}`)
                //         .then(res => {
                //             console.log(res.data.rows)
                //             setTypes_bld_ap(res.data.rows)
                //         })
                //         .catch(err => {
                //             console.log(err)
                //         })}, []
                //     );

                function fff(i){
                    axios.get(`http://localhost:8080/api/types_bld_ap/${i}`)
                    .then(res => {
                        console.log(res.data.rows)
                        setTypes_bld_ap(res.data.rows)
                        SetisTBa('block')
                    })
                    .catch(err => {
                        console.log(err)
                    })
                }
    const [data, setData] = useState({
        nm:  '',
        type:  '',
        cnt_r:  0,
        cnt_flr:  0,
        adrs:  '',
        catv:  false,
        secr:  false,
        sq_m:  0,
        tbld: 0,
        img:  '',
        img2:  '',
        img3:  '',
        img4:  '',
        img5:  '',
        img6:  '',
        cnt_type: '',
        price: 0,
        crnc: '',
        upload: '',
        descr: '',
        date: '',
        tp_ap: 0,
        link_videohost: '',
        type_videohost: '',
        tBuy: '',
        intercom_avail: false,
        firealarm: false,
    })
    function GetDataByYandex(adr){
        let conv_pluses = adr.replace(/\s/g, '+');
        console.log(conv_pluses)
        axios.get(`https://geocode-maps.yandex.ru/1.x/?apikey=a30ce7a4-8d94-43c7-ab23-753aca932401&geocode=${conv_pluses}&format=json`)
        .then(res => {
            console.log(res.data.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos)
            SetCoords(res.data.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos)
        })
        .catch(err => {
            console.log(err)
        })
    }

    function submit(e) {
        
        alert('Внимание, при публикации объявления, убедитесь, что данное объявление оплаченно, в ином случае объявление будет СНЯТО ИЗ КАТАЛОГА')
        GetDataByYandex(data.adrs)
        console.log(crds)
        try{
        e.preventDefault();
        axios.post(url, {
            nm:  data.nm,
            type:  data.type,
            cnt_r:  data.cnt_r,
            cnt_flr:  data.cnt_flr,
            adrs:  data.adrs,
            catv:  data.catv,
            secr:  data.secr,
            sq_m:  data.sq_m,
            tbld: data.tbld,
            img:  iimg1,
            img2: iimg2,
            img3: iimg3,
            img4: iimg4,
            img5: iimg5,
            img6: iimg6,
            cnt_type: "image/jpeg",
            price: data.price,
            crnc: 'RUB',
            upload: localStorage.getItem('id_u'),
            descr: data.descr,
            date: new Date(),
            tp_ap: data.tp_ap,
            link_videohost: data.link_videohost,
            type_videohost: data.type_videohost,
            tBuy:data.tBuy,
            coords: crds,
            intercom_avail: data.intercom_avail,
            firealarm: data.firealarm,
        }).then(res => {
            console.log(res.data)
            window.location.href="/admin/table"
        })
    }catch(err){
            console.log('ошибка загрузки в базу\n', err)
            alert('ошибка загрузки данных')
        }

    }

    function handle(e) {
        const newdata={...data}
        newdata[e.target.name] = e.target.value
        setData(newdata)
        console.log(newdata)
        console.log(crds)
    }

    function loadFile1(a){
        const file = a;
        let reader = new FileReader();
        const read = reader.readAsDataURL(file)
        reader.onload = function() {
            console.log(reader.result);
            SetImg1(reader.result)
          };
        
        }
        function loadFile2(a){
            const file = a;
            let reader = new FileReader();
            const read = reader.readAsDataURL(file)
            reader.onload = function() {
                console.log(reader.result);
                SetImg2(reader.result)
              };
            
            }
            function loadFile3(a){
                const file = a;
                let reader = new FileReader();
                const read = reader.readAsDataURL(file)
                reader.onload = function() {
                    console.log(reader.result);
                    SetImg3(reader.result)
                  };
                
                }
                function loadFile4(a){
                    const file = a;
                    let reader = new FileReader();
                    const read = reader.readAsDataURL(file)
                    reader.onload = function() {
                        console.log(reader.result);
                        SetImg4(reader.result)
                      };
                    
                    }
                    function loadFile5(a){
                        const file = a;
                        let reader = new FileReader();
                        const read = reader.readAsDataURL(file)
                        reader.onload = function() {
                            console.log(reader.result);
                            SetImg5(reader.result)
                          };
                        
                        }
                        function loadFile6(a){
                            const file = a;
                            let reader = new FileReader();
                            const read = reader.readAsDataURL(file)
                            reader.onload = function() {
                                console.log(reader.result);
                                SetImg6(reader.result)
                              };
                            
                            }



    // GetDataByYandex('Черноголовка ул. Первая 20')
    //38.388039 56.005717


return(
    <div className="admin_upload_obj" >
        <h2 className="admin_upload_obj">Публикация объекта</h2>
        <form className="admin_upload_obj__form" onSubmit={submit}>

<div className="form_data">
    <div className="field_lr text_info_form">
        <h2>Текстовая информация</h2>
        <label>Название объекта </label><input required="required" onChange={(e)=>handle(e)} value={data.nm} className="admin_upload_obj__input" type="text" name="nm" placeholder="Название объекта"/>
        <label>Тип недвижимости </label><select  onChange={(e)=>handle(e)} value={data.type} className="admin_upload_obj__input" name="type" placeholder="тип недвижимости">
                <option value={""}>Выберите объект</option>
                {Types_estate.map((e)=> {
                    return(
                        <option value={e.name}>{e.name}</option>
                    )
                })}
            </select>
        <label>Вид сделки </label><select  onChange={(e)=>handle(e)} value={data.tBuy} className="admin_upload_obj__input" name="tBuy" placeholder="тип недвижимости">
                <option value={""}>Выберите объект</option>
                {Types_buy.map((e)=> {
                    return(
                        <option value={e.id}>{e.name_type}</option>
                    )
                })}
            </select>
            <label>Наличие видеонаблюдения </label><select onChange={(e)=>handle(e)} value={data.catv} className="admin_upload_obj__input" name="catv" placeholder="тип недвижимости">
                <option value={true}>Есть</option>
                <option value={false} selected>Нет</option>
            </select>
            <label>Наличие охраны </label><select onChange={(e)=>handle(e)} value={data.secr} className="admin_upload_obj__input" name="secr" placeholder="тип недвижимости">
                <option value={true}>Есть</option>
                <option value={false} selected>Нет</option>
            </select>
            <label>Наличие пожарной сигнализации </label><select onChange={(e)=>handle(e)} value={data.firealarm} className="admin_upload_obj__input" name="firealarm" placeholder="тип недвижимости">
                <option value={true}>Есть</option>
                <option value={false} selected>Нет</option>
            </select> 
            <label>Наличие домофона </label><select onChange={(e)=>handle(e)} value={data.intercom_avail} className="admin_upload_obj__input" name="intercom_avail" placeholder="тип недвижимости">
                <option value={true}>Есть</option>
                <option value={false} selected>Нет</option>
            </select> 
            <label>Кол-во комнат </label><input onChange={(e)=>handle(e)} value={data.cnt_r} className="admin_upload_obj__input" type="number" name="cnt_r" placeholder="1" min='1' max='12'/>
            <label>Кол-во этажей/этаж квартиры </label><input onChange={(e)=>handle(e)} value={data.cnt_flr} className="admin_upload_obj__input" type="number" name="cnt_flr" placeholder="1" min='1' max='30'/>
            <label>Адрес </label><input required="required" onChange={(e)=>{handle(e); GetDataByYandex(e.target.value)}} value={data.adrs} className="admin_upload_obj__input" type="text" name="adrs"/>
            <label>Площадь </label><input required="required" onChange={(e)=>handle(e)} value={data.sq_m} className="admin_upload_obj__input" type="number" name="sq_m"/>
            <label>цена в рублях</label><input required="required" onChange={(e)=>handle(e)} value={data.price} className="admin_upload_obj__input" type="text" name="price"/>
            <label>Описание </label><input required="required" onChange={(e)=>handle(e)} value={data.descr} className="admin_upload_obj__input" type="text" name="descr"/>
            <label>Типовая постройка </label><select onChange={(e)=>SetisTB('block')}className="admin_upload_obj__input" placeholder="тип недвижимости">
                <option value={true}>Да</option>
                <option value={false} selected>Нет</option>
            </select>
            <div className="form_build image_info_form" style={{display: isTB}}>
                <label>Название постройки</label>
                <select onChange={(e)=>{fff(e.target.value); handle(e)}} className="admin_upload_obj__input" name="tbld" value={data.tbld} placeholder="тип постройки">
                <option value={""}>Выберите объект</option>
                {Types_bld.map((e)=> {
                    return(
                        <option value={e.id}>{e.name_building}</option>
                    )
                })}
                </select>  
            <div className="form_build image_info_form" style={{display: isTBa}}>
                <label>Квартира</label>
                <select onChange={(e)=>{SetisTB('block'); handle(e)}} className="admin_upload_obj__input" name="tp_ap" value={data.tp_ap} placeholder="тип недвижимости">
                <option value={""}>Выберите объект</option>
                {Types_bld_ap.map((e)=> {
                    return(
                        <option value={e.id}>{e.name_aprt}</option>
                    )
                })}
                </select>    
            </div>   
            </div>            
        </div>
        <div className="field_lr image_info_form">
        <h2>загрузка изображения</h2>

            <label>Основное изображение </label><input required="required" accept=".jpg,.jpeg" onChange={(e)=>loadFile1(e.target.files[0])}  className="admin_upload_obj__input_file" type="file" name="img"/>
            <img src={iimg1 !== undefined ? iimg1 : "https://velaxom.ru/assets/images/rasprodazha/kessler-parts/no-image.png"} alt="test" width={320}/>
            <label>Изображение 2 </label><input accept=".jpg,.jpeg" onChange={(e)=>loadFile2(e.target.files[0])} className="admin_upload_obj__input_file" type="file" name="img2"/>
            <img src={iimg2 !== undefined ? iimg2 : "https://velaxom.ru/assets/images/rasprodazha/kessler-parts/no-image.png"} alt="test" width={320}/>
            <label>Изображение 3 </label><input accept=".jpg,.jpeg" onChange={(e)=>loadFile3(e.target.files[0])} className="admin_upload_obj__input_file" type="file" name="img3"/>
            <img src={iimg3 !== undefined ? iimg3 : "https://velaxom.ru/assets/images/rasprodazha/kessler-parts/no-image.png"} alt="test" width={320}/>
            <label>Изображение 4 </label><input accept=".jpg,.jpeg" onChange={(e)=>loadFile4(e.target.files[0])} className="admin_upload_obj__input_file" type="file" name="img4"/>
            <img src={iimg4 !== undefined ? iimg4 : "https://velaxom.ru/assets/images/rasprodazha/kessler-parts/no-image.png"} alt="test" width={320}/>
            <label>Изображение 5 </label><input accept=".jpg,.jpeg" onChange={(e)=>loadFile5(e.target.files[0])} className="admin_upload_obj__input_file" type="file" name="img5"/>
            <img src={iimg5 !== undefined ? iimg5 : "https://velaxom.ru/assets/images/rasprodazha/kessler-parts/no-image.png"} alt="test" width={320}/>
            <label>Изображение 6 </label><input accept=".jpg,.jpeg" onChange={(e)=>loadFile6(e.target.files[0])} className="admin_upload_obj__input_file" type="file" name="img6"/>
            <img src={iimg6 !== undefined ? iimg6 : "https://velaxom.ru/assets/images/rasprodazha/kessler-parts/no-image.png"} alt="test" width={320}/>
        </div>
        <div className="field_lr image_info_form">
        <h2>Видео из видеохостинга</h2>
        <p>Принимаются видео, опубликованные в YouTube, Rutube, VK-Видео</p>

            <label>Типовая постройка </label><select onChange={(e)=>handle(e)} value={data.type_videohost} className="admin_upload_obj__input" name="type_videohost" placeholder="тип недвижимости">
                <option value={null} selected>Выберите видеохостинг</option>
                <option value='yt' >YouTube</option>
                <option value='rt' >Rutube</option>
                <option value='vk_vid' >ВК-Видео</option>
            </select>
            <label>ссылка на видео </label><input onChange={(e)=>handle(e)} value={data.link_videohost} className="admin_upload_obj__input" type="text" name="link_videohost"/>

        </div>
</div>
        
        

            
            <button className="Auth_submit">Добавить</button>


        </form>
    </div>
)
}
