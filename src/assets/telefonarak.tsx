import { useEffect, useState } from "react";
import { Phone,Features } from "../technikaiKutyuk";

export function Teloarak(){
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
        {telo.map(element=>
        <div className="card w-25 text-center">
            <div className="card-body">
                <p>{element.brand}</p>
                <p>{element.price}</p>

            </div>
        </div>


        )}
    </>
}