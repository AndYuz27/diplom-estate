import "./App.css"
export default function AuthEmpl(){
    return(
        <div className="Auth">
            <div className="auth-center">
            <form className="auth-form">
                <input type="email" name="email" placeholder="эл. почта"></input>
                <br></br>
                <input type="password" name="password" placeholder="пароль"></input>
            <br></br>
                <button type="submit">Submit form</button>
            </form>
            Если ты клиент, то <button>ВАМ СЮДА</button>
            </div>
        </div>
    )
}