import React from 'react'
import './modal.css'

export default function ModalEstate({active, setActive, children}){
    return(
        <div className={active ? 'modal-estate active': 'modal-estate'} onClick={() => setActive(false)}>
            <div className={active ? 'modal-estate_content active': 'modal-estate_content'} onClick={e => e.stopPropagation()}>
                {children}
            </div>  
        </div>
    )
};