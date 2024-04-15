

export default function CardEstate(t){
    //fn.comp.nik_name 
    return(
<div className="catalog_list_item">
                <div className="catalog_list_item-img">
                        <img className="catalog_list_item-img-a" src={t.el.image} width="320px" alt="estate"/>
                    </div>
                    <div className="catalog_list_item-short-info">
                        <h2 className="catalog_list_item-short-info__hdr-text">{t.el.name_object}</h2>
                        <p className="catalog_list_item-short-info__text">{t.el.price} {t.el.currency}</p>
                        <p className="catalog_list_item-short-info__location">{t.el.address}</p>
                        <p className="catalog_list_item-short-info__floor">{t.el.cnt_floors} этаж  {t.el.cnt_rooms} комн.</p>
                    </div>
                </div>
    )

}



/**
 onClick={() => {
                    setModalActive(true)
                    gethhh(e.id_object, e.who_upload)}}
 */
/*

<div className="catalog_list_item" key={e.id_object} onClick={() => {
                    setModalActive(true)
                    gethhh(e.id_object, e.who_upload)}}>
                <div className="catalog_list_item-img">
                        <img className="catalog_list_item-img-a" src={e.image} width="320px" alt="estate"/>
                    </div>
                    <div className="catalog_list_item-short-info">
                        <h2 className="catalog_list_item-short-info__hdr-text">{e.name_object}</h2>
                        <p className="catalog_list_item-short-info__text">{e.price} {e.currency}</p>
                        <p className="catalog_list_item-short-info__location">{e.address}</p>
                        <p className="catalog_list_item-short-info__floor">{e.cnt_floors} этаж  {e.cnt_rooms} комн.</p>
                    </div>
                </div>

*/