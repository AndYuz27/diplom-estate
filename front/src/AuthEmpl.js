import { useState } from "react"
import axios from "axios"
import "./App.css"
import { Link } from "react-router-dom";
export default function AuthEmpl(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

const handleSubComp = (e) => {
    e.preventDefault();

    console.log(email, password);    
    
    const fetcher = async (lgn, pass) => {
      const response1 = await fetch("http://localhost:8080/api/user");
      const data1 = await response1.json();
      const data2 = data1.rows
      console.log(data2)
      const result = data2.find(({ email }) => email === lgn);
      console.log(result)
  try{
      if(lgn == result.email && pass == result.password){
          console.log('pass')
              let token = Math.floor(Math.random() * (1000000 - 1) + 1);
            console.log(token)
            console.log('pass')
            localStorage.setItem('test', token);
            localStorage.setItem('cmp_name', email);
            localStorage.setItem('isAuthCmp', true)
            window.location.href=`/admin`;
            console.log('reboot is compl')
      }else{
          console.log('fail')
          alert('неверное имя или пароль')
      }
  }catch(err){
      console.log('Ошибка авторизации \n error info: ', err)
      alert('Ошибка авторизации пожалуйста, обратитесь в тех поддержку: admin@strakt.ru')
  }
  
  }    
  fetcher(email, password)

};
return(
<div className="Auth">
    <h2>авторизация для сотрудников</h2>
    <form className="Auth_form" onSubmit={handleSubComp}>
        <div className="Auth_in">
          <label htmlFor='email'>Логин</label>
          <input className="Auth_input" type='text' id='email' value={email} onChange={(e) => setEmail(e.target.value)} required="required"/>
        </div>
        <div className="Auth_in">
          <label className="Auth_input" htmlFor='password'>Пароль</label>
          <input className="Auth_input" type='password' id='password' value={password} onChange={(e) => setPassword(e.target.value)} required="required"/>
        </div>
        <button className="Auth_submit">Войти</button>
      </form>
      Если ты клиент, то <button className="Auth_submit">Войдите как клиент</button>

</div>    
)

}


/*
 


 */