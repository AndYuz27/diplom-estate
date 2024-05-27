import "./App.css"

export default function AuthClient(){
    return(
<div className="Auth">
    <h2>авторизация для сотрудников</h2>
    <form className="Auth_form" >
        <div className="Auth_in">
          <label htmlFor='email'>Логин</label>
          <input className="Auth_input" type='text' id='email' required="required"/>
        </div>
        <div className="Auth_in">
          <label className="Auth_input" htmlFor='password'>Пароль</label>
          <input className="Auth_input" type='password' id='password' required="required"/>
        </div>
        <button className="Auth_submit">Войти</button>
      </form>
      Если ты клиент, то <button className="Auth_submit">Войдите как сотрудник</button>

</div>    
    )
}