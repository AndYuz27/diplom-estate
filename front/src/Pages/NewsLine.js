import React, { useEffect, useState } from "react";
import '../components/comps.css'
import axios from "axios";
import { useParams } from "react-router";
export default function NewsLine(){

    const [data, setData] = React.useState([])

    useEffect(()=>{
        axios.get('http://localhost:8080/api/news')
        .then(res=> {
            setData(res.data.rows)
        }).catch(err => {
            console.log(err)
        })
    }, [])
    return(
        <div className="newsline">
            <h2 className="newsline__title">Новости компании</h2>
            <h3 className="newsline__title_cnt">Кол-новостей: 13</h3>
            <div className="newsline_items">
{/*{iimg1 !== undefined ? iimg1 : "https://velaxom.ru/assets/images/rasprodazha/kessler-parts/no-image.png"} */}
                <div className="newsline_item">
                    <div className="newsline_item_wrapper">
                        <img src="https://www.meme-arsenal.com/memes/455cd6d5e8946230e7c8b7f8c469b2ad.jpg" alt="news" className="newsline_item_img"/>
                        <div className="newsline_item_info">
                            <h2 className="newsline_item_info_ttl">Спрос на недвижимость возрастает</h2>
                            <h3 className="newsline_item_info_date">24.05.2024</h3>
                        </div>
                    </div>
                    <div className="newsline_item_plank"></div>
                </div>
                {data.map((e) => {
                    return(
                        <div className="newsline_item" onClick={() => window.location.href= `/news/${e.id}`}>
                        <div className="newsline_item_wrapper">
                            <img src={e.image !== null ? e.image : "https://velaxom.ru/assets/images/rasprodazha/kessler-parts/no-image.png"} alt={e.title} className="newsline_item_img"/>
                            {/* <img src={e.image} alt={e.title} className="newsline_item_img"/> */}
                            <div className="newsline_item_info">
                                <h2 className="newsline_item_info_ttl">{e.title} </h2>
                                <h3 className="newsline_item_info_date">{(e.date).slice(8, 10)}.{(e.date).slice(5, 7)}.{(e.date).slice(0, 4)}</h3>
                                {/* <h3 className="newsline_item_info_date">{(e.date)} </h3> */}
                            </div>
                        </div>
                        <div className="newsline_item_plank"></div>
                    </div>
                    )
                })}
            </div>
        </div>
    )
}

export function NewsPage(){
    const [data, setData] = useState([])

    let {id} = useParams()
    useEffect(()=> {
        if(id){
            axios.get(`http://localhost:8080/api/news/${id}`).then(res=> {console.log(res.data.rows); setData(res.data.rows)})

        }
    }, [id])

    return(

        <div className="news">
            {data.map((e) => {
                return(
            <div className="news_main_wrapper">
                <div className="news_main_wrapper_main">
                <img src={e.image !== null ? e.image : "https://velaxom.ru/assets/images/rasprodazha/kessler-parts/no-image.png"} alt={e.title} className="news_img"/>
                <h2 className="news_title">{e.title}</h2>
                </div>
                <div className="news_main_wrapper_descr">
                    <h4>Дата: {(e.date).slice(8, 10)}.{(e.date).slice(5, 7)}.{(e.date).slice(0, 4)}</h4>
                    <p>{e.description}</p>
                </div>
            </div>
                )
            })}

        </div>
)

}

export function CreateNews(){

    const [data, setData] = useState({
        title:  '',
        date:  '',
        description:  '',
        image:  ''
    })

    function submit(e) {
        try{
        e.preventDefault();
        axios.post(`http://localhost:8080/api/news`, {
            title:  data.title,
            date:  new Date(),
            description:  data.description,
            image:  data.image 
        }).then(res => {
            console.log(res.data)
            window.location.href="/admin/news"
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
        // console.log(crds)
    }
    return(
        <div className="create news">
            <h2>создание новостной статьи</h2>
            <form onSubmit={submit} className="admin_upload_obj__form">
            <label>Название статьи</label><input required="required" onChange={(e)=>handle(e)} value={data.title} className="admin_upload_obj__input" type="text" name="title" placeholder="Текст...."/>
            <label>Текст</label><textarea rows={50} cols={120} required="required" onChange={(e)=>handle(e)} value={data.description} className="admin_upload_obj__input_tar" type="text" name="description" placeholder="описание...."/>
            <label>Изображение</label><input required="required" onChange={(e)=>handle(e)} value={data.image} className="admin_upload_obj__input" type="text" name="image" placeholder="ссылка на изображение"/>
                <button>Отправить</button>
            </form>
        </div>
    )
}