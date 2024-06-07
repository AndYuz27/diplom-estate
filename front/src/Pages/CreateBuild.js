import axios from "axios"
import { useState } from "react"

export default function СreateBuild(){

    const [imgData1, SetImg1] = useState('')
    const [imgData2, SetImg2] = useState('')
    const [imgData3, SetImg3] = useState('')
    const [fdata, setFData] = useState({
        name_build: '',
        floor_cnt: '',
        el_norm: '',
        el_large: '',
        trash: '',
        year: '',
        security: '',
        gas: '',
        wall: '',
        nso: '',
        blc: '',
        cnt_fl: '',
        image: '',
        image2: '',
        image3: ''

    })

    function submit(e) {
        
        alert('Внимание, при публикации объявления, убедитесь, что данное объявление оплаченно, в ином случае объявление будет СНЯТО ИЗ КАТАЛОГА')

        try{
        e.preventDefault();
        axios.post('http://localhost:8080/', {
            name_build: fdata.name_build,
            floor_cnt: fdata.name_build,
            el_norm: fdata.el_norm,
            el_large: fdata.el_large,
            trash: fdata.trash,
            year: fdata.year,
            security: fdata.security,
            gas: fdata.gas,
            wall: fdata.wall,
            nso: fdata.nso,
            blc: fdata.blc,
            cnt_fl: fdata.cnt_fl,
            image: imgData1,
            image2: imgData2,
            image3: imgData3
                }).then(res => {
            console.log(res.data)
            // window.location.href="/admin/table"
        })
    }catch(err){
            console.log('ошибка загрузки в базу\n', err)
            alert('ошибка загрузки данных')
        }

    }

    function handle(e) {
        const newdata={...fdata}
        newdata[e.target.name] = e.target.value
        setFData(newdata)
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
        function loadFile2(a){
            const file = a;
            let reader = new FileReader();
            const read = reader.readAsDataURL(file)
            reader.onload = function() {
                console.log(reader.result);
                SetImg2(reader.result)
              };
            
            }
    function loadFile3(a){
        const file = a;
        let reader = new FileReader();
        const read = reader.readAsDataURL(file)
        reader.onload = function() {
            console.log(reader.result);
            SetImg3(reader.result)
          };
        
        }

    return(
        <div className="create_build">
            <div className="create_build_info">
                <h2>Добавление информации о постройке</h2>
                <p>Добавление информации о доме, можно упростить процесс добавления информации о недвижимости</p>
            </div>
            <form className="create_build_form" onSubmit={submit}>
                <div className="create_build_form_text_info">

                </div>
                <div className="create_build_form_text_image">

                </div>
                <button className="">Добавить</button>
            </form>
            
        </div>
    )
}

export  function CreateAprt(){
    return(
        <div>
            
        </div>
    )
}