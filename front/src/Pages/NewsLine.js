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