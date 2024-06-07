import { Link } from "react-router-dom"
import logo_img from '../assets/logo_long.png'
import '../App.css'
import { useState } from "react"
import {QRCodeSVG} from 'qrcode.react'
export default function Header() {

    let style_hdr = {


        

    }

    let style_nav_a =  {

    }
    let style_nav_a_logo =  {
        paddingLeft: "24px",
        paddingRight: "24px",
        fontFamily: "sans-serif",
        fontWeight: "600",
        fontSize: "24pt",
        textDecoration: "none",
        color: "black",
        display: "flex",
        flexDirection: "column",
        justifyContent:"center",
        alignItems: "center"
    }


let [modalHdr, setModalHdr] = useState('none')


function setMdl(e){
    if (modalHdr === 'none'){
        setModalHdr('block')
    } else{
        setModalHdr('none')
    }
}//
let st = localStorage.getItem('isAuthCmp')
    return(
        <div className="wrp_hdr">
            <QRCodeSVG width={64} height={64} className="wrp_hdr_qr" value={window.location.href} />
                    <div className="header" style={style_hdr}>
            <Link className="header-logo_a" style={style_nav_a_logo} to="/"><img  src={logo_img} alt="Стромынский тракт" height="64px"/></Link>
            <div className="header-nav">
                <Link className="header-nav_a" style={style_nav_a} to="/catalog">Каталог недвижимости</Link>
                <Link className="header-nav_a" style={style_nav_a} to="/about">Об организации</Link>
                <Link className="header-nav_a" style={style_nav_a} to="/feedback">Обратная связь</Link>
                {!st && <Link className="header-nav_a" style={style_nav_a} to="/auth/empl">Войти</Link>}
                {st && <Link  to={`/admin`} className="header-nav_a" >Профиль</Link>}

            </div>
            <div className="header-nav_mob" >
            <i className="fa-solid fa-bars" onClick={() => setMdl()} style={{  marginRight: "24px"}}></i>
                <div className="header-nav_mob_modal" style={{display: modalHdr}}>
                    <Link className="header-nav_a" style={style_nav_a} to="/catalog" onClick={() => setMdl()}>Каталог недвижимости</Link>
                    <Link className="header-nav_a" style={style_nav_a} to="/about" onClick={() => setMdl()}>Об организации</Link>
                    <Link className="header-nav_a" style={style_nav_a} to="/feedback">Обратная связь</Link>
                    {!st && <Link className="header-nav_a" style={style_nav_a} to="/auth/empl">Войти</Link>}
                {st && <Link  to={`/admin`} className="header-nav_a" >Профиль</Link>}
                </div>
                
            </div>
            </div>
        </div>

    )
}