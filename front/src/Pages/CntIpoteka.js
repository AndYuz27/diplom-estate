import { useState } from "react"
import './services.css'
export default function CntIpoteka(){
    const [sum_ipt, SetSumIpt] = useState('')
    const [bet, SetBet] = useState('')
    const [deadline, SetDeadline] = useState('')
    const [result, SetResult] = useState(``)

    function slovingStavka(e){
        e.preventDefault();
        console.log(sum_ipt)
        console.log(bet)
        console.log(deadline)

        let problem = Math.floor(( (Number(bet) / 1200)  +   (Number(bet) / 1200) /  (   ( 1 + (Number(bet) / 1200) ) ^ (Number(deadline) * 12) - 1   ) ) * Number(sum_ipt))
        console.log(problem)
        SetResult(problem)
    }

    return(
        <div className="cnt_ipoteka">
            <h2>Расчёт ипотеки</h2>
            <form className="form_ipoteka" onSubmit={slovingStavka}>
                <div className="field">
                    <label>Сумма</label><input type='number' onChange={(e) => SetSumIpt(e.target.value)}></input>
                    </div>
                    <div className="field">
                    <label>Процентная ставка</label><input type='number' onChange={(e) => SetBet(e.target.value)}></input>
                    </div>
                    <div className="field">
                    <label>срок кредита (лет)</label><input type='number' onChange={(e) => SetDeadline(e.target.value)}></input>
                    </div>
                    <button className="form_ipoteka_submit">Рассчитать</button>
            </form>
            {result && <b>Оплата ипотеки составляет: {result} руб/мес.</b>}
        </div>
    )
}