import './table.css'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import ModalEstate from '../components/ModalEstate'
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

    function delObject(i){
        fetch(`http://localhost:8080/api/object/${i}`,{
            method: 'DELETE'
        }).then((result) => {
            result.json().then((res) =>{
                console.log(res)
            })
        })    
    console.log('object is deleted')
    }
    const [value, setValue] = useState('')
    const filterTable = esteList.filter(estate => {
        return estate.name_object.toLowerCase().includes(value.toLowerCase())
    })
    let [modalHdr, setModalHdr] = useState('none')
    const [modalActive, setModalActive] = useState(false)
    const [id_estate, setid_estate] = useState('')


    function setMdl(e){
        if (modalHdr === 'none'){
            setModalHdr('block')
        } else{
            setModalHdr('none')
        }
    }



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
    <th className='action_column'>Действия с данными</th>
  </tr>
{filterTable.map((e) => {
    return(
        <tr key={e.id}>
        <td onClick={()=> window.location.href = `/catalog/${e.id}`}>{e.name_object}</td>
        <td onClick={()=> window.location.href = `/catalog/${e.id}`}>{e.type_object}</td>
        <td onClick={()=> window.location.href = `/catalog/${e.id}`}>{e.address}</td>
        <td onClick={()=> window.location.href = `/catalog/${e.id}`}>{e.price} {e.currency}</td>
        <td className='action_column'><button className='btn_table btn_del' onClick={() => {
                            setModalActive(true)
                            setid_estate(e.id)
                            setModalHdr()}}>Удалить</button> <button className='btn_table btn_change' onClick={ () => delObject()}>Изменить</button></td>
      </tr>
    )
})}

</table>
<ModalEstate active={modalActive} setActive={setModalActive}>
<div className='del_modal' style={{display: modalHdr}}>
    <h2>Вы хотите удалить объект?</h2>
    <div className='del_modal_btns'>
        <button className='btn_del btn_modal_del' onClick={()=>{
        delObject(id_estate)
        window.location.href= "/admin/table"
    }}>ДА</button>
    <button className='btn_cancel_modal btn_modal_del' onClick={() => {
                            setModalActive(false)
                            setid_estate('')
                            setModalHdr()}}>НЕТ</button>
    </div>
    
</div>
</ModalEstate>
            </div>
        </div>
    )
}