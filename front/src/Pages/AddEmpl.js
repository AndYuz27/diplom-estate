import React from "react";
import axios from "axios";
import '../components/style_comps.css'
function AddEmpl() {

let style_form ={
    width: "600px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    margin: "32px"
}
let style_inp = {
    marginBottom: "16px"
}
let styleee = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
}

let [data_pos, setDataPos] = React.useState([])
const [iimg1, SetImg1] = React.useState()



const [data, setData] = React.useState({
    name: '',
    sur: '',
    lastn: '',
    email: '',
    pass: '',
    pass_series: '',
    pass_num: '',
    passget: '',
    dept_code: '',
    tax_id: '',
    posid: 0,
    phone: '',
    img_p: '',
    tg: '',
    nk: ''
})

React.useEffect(() => {
        axios.get(`http://localhost:8080/api/position`)
            .then(res => {
                console.log(res.data.rows)
                setDataPos(res.data.rows)
            })
            .catch(err => {
                console.log(err)
            })
}, []);


function submit(e) {
    try{
    e.preventDefault();
    axios.post('http://localhost:8080/api/user', {
        name: data.name,
        sur: data.sur,
        lastn: data.lastn,
        email: data.email,
        pass: data.pass,
        pass_series: data.pass_series,
        pass_num: data.pass_num,
        passget: data.passget,
        dept_code: data.dept_code,
        tax_id: data.tax_id,
        posid: Number(data.posid),
        phone: data.phone,
        img_p: iimg1,
        tg: data.tg,
        nk: data.nk
    }).then(res => {
                console.log(res.data)
        alert('Пользователь добавлен')
    })
}catch(err){
        console.log('ошибка загрузки в базу\n', err)
        alert('ошибка загрузки данных')
    }

}


function handle(e) {
    const newdata={...data}
    newdata[e.target.name] = e.target.value
    setData(newdata)
    console.log(newdata)
}

function loadFile1(a){
    const file = a;
    let reader = new FileReader();
    const read = reader.readAsDataURL(file)
    reader.onload = function() {
        console.log(reader.result);
        SetImg1(reader.result)
      };
    
    }



    return(
        <div className="addempl" style={styleee}>
            <h2>Добавление сотрудника</h2>
            <form className="addempl_form" style={style_form} onSubmit={submit}>
                <input name="name" onChange={(e)=>handle(e)} value={data.name} className="inp_aaa" style={style_inp} type="text" placeholder="Имя"></input>
                <input name="sur" onChange={(e)=>handle(e)} value={data.sur} className="inp_aaa" style={style_inp} type="text" placeholder="Фамилия"></input>
                <input name="lastn" onChange={(e)=>handle(e)} value={data.lastn} className="inp_aaa" style={style_inp} type="text" placeholder="Отчество"></input>
                <input name="email" onChange={(e)=>handle(e)} value={data.email}  className="inp_aaa" style={style_inp} type="email" placeholder="эл. почта"></input>
                <input name="pass" onChange={(e)=>handle(e)} value={data.pass}  className="inp_aaa" style={style_inp} type="password" placeholder="Пароль"></input>
                <input name="pass_series" onChange={(e)=>handle(e)} value={data.pass_series}  className="inp_aaa" style={style_inp} type="text" placeholder="Серия паспорта"></input>
                <input name="pass_num" onChange={(e)=>handle(e)} value={data.pass_num}  className="inp_aaa" style={style_inp} type="text" placeholder="Номер паспорта"></input>
                <input name="passget" onChange={(e)=>handle(e)} value={data.passget}   className="inp_aaa" style={style_inp} type="text" placeholder="Кем выдан паспорт"></input>
                <input name="dept_code" onChange={(e)=>handle(e)} value={data.dept_code}  className="inp_aaa" style={style_inp} type="text" placeholder="Код подразделения"></input>
                <input name="tax_id" onChange={(e)=>handle(e)} value={data.tax_id}  className="inp_aaa" style={style_inp} type="text" placeholder="ИНН"></input>
                <select name="posid" onChange={(e)=>handle(e)} value={data.posid} className="inp_aaa" style={style_inp}>
                {data_pos.map((e)=> {
                    return(
                        <option value={e.id}>{e.position_name}</option>
                    )
                })}
                </select>
                <input name="nk" onChange={(e)=>handle(e)} value={data.nk} className="inp_aaa" style={style_inp} type="text" placeholder="Логин"></input>
                <input name="tg" onChange={(e)=>handle(e)} value={data.tg} className="inp_aaa" style={style_inp} type="text" placeholder="Телеграм-аккаунт"></input>
                <input name="phone" onChange={(e)=>handle(e)} value={data.phone} className="inp_aaa" style={style_inp} type="text" placeholder="Номер Телефона"></input>
                <label>Аватарка </label><input required="required" accept=".jpg,.jpeg" onChange={(e)=>loadFile1(e.target.files[0])}  className="admin_upload_obj__input" type="file" name="img_p"/>
                    <img src={iimg1 !== undefined ? iimg1 : "https://velaxom.ru/assets/images/rasprodazha/kessler-parts/no-image.png"} alt="test" width={320}/>
                <button className="inp_btn">Создать пользователя</button>
            </form>
        </div>
    )
}

export default AddEmpl;