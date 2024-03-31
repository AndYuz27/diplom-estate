import { Link } from "react-router-dom"
export default function Header() {

    let style_hdr = {
            backgroundColor: "lightblue",
            width: "100%",
            height: "64px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",

        

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
        <div className="header" style={style_hdr}>
            <Link className="header-logo_a" style={style_nav_a_logo} to="/">Стромынский тракт</Link>
            <div className="header-nav">
                <Link className="header-nav_a" style={style_nav_a} to="/catalog">Каталог недвижимости</Link>
                <a className="header-nav_a" style={style_nav_a} href="#">Об организации</a>
                <Link className="header-nav_a" style={style_nav_a} to="/auth/empl">Войти</Link>
            </div>
        </div>
    )
}