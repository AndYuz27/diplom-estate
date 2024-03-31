import './table.css'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
export default function AdminTable(){
    
    const [isLoad, setIsLoad] = useState(false)
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
    const [value, setValue] = useState('')
    const filterTable = esteList.filter(estate => {
        return estate.name_object.toLowerCase().includes(value.toLowerCase())
    })
    return(
        <div className="admin_table">
            <h2 className="admin_table__h2">Таблица данных недвижимости</h2>
            <input className='admin_table__serach_holder' type='text' placeholder='Введите название объекта' onChange={(e) =>setValue(e.target.value)}/>
            <div className="admin_table__table">
            <table>
  <tr>
    <th>Название недвижимости</th>
    <th>Тип недвижимости</th>
    <th>Адрес</th>
    <th>Цена</th>
  </tr>
{filterTable.map((e) => {
    return(
        <tr key={e.id_object} onClick={()=> window.location.href = `/catalog/${e.id_object}`}>
        <td>{e.name_object}</td>
        <td>{e.type_object}</td>
        <td>{e.address}</td>
        <td>{e.price} {e.currency}</td>
      </tr>
    )
})}

</table>

            </div>
        </div>
    )
}