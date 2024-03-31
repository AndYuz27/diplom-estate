import './adv.css'
export default function Advantage({img, name, desr}){
    return(
        <div className="advatage_item">
            <div className="advantage_item_img" style={{backgroundImage: `url(${img})`}}></div>
            <h3 className="advantage_item_name">{name}</h3>
            <p className="advantage_item_descr">{desr}</p>
        </div>
    )
}