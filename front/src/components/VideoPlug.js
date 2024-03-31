import React from "react";


export default function VideoPlug({type_vidhost, link, w, h}){
    console.log(type_vidhost)
    if(type_vidhost === "yt"){
        let ye = "https://www.youtube.com/"
        console.log(ye.slice(32, 64))
    return(
<iframe width={w} height={h} src={`https://www.youtube.com/embed/${link.slice(32, 64)}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    )}if(type_vidhost === "rt"){
        return(
            <iframe width={w} height={h} src={`https://rutube.ru/play/embed/${link.slice(24, 64)}`} frameBorder="0" allow="clipboard-write; autoplay" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
    
    )}if(type_vidhost === "vk_vid"){
        let oid = link.slice(21, 30)
        let id = link.slice(31, 40)
        console.log(`oid - ${oid}   ID - ${id}`)
        return(
            <iframe src={`https://vk.com/video_ext.php?oid=-${oid}&id=${id}&hd=2`} width={w} height={h} allow="autoplay; encrypted-media; fullscreen; picture-in-picture;" frameborder="0" allowfullscreen></iframe>
        )
}
}