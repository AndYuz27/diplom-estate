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
    const [iimg1, SetImg1] = useState()
    const [iimg2, SetImg2] = useState()
    const [iimg3, SetImg3] = useState()
    const [iimg4, SetImg4] = useState()
    const [iimg5, SetImg5] = useState()
    const [iimg6, SetImg6] = useState()


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
        cnt_type: '',
        price: 0,
        crnc: '',
        upload: '',
        descr: '',
        date: '',
        istbld: false,
        t_bld_r: 0
    })

    function submit(e) {
        alert('Внимание, при публикации объявления, убедитесь, что данное объявление оплаченно, в ином случае объявление будет СНЯТО ИЗ КАТАЛОГА')
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
            img:  iimg1,
            img2: iimg2,
            img3: iimg3,
            img4: iimg4,
            img5: iimg5,
            img6: iimg6,
            cnt_type: "image/jpeg",
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

return(
    <div className="admin_upload_obj" >
        <h2 className="admin_upload_obj">Публикация объекта</h2>
        <form className="admin_upload_obj__form" onSubmit={submit}>

<div className="form_data">
    <div className="field_lr text_info_form">
        <h2>Текстовая информация</h2>
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
            <label>Кол-во комнат </label><input required="required" onChange={(e)=>handle(e)} value={data.cnt_r} className="admin_upload_obj__input" type="number" name="cnt_r" placeholder="1" min='1' max='12'/>
            <label>Кол-во этажей/этаж квартиры </label><input required="required" onChange={(e)=>handle(e)} value={data.cnt_flr} className="admin_upload_obj__input" type="number" name="cnt_flr" placeholder="1" min='1' max='30'/>
            <label>Адрес (без города) </label><input required="required" onChange={(e)=>handle(e)} value={data.adrs} className="admin_upload_obj__input" type="text" name="adrs"/>
            <label>Площадь </label><input required="required" onChange={(e)=>handle(e)} value={data.sq_m} className="admin_upload_obj__input" type="number" name="sq_m"/>
            <label>Тип постройки </label><input required="required" onChange={(e)=>handle(e)} value={data.t_bld} className="admin_upload_obj__input" type="text" name="t_bld"/>
            <label>Город </label> <input required="required" onChange={(e)=>handle(e)} value={data.city} className="admin_upload_obj__input" type="text" name="city"/>
            <label>цена </label><input required="required" onChange={(e)=>handle(e)} value={data.price} className="admin_upload_obj__input" type="text" name="price"/>
            <label>валюта </label><input required="required" onChange={(e)=>handle(e)} value={data.crnc} className="admin_upload_obj__input" type="text" name="crnc"/>
            <label>Описание </label><input required="required" onChange={(e)=>handle(e)} value={data.descr} className="admin_upload_obj__input" type="text" name="descr"/>
            <label>Типовая постройка </label><select onChange={(e)=>handle(e)} value={data.el_l} className="admin_upload_obj__input" name="el_l" placeholder="тип недвижимости">
                <option value={true}>Да</option>
                <option value={false} selected>Нет</option>
            </select>
            <label>номер комнаты (Тип. Пост.) </label><input onChange={(e)=>handle(e)} value={data.t_bld_r || 0} className="admin_upload_obj__input" type="number" name="t_bld_r"/>
        </div>
        <div className="field_lr image_info_form">
        <h2>загрузка изображения</h2>

            <label>Основное изображение </label><input required="required" accept=".jpg,.jpeg" onChange={(e)=>loadFile1(e.target.files[0])}  className="admin_upload_obj__input" type="file" name="img"/>
            <img src={iimg1} alt="test" width={320}/>
            <label>Изображение 2 </label><input accept=".jpg,.jpeg" onChange={(e)=>loadFile2(e.target.files[0])} className="admin_upload_obj__input" type="file" name="img2"/>
            <img src={iimg2} alt="test" width={320}/>
            <label>Изображение 3 </label><input accept=".jpg,.jpeg" onChange={(e)=>loadFile3(e.target.files[0])} className="admin_upload_obj__input" type="file" name="img3"/>
            <img src={iimg3} alt="test" width={320}/>
            <label>Изображение 4 </label><input accept=".jpg,.jpeg" onChange={(e)=>loadFile4(e.target.files[0])} className="admin_upload_obj__input" type="file" name="img4"/>
            <img src={iimg4} alt="test" width={320}/>
            <label>Изображение 5 </label><input accept=".jpg,.jpeg" onChange={(e)=>loadFile5(e.target.files[0])} className="admin_upload_obj__input" type="file" name="img5"/>
            <img src={iimg5} alt="test" width={320}/>
            <label>Изображение 6 </label><input accept=".jpg,.jpeg" onChange={(e)=>loadFile6(e.target.files[0])} className="admin_upload_obj__input" type="file" name="img6"/>
            <img src={iimg6} alt="test" width={320}/>
        </div>
</div>
        
        

            
            <button>Добавить</button>


        </form>
    </div>
)
}

