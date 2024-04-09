import { useState } from "react"

export default function Chat(){

    const [messages, setMessages]= useState([]);
    const [isEmp, setIsEmp]= useState(false);
    const [isLoad, setIsLoad]= useState(false);

    return(
        <div className="chat">
            
        </div>
    )
}