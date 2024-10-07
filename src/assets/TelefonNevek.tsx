import { useEffect, useState } from "react";
import { Phone,Features } from "../technikaiKutyuk";

export function Telo(){
    const [telo,settelo]=useState<Phone[]>([])

    useEffect(()=>{
        async function Load() {
            const response=await fetch('technikaiKutyuk.json')
            const data = await response.json();
            settelo(data.phones)
        }
       Load()
    },[])

    return <>
        <ul>
            {telo.map((element)=><li>{element.model} - {element.brand} </li>)}
        </ul>
    </>
}