import { useState } from "react";
import "./App.css"
import axios from "axios";

export default function AuthClient(){


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function submit(e) {
    try{
    e.preventDefault();
    axios.post('http://localhost:8080/api/auth_client_log', {
        login: email,
        password: password
    }).then(res => {
      if(res.data === 'AUTH'){
              localStorage.setItem('email_client', email);
              localStorage.setItem('isAuthClient', true)
              window.location.href=`/client/${email}`;
              console.log('reboot is compl')   
      }else{
        alert('Неверный логин или пароль')
      }
    })
  }catch(err){
        console.log('ошибка загрузки в базу\n', err)
        alert('ошибка загрузки данных')
    }
  
  }

    return(
<div className="Auth">
    <h2>авторизация для клиентов</h2>
    <form className="Auth_form" onSubmit={submit}>
        <div className="Auth_in">
          <label className='Auth_label'>Логин</label>
          <div className="input_aaa">
          <input className="Auth_input" type='text' id='email' value={email} onChange={(e) => setEmail(e.target.value)} required="required"/>
          <div className="line"></div>
          </div>
        </div>
        <div className="Auth_in">
          <label className="Auth_label">Пароль</label>
          <div className="input_aaa">

          <input className="Auth_input" type='password' id='password' value={password} onChange={(e) => setPassword(e.target.value)} required="required"/>
          <div className="line"></div>
        </div>
        </div>
        <button className="Auth_submit">Войти</button>
      </form>
      Если ты сотрудник, то <button className="Auth_submit" onClick={()=> window.location.href="/auth/empl"}>Войдите как сотрудник</button>
      <button className="Auth_submit" onClick={()=> window.location.href="/auth/client/add"}>Регистрация</button>

</div>    
    )
}