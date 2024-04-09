import { useState, useEffect } from "react"
import './adminstyle.css'

export default function UploadObject() {
    const url='http://localhost:8080/api/object'
    const [data, setData] = useState({
        nm:  '',
        nick:  '',
        pwd:  '',
        ogrn:  '',
        adrs:  '',
        tcomp:  '',
        sdey:  '',
        sdey:  '',
        vacs:  '',
        cnts:  '',
        info:  '',
        rtg:  '',
        img:  ''
    })

return(
    <div className="admin_upload_obj">
        <h2 className="admin_upload_obj">Публикация объекта</h2>
        <form className="admin_upload_obj__form">
            <input className="admin_upload_obj__input" type="text" placeholder="Название объекта"/>
            <select className="admin_upload_obj__input" name="choice" placeholder="тип недвижимости">
                <option value="first">Квартира</option>
                <option value="second" selected>Дача</option>
                <option value="third">Third Value</option>
            </select>
            <input className="admin_upload_obj__input" type="text" placeholder="Площадь объекта (м2)"/>
            <input className="admin_upload_obj__input" type="text" placeholder="Цена"/>
            <input className="admin_upload_obj__input" type="text" placeholder="город"/>
            <input className="admin_upload_obj__input" type="text" placeholder="адрес"/>
            <input className="admin_upload_obj__input" type="text" placeholder="адрес"/>
            <input className="admin_upload_obj__input" type="checkbox" placeholder="кабельное ТВ"/> <label>кабельное тв</label>

        </form>
    </div>
)
}