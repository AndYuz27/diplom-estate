import { useState, useEffect } from "react"
import './adminstyle.css'
import axios from "axios"

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
        cnt_r:  '',
        cnt_flr:  '',
        adrs:  '',
        catv:  false,
        secr:  false,
        el_n:  false,
        el_l:  false,
        sq_m:  '',
        t_bld:  '',
        city:  '',
        img:  '',
        img2:  '',
        img3:  '',
        img4:  '',
        img5:  '',
        img6:  '',
        price: '',
        crnc: '',
        upload: '',
        descr: '',
        date: '',
        istbld: false,
        t_bld_r: ''
    })

    function submit(e) {
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
            upload: 1,
            descr: data.descr,
            date: new Date(),
            istbld: data.istbld,
            t_bld_r: data.t_bld_r
        }).then(res => {
            console.log(res.data)
        })

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
            <input onChange={(e)=>handle(e)} value={data.nm} className="admin_upload_obj__input" type="text" name="nm" placeholder="Название объекта"/>
            <select onChange={(e)=>handle(e)} value={data.type} className="admin_upload_obj__input" name="type" placeholder="тип недвижимости">
                <option value="first">Квартира</option>
                <option value="second" selected>Дача</option>
                <option value="third">Third Value</option>
            </select>
            <label>Наличие видеонаблюдения<select onChange={(e)=>handle(e)} value={data.catv} className="admin_upload_obj__input" name="catv" placeholder="тип недвижимости">
                <option value={true}>Есть</option>
                <option value={false} selected>Нет</option>
            </select> </label>
            <label>Наличие охраны<select onChange={(e)=>handle(e)} value={data.secr} className="admin_upload_obj__input" name="secr" placeholder="тип недвижимости">
                <option value={true}>Есть</option>
                <option value={false} selected>Нет</option>
            </select> </label>
            <label>Наличие лифта (пасс.)<select onChange={(e)=>handle(e)} value={data.el_n} className="admin_upload_obj__input" name="el_n" placeholder="тип недвижимости">
                <option value={true}>Есть</option>
                <option value={false} selected>Нет</option>
            </select> </label>
            <label>Наличие лифта (г/п)<select onChange={(e)=>handle(e)} value={data.el_l} className="admin_upload_obj__input" name="el_l" placeholder="тип недвижимости">
                <option value={true}>Есть</option>
                <option value={false} selected>Нет</option>
            </select> </label>
            <label>Кол-во комнат <input onChange={(e)=>handle(e)} value={data.cnt_r} className="admin_upload_obj__input" type="number" name="cnt_r" placeholder="1" min='1' max='6'/></label>
            <label>Кол-во этажей/этаж квартиры <input onChange={(e)=>handle(e)} value={data.cnt_flr} className="admin_upload_obj__input" type="number" name="cnt_flr" placeholder="1" min='1' max='6'/></label>
            <label>Адрес (без города) <input onChange={(e)=>handle(e)} value={data.adrs} className="admin_upload_obj__input" type="text" name="adrs"/></label>
            <label>Площадь <input onChange={(e)=>handle(e)} value={data.sq_m} className="admin_upload_obj__input" type="number" name="sq_m"/></label>
            <label>Тип постройки <input onChange={(e)=>handle(e)} value={data.t_bld} className="admin_upload_obj__input" type="text" name="t_bld"/></label>
            <label>Город <input onChange={(e)=>handle(e)} value={data.city} className="admin_upload_obj__input" type="text" name="city"/></label>
            <label>Img1<input onChange={(e)=>handle(e)} value={data.img} className="admin_upload_obj__input" type="text" name="img"/></label>
            <label>Img2<input onChange={(e)=>handle(e)} value={data.img2} className="admin_upload_obj__input" type="text" name="img2"/></label>
            <label>Img3<input onChange={(e)=>handle(e)} value={data.img3} className="admin_upload_obj__input" type="text" name="img3"/></label>
            <label>Img4<input onChange={(e)=>handle(e)} value={data.img4} className="admin_upload_obj__input" type="text" name="img4"/></label>
            <label>Img5<input onChange={(e)=>handle(e)} value={data.img5} className="admin_upload_obj__input" type="text" name="img5"/></label>
            <label>Img6<input onChange={(e)=>handle(e)} value={data.img6} className="admin_upload_obj__input" type="text" name="img6"/></label>
            <label>цена<input onChange={(e)=>handle(e)} value={data.price} className="admin_upload_obj__input" type="text" name="price"/></label>
            <label>валюта<input onChange={(e)=>handle(e)} value={data.crnc} className="admin_upload_obj__input" type="text" name="crnc"/></label>
            <label>Описание<input onChange={(e)=>handle(e)} value={data.descr} className="admin_upload_obj__input" type="text" name="descr"/></label>
            <label>Типовая постройка<select onChange={(e)=>handle(e)} value={data.el_l} className="admin_upload_obj__input" name="el_l" placeholder="тип недвижимости">
                <option value={true}>Да</option>
                <option value={false} selected>Нет</option>
            </select></label>
            <label>номер комнаты (Тип. Пост.)<input onChange={(e)=>handle(e)} value={data.t_bld_r} className="admin_upload_obj__input" type="number" name="t_bld_r"/></label>
            <button>Add</button>


        </form>
    </div>
)
}