import "./About.css"
export default function AboutOrg(){

    let dat1a = [{
        "title": "О компании",
        "deescr": "ЗАО «Агентство недвижимости Стромынский тракт» образовано в 1993 году. За годы нашей деятельности компании удалось завоевать доверие клиентов, положительную репутацию на рынке недвижимости  и освоить новые  виды деятельности.",
        "img_place": "https://podmoskoviegid.ru/wp-content/uploads/2022/12/1-42.jpg",
        "phone_director": "89009999999",
        "name_director": "Федюк Иван Захарович",
        "email": "fedyukIZ@mail.ru"

    }]
    return(
        <div className="AboutOrg">
            {dat1a.map((e) => { return <div className="AboutOrg_wrapper">
                        <h2 className="AboutOrg__title">{e.title}</h2>
                        <div className="AboutOrg_wrapper_items">
                            <div className="AboutOrg_wrapper__left">
                                <p className="AboutOrg_wrapper__left_text">{e.deescr}</p>
                                <div className="AboutOrg_wrapper__left_line"></div>
                                <h3 className="AboutOrg_wrapper__left_title_contact">Контактная информация:</h3>
                                <h4 className="AboutOrg_wrapper__left_contact_fullname_ceo">{e.name_director}</h4>
                                <a className="AboutOrg_wrapper__left_title_contact_link" href={`mailto:${e.email}`}>{e.email}</a>
                                <a className="AboutOrg_wrapper__left_title_contact_link" href={`tel:${e.phone_director}`}>{e.phone_director}</a>
                            </div>
                            <div className="AboutOrg_wrapper__right">
                                <img className="AboutOrg_wrapper__right_img" src={e.img_place} alt="тут должна быть фотка" />
                            </div>
                        </div>
                        <button onClick={() => window.location.href = "/about/vacancy"} className="AboutOrg_wrapper_btn">Вакансии</button>
                    </div>
                
            })}
            <h2 className="AboutOrg__title"></h2>
        </div>
    )
}