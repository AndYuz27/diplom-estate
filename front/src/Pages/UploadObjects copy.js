import { useState, useEffect } from "react"
import './adminstyle.css'
import axios from "axios"
import { useParams } from "react-router"

export default function UploadObject() {
    const url='http://localhost:8080/api/object'
    const [emp_id, setEmpId] = useState('')
    const [arrayImg, setarrayImg] = useState([])
    const [chekCATV, SetCATV] = useState(false)
    const [chekSECR, SetSECR] = useState(false)
    const [chekELN, SetELN] = useState(false)
    const [chekELL, SetELL] = useState(false)
    const [chekTP_B, SetTP_B] = useState(false)


    const [data, setData] = useState({
        nm:  '',
        type:  '',
        cnt_r:  0,
        cnt_flr:  0,
        adrs:  '',
        catv:  false,
        secr:  false,
        el_n:  false,
        el_l:  false,
        sq_m:  0,
        t_bld:  '',
        city:  '',
        img:  '',
        img2:  '',
        img3:  '',
        img4:  '',
        img5:  '',
        img6:  '',
        price: 0,
        crnc: '',
        upload: '',
        descr: '',
        date: '',
        istbld: false,
        t_bld_r: 0
    })

    function submit(e) {
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
            el_n:  data.el_n,
            el_l:  data.el_l,
            sq_m:  data.sq_m,
            t_bld:  data.t_bld,
            city:  data.city,
            img:  data.img,
            img2: data.img2,
            img3: data.img3,
            img4: data.img4,
            img5: data.img5,
            img6: data.img6,
            price: data.price,
            crnc: data.crnc,
            upload: localStorage.getItem('id_u'),
            descr: data.descr,
            date: new Date(),
            istbld: data.istbld,
            t_bld_r: data.t_bld_r
        }).then(res => {
            console.log(res.data)
            window.location.href="/admin/table"
        })}
        catch(err){
            console.log('ошибка загрузки в базу\n', err)
            alert('ошибка загрузки данных')
        }

    }

    function handle(e) {
        const newdata={...data}
        newdata[e.target.name] = e.target.value
        setData(newdata)
        console.log(newdata)
    }
    function handleArray(e){
        const newdata=[...arrayImg]
        newdata[e.target.name] = e.target.value
        setarrayImg(newdata)
    }

return(
    <div className="admin_upload_obj" >
        <h2 className="admin_upload_obj">Публикация объекта</h2>
        <form className="admin_upload_obj__form" onSubmit={submit}>
        <label>Название объекта </label><input required="required" onChange={(e)=>handle(e)} value={data.nm} className="admin_upload_obj__input" type="text" name="nm" placeholder="Название объекта"/>
        <label>Тип недвижимости </label><select  onChange={(e)=>handle(e)} value={data.type} className="admin_upload_obj__input" name="type" placeholder="тип недвижимости">
                <option value={"Квартира"}>Квартира</option>
                <option value={"Дача"} selected>Дача</option>
                <option value={"Дома"}>Дома</option>
                <option value={"Участки земли"}>Участки земли</option>
            </select>
            <label>Наличие видеонаблюдения </label><select onChange={(e)=>handle(e)} value={data.catv} className="admin_upload_obj__input" name="catv" placeholder="тип недвижимости">
                <option value={true}>Есть</option>
                <option value={false} selected>Нет</option>
            </select>
            <label>Наличие охраны </label><select onChange={(e)=>handle(e)} value={data.secr} className="admin_upload_obj__input" name="secr" placeholder="тип недвижимости">
                <option value={true}>Есть</option>
                <option value={false} selected>Нет</option>
            </select>
            <label>Наличие лифта (пасс.)</label><select onChange={(e)=>handle(e)} value={data.el_n} className="admin_upload_obj__input" name="el_n" placeholder="тип недвижимости">
                <option value={true}>Есть</option>
                <option value={false} selected>Нет</option>
            </select> 
            <label>Наличие лифта (г/п) </label><select onChange={(e)=>handle(e)} value={data.el_l} className="admin_upload_obj__input" name="el_l" placeholder="тип недвижимости">
                <option value={true}>Есть</option>
                <option value={false} selected>Нет</option>
            </select> 
            <label>Кол-во комнат </label><input required="required" onChange={(e)=>handle(e)} value={data.cnt_r} className="admin_upload_obj__input" type="number" name="cnt_r" placeholder="1" min='1' max='6'/>
            <label>Кол-во этажей/этаж квартиры </label><input required="required" onChange={(e)=>handle(e)} value={data.cnt_flr} className="admin_upload_obj__input" type="number" name="cnt_flr" placeholder="1" min='1' max='6'/>
            <label>Адрес (без города) </label><input required="required" onChange={(e)=>handle(e)} value={data.adrs} className="admin_upload_obj__input" type="text" name="adrs"/>
            <label>Площадь </label><input required="required" onChange={(e)=>handle(e)} value={data.sq_m} className="admin_upload_obj__input" type="number" name="sq_m"/>
            <label>Тип постройки </label><input required="required" onChange={(e)=>handle(e)} value={data.t_bld} className="admin_upload_obj__input" type="text" name="t_bld"/>
            <label>Город </label> <input required="required" onChange={(e)=>handle(e)} value={data.city} className="admin_upload_obj__input" type="text" name="city"/>
            <label>Основное изображение </label><input required="required" onChange={(e)=>handle(e)} value={data.img} className="admin_upload_obj__input" type="text" name="img"/>
            <label>Изображение 2 </label><input onChange={(e)=>handle(e)} value={data.img2} className="admin_upload_obj__input" type="text" name="img2"/>
            <label>Изображение 3 </label><input onChange={(e)=>handle(e)} value={data.img3} className="admin_upload_obj__input" type="text" name="img3"/>
            <label>Изображение 4 </label><input onChange={(e)=>handle(e)} value={data.img4} className="admin_upload_obj__input" type="text" name="img4"/>
            <label>Изображение 5  </label><input onChange={(e)=>handle(e)} value={data.img5} className="admin_upload_obj__input" type="text" name="img5"/>
            <label>Изображение 6  </label><input onChange={(e)=>handle(e)} value={data.img6} className="admin_upload_obj__input" type="text" name="img6"/>
            <label>цена </label><input required="required" onChange={(e)=>handle(e)} value={data.price} className="admin_upload_obj__input" type="text" name="price"/>
            <label>валюта </label><input required="required" onChange={(e)=>handle(e)} value={data.crnc} className="admin_upload_obj__input" type="text" name="crnc"/>
            <label>Описание </label><input required="required" onChange={(e)=>handle(e)} value={data.descr} className="admin_upload_obj__input" type="text" name="descr"/>
            <label>Типовая постройка </label><select onChange={(e)=>handle(e)} value={data.el_l} className="admin_upload_obj__input" name="el_l" placeholder="тип недвижимости">
                <option value={true}>Да</option>
                <option value={false} selected>Нет</option>
            </select>
            <label>номер комнаты (Тип. Пост.) </label><input onChange={(e)=>handle(e)} value={data.t_bld_r || 0} className="admin_upload_obj__input" type="number" name="t_bld_r"/>
            <button>Добавить</button>


        </form>
    </div>
)
}

export function UploadObjectPict(){

    let {id} = useParams()

    let [estateInfo, SetEstateInfo] = useState([])
    let [estateInfoID, SetEstateInfoID] = useState('')

}