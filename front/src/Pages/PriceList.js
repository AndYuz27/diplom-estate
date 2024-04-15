import React from "react";

export default function PriceList(){

    return(
        <div className="price_list">
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
            </table>
        </div>
    )
}