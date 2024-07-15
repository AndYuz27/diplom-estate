import React from "react";


let style_plist = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
}

export default function PriceList(){

    return(
        <div className="price_list" style={style_plist}>
            <h2 className="price_list_title">
                Прайс-лист услуг
            </h2>
            <table className="price_list_table">
                <tr>
                    <th>Наименование услуги</th>
                    <th>Цена</th>
                </tr>
                <tr>
                    <td>Перепланировка квартиры</td>
                    <td>от 20.000 руб.</td>
                </tr>
                <tr>
                    <td>Оформление сделки</td>
                    <td>от 20 000 руб.</td>
                </tr>
                <tr>
                    <td>Сопровождение сделки</td>
                    <td>от 50 000 руб.</td>
                </tr>
                <tr>
                    <td>Подбор (поиск) объекта недвижимости для покупки или аренды</td>
                    <td>10 000 руб.</td>
                </tr>
                <tr>
                    <td>Юридическая проверка объекта</td>
                    <td>15 000 руб.</td>
                </tr>
                <tr>
                    <td>Публикация объявления</td>
                    <td>от 250 руб в мес.</td>
                </tr>
                <tr>
                    <td>Подготовка договора купли-продажи</td>
                    <td>от 3000 руб</td>
                </tr>
            </table>
        </div>
    )
}