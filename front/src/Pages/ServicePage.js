import React from 'react'
import "./services.css"
import axios from 'axios';
import { useParams } from 'react-router';

export default function ServicePage() {
let { id } = useParams()
    let [serveList, setServeList] = React.useState([])
    let [PropsArray, setPropsArray] = React.useState([])
    let [ConsArray, setConsArray] = React.useState([])

    React.useEffect(() => {
        if ( id ) {
            axios.get(`http://localhost:8080/api/service/${id}`)
                .then(res => {
                    console.log(res.data.rows)
                    setServeList(res.data.rows)
                    setPropsArray(res.data.rows[0].props)
                    setConsArray(res.data.rows[0].cons)

                })
                .catch(err => {
                    console.log(err)
                })
        }
    }, [ id ]);


    return(
        <div className="service_page"> 
                {serveList.map((e)=> {
                    return(
                    <div className="service_page_wrapper" key={e.id}>
                        <div className='service_page_wrapper_main'>
                        <img src={e.image} alt={e.name} width="480"/>
                        <div className="service_page_descr">
                            <h2 className="service_page_descr_title">{e.name}</h2>
                            <p className="service_page_descr_p">{e.description}</p>
                            <h3 className="service_page_descr_price">от {e.price_from} RUB</h3>
                        </div>
                        </div>
                        <div className='service_page_props_cons'>
                            <table className='service_page_props_cons_table'>
                                <tr>
                                <th className='service_page_props_cons_table_hdr'>
                                    Плюсы
                                </th>
                                </tr>
                                {PropsArray.map((prpar, index) => (<tr key={index}><td>{prpar}</td></tr>))}


                            </table>
                            <table className='service_page_props_cons_table'>
                                <tr>
                                <th className='service_page_props_cons_table_hdr'>
                                    Минусы
                                </th>
                                </tr>
                                {ConsArray.map((prpar, index) => (<tr key={index}><td>{prpar}</td></tr>))}


                            </table>
                        </div>
                        <div className='service_page_name_handler'>
                            <h3 className='service_page_name_handler'>
                                ФИО принимающего работу: {e.name_handler}
                            </h3>
                        </div>
                    </div>
                    )
                })}
        </div>
    )
}

export function SeparateService(){
    return(
<></>
    )
}