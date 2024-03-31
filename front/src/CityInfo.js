import React from "react";
import axios from "axios";
import { useParams } from "react-router";
export default function CityInfo(){
    const [cities, setCites] = React.useState([])
    const {id_city} = useParams()

    React.useEffect(() => {
        if ( id_city ) {

            axios.get(`http://localhost:8080/api/ad/${id_city}`)
                .then(res => {
                    console.log(res.data.rows)
                    setCites(res.data.rows)
                })
                .catch(err => {
                    console.log(err)
                })
            }
    }, [ ]);
    
    const style_center = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    }
    const style_city_block = {
        width: "80%"

    }
    return(
        <div className="CityInfo" style={style_center}>
            {cities.map((e) => {return <div className="city_card" key={e.id_city} style={style_city_block}> 
                                <div className="header-city" style={{width: "100%", height:"500px", backgroundImage: `url(${e.image_city})`, backgroundPosition: "center", backgroundSize: "cover", color: "white", textShadow: "0px 0px 8px #000", display: "flex", alignItems: "center"}}>
                                <h3>{e.city_name}</h3>
                                <img className="flag" src={e.flag_city} alt={`${e.city_name} flag`} style={{objectFit: "cover", width: "320px", height:"209px"}}></img>

                                </div>
                                <h3>{e.city_name}</h3>
                            </div>})}
        </div>
    )
}