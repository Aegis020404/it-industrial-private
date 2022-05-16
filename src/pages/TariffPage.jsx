import React, { useRef, useEffect } from "react";
import TariffList from "../components/tariffP/TariffList";

const TariffPage = ()=>{
    const tariffRef = useRef('')
    useEffect(()=>{
        tariffRef.current.classList.toggle('tariffI')
    },[tariffRef])
    return (
        <div>
            <main ref={tariffRef} className='tariff'>
                <TariffList/>
            </main>
        </div>
    )
}

export default TariffPage