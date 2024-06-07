import { useState } from "react"
import axios from "axios"
import "./App.css"
import { Link } from "react-router-dom";
export default function AuthEmpl(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

function submit(e) {
  try{
  e.preventDefault();
  axios.post('http://localhost:8080/api/auth', {
      login: email,
      password: password
  }).then(res => {
    if(res.data === 'AUTH'){
            localStorage.setItem('cmp_name', email);
            localStorage.setItem('isAuthCmp', true)
            window.location.href=`/admin`;
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
    <h2>авторизация для сотрудников</h2>
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
      Если ты клиент, то <button className="Auth_submit" onClick={()=> window.location.href="/auth/client"}>Войдите как клиент</button>

</div>    
)

}
