import "./App.css"

export default function AuthClient(){
    return(
        <div className="Auth">
            <form className="auth-form">
                <input type="email" name="email" placeholder="эл. почта"></input>
                <br></br>
                <input type="password" name="password" placeholder="пароль"></input>
            <br></br>
                            <button type="submit">Submit form</button>
            </form>
            Если ты сотрудник агентства, то <button>ВАМ СЮДА</button>
        </div>
    )
}