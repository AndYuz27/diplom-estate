export default function AddBuild(){

    return(
        <div className="addBuild">
            <h2>Добавить постройку</h2>
            <form onSubmit={()=> alert('test')} className="addBuild_form">
                <div className="form_field">
                    <label>Название Постройки</label>
                    <input type="text" name="nm_build">Название Постройки</input>
                </div>
            </form>
        </div>
    )
}