import '../App.css'
import '../AAA.css'
export default function ChooseItem({icon, name_icon, link_icon}){
    
    return(
    <div className="choose_type_item" onClick={() => window.location.href = link_icon}>
        <div className="img_choose_cover" style={{backgroundImage: `url(${icon})`}}></div>
        <p className="choose_type_item_title">{name_icon}</p>
    </div>
    )
}