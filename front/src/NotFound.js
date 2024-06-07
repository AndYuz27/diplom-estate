import error_pic from "./assets/404.jpg"

import { YMaps, Map, RoutePanel, Placemark } from '@pbe/react-yandex-maps';
import React, {useState, useEffect} from 'react'



export default function NotFound(){
    let nf_style = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px"
    }
    return(
        <div classname="not-found" style={nf_style}>
        <h1>Простите, но данной страницы не существует</h1>
        <img src={error_pic} width="600" alt="404"></img>
        <p>Designed by storyset / Freepik</p>
        </div>
    )
}


