import '../App.css'
import { Link } from "react-router-dom"
import './comps.css'

import '../App.css'

export default function Footer() {

    let style_hdr = {


        

    }

    let style_nav_a =  {
        paddingLeft: "24px",
        paddingRight: "24px",
        fontFamily: "sans-serif",
        fontWeight: "600",
        fontSize: "14pt",
        textDecoration: "none",
        color: "black"
    }
    let style_nav_a_logo =  {
        paddingLeft: "24px",
        paddingRight: "24px",
        fontFamily: "sans-serif",
        fontWeight: "600",
        fontSize: "24pt",
        textDecoration: "none",
        color: "black"
    }

    return(
        <div className="footer" style={style_hdr}>
            <div className="footer-nav">
                <div className='footer-nav_links'>
                    <Link to='/' className='footer-nav_link'>Номера телефонов менеджеров</Link>
                    <Link to='/' className='footer-nav_link'>Вакансии</Link>
                    <Link to='/news' className='footer-nav_link'>Новости</Link>
                    <Link to='/' className='footer-nav_link'>Юридическая Информация</Link>
                </div>
                <b>Сайт создан Юзловым (AndYuz27) Андреем</b>
            </div> 
            <div className="footer-nav">
                <p>1993 - 2024 ООО Стромынский тракт</p>
            </div>
        </div>
    )
}