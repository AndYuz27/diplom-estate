import React from 'react'
import "./feedback.css"
import { FBackList } from '../components/api';
import axios from 'axios';

export default function Feedback(){

    const [data, setData] = React.useState({
        nm:  '',
        email: '',
        phone: '',
        theme: '',
        object: '',
        message: ''        
    })

    function submit(e) {
        console.log('test')
        try{
        e.preventDefault();
        axios.post(FBackList, {
            nm:  data.nm,
            email: data.email,
            phone: data.phone,
            theme: data.theme,
            object: data.object,
            message: data.message
        }).then(res => {
            console.log(res.data)
            alert('Отправлено! Спасибо за обратную связь')
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


//example
    return(
        <div className="feedback">
            <h2 className="feedback_h2">Обратная связь</h2>
            <form className='feedback_form' onSubmit={submit}>
                <div className='feedback_form_input_block'>
                    <label className='feedback_form_input_block_label'>Ваше имя</label>
                    <input className='feedback_form_input_block_label_input' name='nm' onChange={(e)=>handle(e)} value={data.nm} type='text' placeholder='Иван Иванов' required="required"></input>
                </div>
                <div className='feedback_form_input_block'>
                    <label className='feedback_form_input_block_label'>Ваш e-mail</label>
                    <input className='feedback_form_input_block_label_input' type='email' name='email' onChange={(e)=>handle(e)} placeholder='ivanovii@mail.ru' value={data.email} required="required"></input>
                </div>
                <div className='feedback_form_input_block'>
                    <label className='feedback_form_input_block_label'>Ваш телефон</label>
                    <input className='feedback_form_input_block_label_input' type='tel' onChange={(e)=>handle(e)} name='phone' placeholder='+7(910)999-99-99' value={data.phone} required="required"></input>
                </div>
                <div className='feedback_form_input_block'>
                    <label className='feedback_form_input_block_label'>Тема вопроса</label>
                    <input className='feedback_form_input_block_label_input' type='text' onChange={(e)=>handle(e)} name='theme' placeholder='название темы' value={data.theme} required="required"></input>
                </div>
                <div className='feedback_form_input_block'>
                    <label className='feedback_form_input_block_label'>Объект</label>
                    <input className='feedback_form_input_block_label_input' type='text' onChange={(e)=>handle(e)} value={data.object} name='object' placeholder='Дача'></input>
                </div>
                <div className='feedback_form_input_block'>
                    <label className='feedback_form_input_block_label'>Сообщение</label>
                    <input className='feedback_form_input_block_label_input' type='text' onChange={(e)=>handle(e)} value={data.message} name='message' placeholder='Введите сообщение...'></input>
                </div>
             <button className='feedback_form_input_submit'>Отправить сообщение</button>
            </form>
        </div>
    )
}