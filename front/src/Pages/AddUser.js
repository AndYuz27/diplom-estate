import React from "react";
import axios from "axios";
import '../components/style_comps.css'
function AddUser() {

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

const [iimg1, SetImg1] = React.useState()
const [crds, SetCoords] = React.useState('')

const [data, setData] = React.useState({
    name: '',
    sur: '',
    lastn: '',
    phone: '',
    email: '',
    pwd: '',
    wrkedu_plc: '',
    coords: '',
    imga: '',
    tg: ''
})

function GetDataByYandex(adr){
    let conv_pluses = adr.replace(/\s/g, '+');
    console.log(conv_pluses)
    axios.get(`https://geocode-maps.yandex.ru/1.x/?apikey=a30ce7a4-8d94-43c7-ab23-753aca932401&geocode=${adr}&format=json`)
    .then(res => {
        console.log(res.data.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos)
        SetCoords(res.data.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos)
    })
    .catch(err => {
        console.log(err)
    })
}

function submit(e) {
    try{
    e.preventDefault();
    GetDataByYandex(data.wrkedu_plc) 
    axios.post('http://localhost:8080/api/user_client', {
        name: data.name,
        sur: data.sur,
        lastn: data.lastn,
        phone: data.phone,
        email: data.email,
        pwd: data.pwd,
        wrkedu_plc: data.wrkedu_plc,
        coords: crds,
        imga: iimg1,
        tg: data.tg
    }).then(res => {
                console.log(res.data)
                localStorage.setItem('email_client', data.email)
                localStorage.setItem('isAuthClient', true)
                window.location.href=`/client/${data.email}`;
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
            <h2>Регистрация</h2>
            <form className="addempl_form" style={style_form} onSubmit={submit}>
                <input name="name" onChange={(e)=>handle(e)} value={data.name} className="inp_aaa" style={style_inp} type="text" placeholder="Имя"></input>
                <input name="sur" onChange={(e)=>handle(e)} value={data.sur} className="inp_aaa" style={style_inp} type="text" placeholder="Фамилия"></input>
                <input name="lastn" onChange={(e)=>handle(e)} value={data.lastn} className="inp_aaa" style={style_inp} type="text" placeholder="Отчество"></input>
                <input name="email" onChange={(e)=>handle(e)} value={data.email}  className="inp_aaa" style={style_inp} type="email" placeholder="эл. почта"></input>
                <input name="pwd" onChange={(e)=>handle(e)} value={data.pass}  className="inp_aaa" style={style_inp} type="password" placeholder="Пароль"></input>
                <input name="tg" onChange={(e)=>handle(e)} value={data.tg} className="inp_aaa" style={style_inp} type="text" placeholder="Телеграм-аккаунт"></input>
                <input name="phone" onChange={(e)=>handle(e)} value={data.phone} className="inp_aaa" style={style_inp} type="text" placeholder="Номер Телефона"></input>
                <input name="wrkedu_plc" onChange={(e)=>handle(e)} value={data.wrkedu_plc} className="inp_aaa" style={style_inp} type="text" placeholder="Адрес места работы/учёбы"></input>
                <label>Аватарка </label><input required="required" accept=".jpg,.jpeg" onChange={(e)=>loadFile1(e.target.files[0])}  className="admin_upload_obj__input" type="file" name="img_p"/>
                    <img src={iimg1 !== undefined ? iimg1 : "https://velaxom.ru/assets/images/rasprodazha/kessler-parts/no-image.png"} alt="test" width={320}/>
                <button className="inp_btn">Создать учётную запись</button>
            </form>
        </div>
    )
}

export default AddUser;