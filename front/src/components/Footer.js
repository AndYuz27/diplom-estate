import { Link } from "react-router-dom"
export default function Footer() {

    let style_hdr = {
            backgroundColor: "lightblue",
            width: "100%",
            height: "64px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "50px"

        

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
            <Link className="header-logo_a" style={style_nav_a_logo} to="/">2024 CREATED BY AndYuz27</Link>
            <div className="header-nav">
                <p>1994-2024 ООО Стромынский тракт</p>
            </div>
        </div>
    )
}