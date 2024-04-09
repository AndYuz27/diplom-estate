import './vacancy.css'
export default function Vacancy(){
    return(
        <div className="vacancy">
            <h2 className="vacancy__title">Вакансии для вас</h2>
            <div className="vacancy__list">
                <div className="vacancy__list_item" onClick={() => window.location.href = "/about/vacancy/1"}>
                    <h3 className="vacancy_list_item_name">Администратор</h3>
                    <h3 className="vacancy_list_item_salary">Зарплата: 60 000 руб.</h3>
                    <h3 className="vacancy_list_item_schedule">График: 5/2 (пн-пт)</h3>
                </div>
            
            </div>
        </div>
    )
}