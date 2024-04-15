import React from 'react'
import "./services.css"
import axios from 'axios';

export default function Services() {

    let [serveList, setServeList] = React.useState([])

    React.useEffect(() => {
        axios.get(`http://localhost:8080/api/service`)
            .then(res => {
                console.log(res.data.rows)
                setServeList(res.data.rows)
            })
            .catch(err => {
                console.log(err)
            })
    
}, []);


    return(
        <div className="services"> 
            <h2 className="services_h2">Услгуи по недвижимости</h2>
            <div className='services_list'>
                {serveList.map((e)=> {
                    return(
                    <div className="services_list_item" key={e.id} onClick={() => window.location.href=`/services/${e.id}`}>
                        <img src={e.image} alt={e.name} width="250"/>
                        <div className="services_list_item_descr">
                            <h2 className="services_list_item_descr_title">{e.name}</h2>
                            <p className="services_list_item_descr_p">{e.description}</p>
                            <h3 className="services_list_item_descr_price">от {e.price_from} RUB</h3>
                        </div>
                    </div>
                    )
                })}

            </div>
        </div>
    )
}

export function SeparateService(){
    return(
<></>
    )
}