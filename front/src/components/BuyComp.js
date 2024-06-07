export function BuyComp(props){

const tk  = Math.floor(Math.random() * (200000 - 100000) + 100000);

    function createPrice(type, currency){
        if(type === 'estate_flt'){
            return 215
        }else if (type === 'estate_house'){
            return 150
        }else if (type === 'estate_shouse'){
            return 120
        }else if (type === 'estate_field'){
            return 0
        }else if (type === 'avans'){
            return 20000
        }else{
            return 'error_choose'
        }

    }
    console.log(createPrice('avans'))
    return(
        <div className="buy_comp">
        
        </div>
    )
}