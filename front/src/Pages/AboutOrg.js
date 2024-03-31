export default function AboutOrg(){

    let dat1a = [{
        "title": "О компании",
        "deescr": "ЗАО «Агентство недвижимости Стромынский тракт» образовано в 1993 году. За годы нашей деятельности компании удалось завоевать доверие клиентов, положительную репутацию на рынке недвижимости  и освоить новые  виды деятельности.",
        "img_place": "https://podmoskoviegid.ru/wp-content/uploads/2022/12/1-42.jpg",
        "phone-director": "89009999999",
        "name-director": "Федюк Иван Захарович",
        "email": "fedyukIZ@mail.ru"

    }]
    return(
        <div className="AboutOrg">
            {dat1a.map((e) => { return <div className="ggg">
                        <h2 className="AboutOrg__title">{e.title}</h2>
                        <p>{e.deescr}</p>
                    </div>
                
            })}
            <h2 className="AboutOrg__title"></h2>
        </div>
    )
}